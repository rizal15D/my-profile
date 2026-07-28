import { chromium } from "playwright";

const executablePath =
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const baseUrl = "http://127.0.0.1:3002";
const articlePaths = [
  "/articles/cqrs-command-query-responsibility-segregation",
  "/articles/kontrak-backend-frontend-api-contract-first",
];
const viewports = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844 },
};

const browser = await chromium.launch({ executablePath, headless: true });
const results = [];

for (const [viewportName, viewport] of Object.entries(viewports)) {
  for (const path of ["/articles", ...articlePaths]) {
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();
    const errors = [];

    page.on("console", (message) => {
      if (message.type() === "error") {
        errors.push(`console: ${message.text()}`);
      }
    });
    page.on("pageerror", (error) => errors.push(`page: ${error.message}`));

    const response = await page.goto(`${baseUrl}${path}`, {
      waitUntil: "networkidle",
    });

    if (response?.status() !== 200) {
      errors.push(`status: ${response?.status() ?? "no response"}`);
    }

    const pageState = await page.evaluate(() => {
      const jsonLdBlocks = Array.from(
        document.querySelectorAll('script[type="application/ld+json"]'),
      );
      const jsonLd = jsonLdBlocks.map((script) => {
        try {
          return JSON.parse(script.textContent ?? "");
        } catch {
          return null;
        }
      });

      return {
        canonical: document
          .querySelector('link[rel="canonical"]')
          ?.getAttribute("href"),
        description: document
          .querySelector('meta[name="description"]')
          ?.getAttribute("content"),
        documentWidth: document.documentElement.scrollWidth,
        h1: document.querySelector("h1")?.textContent?.trim(),
        jsonLd,
        sectionCount: document.querySelectorAll("article section[id]").length,
        sourceCount: document.querySelectorAll('[id^="reference-"]').length,
        viewportWidth: window.innerWidth,
      };
    });

    if (pageState.documentWidth > pageState.viewportWidth) {
      errors.push(
        `horizontal overflow: ${pageState.documentWidth}px > ${pageState.viewportWidth}px`,
      );
    }
    if (!pageState.h1) {
      errors.push("missing h1");
    }
    if (!pageState.description) {
      errors.push("missing meta description");
    }
    if (!pageState.canonical) {
      errors.push("missing canonical");
    }
    if (pageState.jsonLd.some((item) => item === null)) {
      errors.push("invalid JSON-LD");
    }

    if (articlePaths.includes(path)) {
      if (pageState.sectionCount < 6) {
        errors.push(`too few article sections: ${pageState.sectionCount}`);
      }
      if (pageState.sourceCount < 6) {
        errors.push(`too few cited sources: ${pageState.sourceCount}`);
      }

      const ogImage = await page
        .locator('meta[property="og:image"]')
        .getAttribute("content");
      if (!ogImage) {
        errors.push("missing og:image");
      } else {
        const imagePath = new URL(ogImage).pathname;
        const imageResponse = await page.request.get(
          new URL(imagePath, baseUrl).toString(),
        );
        if (!imageResponse.ok()) {
          errors.push(`og:image status: ${imageResponse.status()}`);
        }
        if (
          !imageResponse.headers()["content-type"]?.startsWith("image/png")
        ) {
          errors.push("og:image is not PNG");
        }
      }
    }

    const slug = path === "/articles" ? "index" : path.split("/").at(-1);
    await page.screenshot({
      path: `.next/article-${slug}-${viewportName}.png`,
      fullPage: true,
    });

    results.push({ viewportName, path, pageState, errors });
    await context.close();
  }
}

const endpointChecks = {};
const requestContext = await browser.newContext();
for (const endpoint of [
  "/robots.txt",
  "/sitemap.xml",
  "/llms.txt",
  "/feed.xml",
]) {
  const response = await requestContext.request.get(`${baseUrl}${endpoint}`);
  endpointChecks[endpoint] = {
    contentType: response.headers()["content-type"],
    ok: response.ok(),
    status: response.status(),
  };
}
await requestContext.close();
await browser.close();

console.log(
  JSON.stringify(
    {
      endpointChecks,
      results: results.map((result) => ({
        canonical: result.pageState.canonical,
        errors: result.errors,
        h1: result.pageState.h1,
        path: result.path,
        sectionCount: result.pageState.sectionCount,
        sourceCount: result.pageState.sourceCount,
        viewportName: result.viewportName,
      })),
    },
    null,
    2,
  ),
);

if (
  results.some((result) => result.errors.length > 0) ||
  Object.values(endpointChecks).some((endpoint) => !endpoint.ok)
) {
  process.exitCode = 1;
}
