import { chromium } from "playwright";

const executablePath =
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

const browser = await chromium.launch({ executablePath, headless: true });

async function checkViewport(name, viewport) {
  const context = await browser.newContext({ viewport });
  const page = await context.newPage();
  const errors = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      errors.push(`console: ${message.text()}`);
    }
  });
  page.on("pageerror", (error) => errors.push(`page: ${error.message}`));

  await page.goto("http://127.0.0.1:3002", {
    waitUntil: "networkidle",
  });

  const layout = await page.evaluate(() => ({
    viewportWidth: window.innerWidth,
    documentWidth: document.documentElement.scrollWidth,
    title: document.title,
    h1: document.querySelector("h1")?.textContent?.trim(),
  }));

  if (layout.documentWidth > layout.viewportWidth) {
    errors.push(
      `horizontal overflow: ${layout.documentWidth}px > ${layout.viewportWidth}px`,
    );
  }

  if (name === "mobile") {
    await page.getByRole("button", { name: "Buka menu" }).click();
    await page.getByRole("link", { name: "Karya" }).waitFor();
    await page.keyboard.press("Escape");
  }

  await page.getByRole("button", { name: "EN", exact: true }).click();
  await page.waitForTimeout(250);
  const languageState = await page.evaluate(() => ({
    stored: window.localStorage.getItem("portfolio-locale"),
    lang: document.documentElement.lang,
    h1: document.querySelector("h1")?.textContent,
  }));
  if (!languageState.h1?.includes("Mehmed")) {
    errors.push("English locale did not activate");
  } else {
    await page.getByRole("button", { name: "Change theme" }).click();
  }

  const darkMode = await page.evaluate(() =>
    document.documentElement.classList.contains("dark"),
  );
  if (languageState.h1?.includes("Mehmed") && !darkMode) {
    errors.push("dark mode class was not applied");
  }

  await page.screenshot({
    path: `.next/portfolio-${name}.png`,
    fullPage: true,
  });

  await context.close();
  return { name, layout, darkMode, errors };
}

const results = [];
results.push(await checkViewport("desktop", { width: 1440, height: 900 }));
results.push(await checkViewport("mobile", { width: 390, height: 844 }));

await browser.close();

console.log(JSON.stringify(results, null, 2));

if (results.some((result) => result.errors.length > 0)) {
  process.exitCode = 1;
}
