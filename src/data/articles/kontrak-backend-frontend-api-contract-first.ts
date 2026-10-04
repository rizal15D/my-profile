import type { Article } from "./types";

export const apiContractArticle = {
  slug: "kontrak-backend-frontend-api-contract-first",
  theme: "contract",
  category: {
    id: "API Engineering",
    en: "API Engineering",
  },
  title: {
    id: "Kontrak Backend–Frontend: Cara Mencegah Integrasi API Rusak",
    en: "Backend–Frontend Contracts: How to Prevent Broken API Integrations",
  },
  excerpt: {
    id: "Cara menyusun API contract yang dapat dibaca manusia dan mesin, membedakan perubahan aman dari breaking change, serta menguncinya dengan OpenAPI dan contract testing di CI.",
    en: "How to design an API contract humans and machines can understand, distinguish safe changes from breaking changes, and enforce it with OpenAPI and contract testing in CI.",
  },
  seoDescription: {
    id: "Panduan kontrak backend–frontend dengan OpenAPI: request, response, error, breaking change, contract testing, versioning, dan quality gate di CI.",
    en: "A practical backend–frontend contract guide covering OpenAPI, requests, responses, errors, breaking changes, contract tests, versioning, and CI gates.",
  },
  directAnswer: {
    id: "Kontrak backend–frontend adalah kesepakatan eksplisit tentang request, response, error, autentikasi, perilaku, dan cara API berevolusi. Simpan kontrak sebagai artefak versioned seperti OpenAPI, validasi implementasi terhadapnya, lalu blokir breaking change melalui compatibility check dan contract test di CI.",
    en: "A backend–frontend contract is an explicit agreement about requests, responses, errors, authentication, behavior, and API evolution. Store it as a versioned artifact such as OpenAPI, validate implementations against it, and block breaking changes through compatibility checks and contract tests in CI.",
  },
  publishedAt: "2026-07-28",
  modifiedAt: "2026-07-28",
  publishedLabel: {
    id: "28 Juli 2026",
    en: "July 28, 2026",
  },
  modifiedLabel: {
    id: "28 Juli 2026",
    en: "July 28, 2026",
  },
  readingTime: {
    id: "13 menit baca",
    en: "13 min read",
  },
  keywords: [
    "kontrak backend frontend",
    "API contract",
    "contract first",
    "OpenAPI",
    "Swagger",
    "contract testing",
    "consumer driven contract",
    "breaking change API",
    "frontend backend integration",
  ],
  takeaways: [
    {
      id: "Kontrak API mencakup semantik dan lifecycle, bukan hanya bentuk JSON.",
      en: "An API contract covers semantics and lifecycle, not only JSON shape.",
    },
    {
      id: "OpenAPI menjadi sumber kebenaran yang dapat menghasilkan dokumentasi, mock, tipe, dan validasi otomatis.",
      en: "OpenAPI becomes a machine-readable source of truth for documentation, mocks, types, and automated validation.",
    },
    {
      id: "Compatibility diff dan contract test harus berjalan sebelum backend atau frontend dirilis.",
      en: "Compatibility diffs and contract tests should run before either backend or frontend is released.",
    },
  ],
  sections: [
    {
      id: "apa-itu-kontrak-api",
      heading: {
        id: "Apa itu kontrak backend–frontend?",
        en: "What is a backend–frontend contract?",
      },
      paragraphs: [
        {
          text: {
            id: "Kontrak API adalah antarmuka yang disepakati antara provider—biasanya backend—dan consumer seperti web, mobile, atau service lain. Ia menjawab bukan hanya field apa yang dikirim, tetapi juga kapan request dianggap berhasil, error apa yang mungkin terjadi, apakah operasi aman di-retry, dan berapa lama versi lama didukung.",
            en: "An API contract is the agreed interface between a provider—usually the backend—and consumers such as web, mobile, or another service. It defines not only which fields are sent, but also when a request succeeds, which errors can occur, whether retry is safe, and how long old versions remain supported.",
          },
        },
        {
          text: {
            id: "OpenAPI menyediakan format language-agnostic agar manusia dan perangkat lunak dapat memahami HTTP API tanpa membaca source code. Namun schema formal terutama menangkap aspek sintaksis; aturan bisnis dan urutan interaksi tetap perlu dijelaskan serta diuji.",
            en: "OpenAPI provides a language-agnostic format through which humans and software can understand an HTTP API without reading its source code. A formal schema mainly captures syntax, however; business rules and interaction sequences still need explanation and tests.",
          },
          citations: [1, 9],
        },
      ],
      callout: {
        tone: "info",
        title: {
          id: "Kontrak bukan dokumentasi setelah implementasi",
          en: "A contract is not post-implementation documentation",
        },
        text: {
          id: "Kontrak adalah input desain yang direview bersama sebelum kode, lalu terus diverifikasi terhadap implementasi setelah kode berjalan.",
          en: "A contract is a design input reviewed together before coding, then continuously verified against the running implementation.",
        },
      },
    },
    {
      id: "isi-kontrak-api",
      heading: {
        id: "Apa saja yang wajib ada dalam kontrak API?",
        en: "What belongs in an API contract?",
      },
      paragraphs: [
        {
          text: {
            id: "Kontrak yang hanya berisi contoh response sukses meninggalkan terlalu banyak ruang untuk asumsi. Gunakan daftar berikut sebagai baseline minimum untuk setiap operation.",
            en: "A contract containing only a successful response example leaves too much room for assumptions. Use the following list as a minimum baseline for every operation.",
          },
        },
      ],
      bullets: [
        {
          title: {
            id: "Operation",
            en: "Operation",
          },
          text: {
            id: "Method, path, tujuan bisnis, content type, dan aturan autentikasi atau otorisasi.",
            en: "Method, path, business purpose, content type, and authentication or authorization rules.",
          },
        },
        {
          title: {
            id: "Request",
            en: "Request",
          },
          text: {
            id: "Path/query/header parameter, body schema, required field, nullability, format, enum, batas nilai, dan contoh valid.",
            en: "Path/query/header parameters, body schema, required fields, nullability, formats, enums, value constraints, and valid examples.",
          },
        },
        {
          title: {
            id: "Response",
            en: "Response",
          },
          text: {
            id: "Semua status relevan, schema per status, arti field, pagination, ordering, dan freshness atau consistency guarantee.",
            en: "All relevant statuses, schemas by status, field semantics, pagination, ordering, and freshness or consistency guarantees.",
          },
        },
        {
          title: {
            id: "Error",
            en: "Errors",
          },
          text: {
            id: "Kode stabil untuk mesin, pesan manusia, detail field, correlation ID, serta pemetaan ke HTTP status. RFC 9457 dapat menjadi format dasar.",
            en: "Stable machine codes, human messages, field details, a correlation ID, and HTTP status mapping. RFC 9457 can provide the base format.",
          },
        },
        {
          title: {
            id: "Reliability",
            en: "Reliability",
          },
          text: {
            id: "Timeout, retry policy, idempotency, concurrency precondition, rate limit, dan konsekuensi request duplikat.",
            en: "Timeouts, retry policy, idempotency, concurrency preconditions, rate limits, and duplicate-request consequences.",
          },
        },
        {
          title: {
            id: "Lifecycle",
            en: "Lifecycle",
          },
          text: {
            id: "Owner, versi, deprecation date, sunset date, migration guide, dan kanal pemberitahuan perubahan.",
            en: "Owner, version, deprecation date, sunset date, migration guide, and change-notification channel.",
          },
        },
      ],
    },
    {
      id: "workflow-contract-first",
      heading: {
        id: "Workflow contract-first yang dapat dijalankan tim",
        en: "A contract-first workflow a team can actually run",
      },
      paragraphs: [
        {
          text: {
            id: "Riset evolusi API pada 11 perusahaan menemukan bahwa backward compatibility, versioning, dan kolaborasi adalah strategi utama, sementara analisis dampak manual dan komunikasi perubahan yang tidak jelas menjadi tantangan berulang. Workflow harus menjadikan kontrak sebagai titik koordinasi sekaligus quality gate otomatis.",
            en: "API-evolution research across 11 companies found backward compatibility, versioning, and collaboration to be core strategies, while manual impact analysis and unclear change communication were recurring challenges. A workflow should make the contract both a coordination point and an automated quality gate.",
          },
          citations: [5],
        },
      ],
      steps: [
        {
          title: {
            id: "Tulis use case dan acceptance criteria",
            en: "Write the use case and acceptance criteria",
          },
          text: {
            id: "Sepakati outcome pengguna, state kosong/loading/error, serta aturan bisnis sebelum membahas nama field.",
            en: "Agree on the user outcome, empty/loading/error states, and business rules before debating field names.",
          },
        },
        {
          title: {
            id: "Desain kontrak bersama",
            en: "Design the contract together",
          },
          text: {
            id: "Frontend, backend, dan QA mereview operation, payload, error, dan skenario batas dalam pull request yang sama.",
            en: "Frontend, backend, and QA review operations, payloads, errors, and edge cases in the same pull request.",
          },
        },
        {
          title: {
            id: "Lint dan compatibility check",
            en: "Lint and check compatibility",
          },
          text: {
            id: "Validasi OpenAPI lalu bandingkan dengan versi produksi untuk mendeteksi penghapusan field, perubahan tipe, atau status yang merusak consumer.",
            en: "Validate OpenAPI, then compare it with production to detect removed fields, changed types, or statuses that break consumers.",
          },
        },
        {
          title: {
            id: "Bangun mock dan tipe",
            en: "Build mocks and types",
          },
          text: {
            id: "Frontend bekerja terhadap mock berbasis kontrak; SDK atau TypeScript types dihasilkan dari artefak yang sama.",
            en: "The frontend works against a contract-based mock; SDKs or TypeScript types are generated from the same artifact.",
          },
        },
        {
          title: {
            id: "Implementasikan provider",
            en: "Implement the provider",
          },
          text: {
            id: "Backend memvalidasi request dan response terhadap schema serta menjalankan provider verification.",
            en: "The backend validates requests and responses against the schema and runs provider verification.",
          },
        },
        {
          title: {
            id: "Jalankan contract test di CI",
            en: "Run contract tests in CI",
          },
          text: {
            id: "Release ditahan jika provider tidak lagi memenuhi ekspektasi consumer aktif.",
            en: "A release is blocked when the provider no longer meets an active consumer's expectations.",
          },
        },
        {
          title: {
            id: "Pantau dan evolusikan",
            en: "Observe and evolve",
          },
          text: {
            id: "Ukur penggunaan operation atau field, umumkan deprecation, dan hapus hanya setelah migration window selesai.",
            en: "Measure operation or field usage, announce deprecation, and remove only after the migration window closes.",
          },
        },
      ],
    },
    {
      id: "contoh-openapi",
      heading: {
        id: "Contoh kontrak OpenAPI yang berguna bagi frontend",
        en: "An OpenAPI contract that is useful to the frontend",
      },
      paragraphs: [
        {
          text: {
            id: "Contoh ringkas ini tidak berhenti pada response 200. Ia membedakan request diterima secara asinkron melalui 202, mendefinisikan idempotency key, dan menyediakan bentuk error yang konsisten.",
            en: "This compact example does not stop at a 200 response. It models asynchronous acceptance with 202, defines an idempotency key, and provides a consistent error shape.",
          },
          citations: [1, 2, 3],
        },
      ],
      code: {
        label: {
          id: "OpenAPI: command pembuatan pesanan",
          en: "OpenAPI: order-creation command",
        },
        language: "yaml",
        filename: "openapi.yaml",
        code: `paths:
/orders:
  post:
    operationId: placeOrder
    summary: Place a new order
    parameters:
      - in: header
        name: Idempotency-Key
        required: true
        schema: { type: string, format: uuid }
    requestBody:
      required: true
      content:
        application/json:
          schema:
            $ref: "#/components/schemas/PlaceOrder"
    responses:
      "202":
        description: Command accepted; processing is not complete
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/OperationStatus"
      "422":
        description: Business rule rejected the command
        content:
          application/problem+json:
            schema:
              $ref: "#/components/schemas/Problem"`,
      },
      callout: {
        tone: "success",
        title: {
          id: "Contoh adalah bagian kontrak",
          en: "Examples are part of the contract",
        },
        text: {
          id: "Tambahkan contoh sukses, kosong, dan error yang lolos schema. Contoh executable membantu developer memahami kontrak sekaligus menangkap dokumentasi yang mulai tidak sinkron.",
          en: "Add schema-valid success, empty, and error examples. Executable examples help developers understand the contract and catch documentation drift.",
        },
      },
    },
    {
      id: "breaking-change",
      heading: {
        id: "Bedakan perubahan aman dan breaking change",
        en: "Distinguish safe changes from breaking changes",
      },
      paragraphs: [
        {
          text: {
            id: "Web API terlihat loosely coupled melalui HTTP, tetapi studi evolusi pada API populer menunjukkan bahwa client tetap dapat terikat kuat pada kebijakan perubahan provider. Karena itu, kompatibilitas harus dinilai dari sudut pandang consumer yang benar-benar berjalan, bukan hanya dari kode backend.",
            en: "Web APIs appear loosely coupled over HTTP, yet evolution research on popular APIs shows that clients can remain strongly tied to provider change policies. Compatibility must therefore be assessed from the perspective of running consumers, not backend code alone.",
          },
          citations: [4],
        },
      ],
      table: {
        caption: {
          id: "Contoh perubahan pada kontrak response",
          en: "Examples of response-contract changes",
        },
        headers: [
          { id: "Perubahan", en: "Change" },
          { id: "Risiko", en: "Risk" },
          { id: "Strategi", en: "Strategy" },
        ],
        rows: [
          [
            {
              id: "Menambah field response opsional",
              en: "Add an optional response field",
            },
            {
              id: "Umumnya kompatibel jika consumer mengabaikan field asing.",
              en: "Usually compatible when consumers ignore unknown fields.",
            },
            {
              id: "Tambahkan tanpa mengubah arti field lama.",
              en: "Add it without changing the meaning of existing fields.",
            },
          ],
          [
            {
              id: "Menghapus atau mengganti nama field",
              en: "Remove or rename a field",
            },
            {
              id: "Breaking untuk consumer yang membacanya.",
              en: "Breaking for consumers that read it.",
            },
            {
              id: "Tambahkan field baru, deprecate field lama, lalu migrasikan.",
              en: "Add a new field, deprecate the old one, then migrate.",
            },
          ],
          [
            {
              id: "Membuat field opsional menjadi required",
              en: "Make an optional field required",
            },
            {
              id: "Breaking pada request lama.",
              en: "Breaking for existing requests.",
            },
            {
              id: "Berikan default di server atau buat operation/version baru.",
              en: "Apply a server default or introduce a new operation/version.",
            },
          ],
          [
            {
              id: "Mengubah string menjadi number",
              en: "Change a string to a number",
            },
            {
              id: "Breaking pada parser dan generated type.",
              en: "Breaking for parsers and generated types.",
            },
            {
              id: "Tambahkan field baru dengan tipe baru; jangan mutate diam-diam.",
              en: "Add a new field with the new type; do not silently mutate it.",
            },
          ],
          [
            {
              id: "Menambah nilai enum response",
              en: "Add a response enum value",
            },
            {
              id: "Dapat breaking jika UI memakai exhaustive switch.",
              en: "Can break a UI with an exhaustive switch.",
            },
            {
              id: "Sediakan fallback unknown dan komunikasikan perluasan enum.",
              en: "Provide an unknown fallback and communicate enum expansion.",
            },
          ],
          [
            {
              id: "Mengubah makna field tanpa mengubah schema",
              en: "Change field meaning without changing schema",
            },
            {
              id: "Breaking secara semantik dan sulit dideteksi otomatis.",
              en: "Semantically breaking and hard to detect automatically.",
            },
            {
              id: "Buat field/operation baru dan uji perilaku bisnis.",
              en: "Create a new field/operation and test business behavior.",
            },
          ],
        ],
      },
    },
    {
      id: "contract-testing",
      heading: {
        id: "OpenAPI, contract test, atau E2E test?",
        en: "OpenAPI, contract tests, or E2E tests?",
      },
      paragraphs: [
        {
          text: {
            id: "Ketiganya menjawab pertanyaan berbeda. Schema validation memeriksa bentuk data, consumer-driven contract test memverifikasi ekspektasi interaksi consumer–provider secara terisolasi, dan E2E menguji alur nyata melintasi sistem. Penelitian contract testing menempatkannya sebagai pelengkap strategi testing, bukan pengganti seluruh lapisan lain.",
            en: "They answer different questions. Schema validation checks data shape, consumer-driven contract tests verify consumer–provider interaction expectations in isolation, and E2E tests exercise real workflows across the system. Contract-testing research positions it as a complement to a testing strategy, not a replacement for every other layer.",
          },
          citations: [6, 7, 8],
        },
      ],
      table: {
        caption: {
          id: "Lapisan pengujian kontrak",
          en: "Contract-testing layers",
        },
        headers: [
          { id: "Lapisan", en: "Layer" },
          { id: "Menjawab", en: "Answers" },
          { id: "Tidak membuktikan", en: "Does not prove" },
        ],
        rows: [
          [
            {
              id: "OpenAPI lint & schema validation",
              en: "OpenAPI lint & schema validation",
            },
            {
              id: "Apakah dokumen dan payload sesuai bentuk formal?",
              en: "Do the document and payload match the formal shape?",
            },
            {
              id: "Apakah aturan bisnis dan data produksi benar?",
              en: "Are business rules and production data correct?",
            },
          ],
          [
            {
              id: "Compatibility diff",
              en: "Compatibility diff",
            },
            {
              id: "Apakah perubahan berpotensi merusak kontrak lama?",
              en: "Could this change break the previous contract?",
            },
            {
              id: "Apakah consumer memang menggunakan bagian tersebut?",
              en: "Does a consumer actually use that contract surface?",
            },
          ],
          [
            {
              id: "Consumer-driven contract test",
              en: "Consumer-driven contract test",
            },
            {
              id: "Apakah provider memenuhi interaksi yang dibutuhkan consumer?",
              en: "Does the provider satisfy interactions consumers need?",
            },
            {
              id: "Apakah seluruh sistem bekerja dengan dependency nyata?",
              en: "Does the whole system work with real dependencies?",
            },
          ],
          [
            {
              id: "Integration / E2E",
              en: "Integration / E2E",
            },
            {
              id: "Apakah alur kritis bekerja melintasi komponen?",
              en: "Do critical workflows work across components?",
            },
            {
              id: "Setiap kombinasi schema secara cepat dan terisolasi.",
              en: "Every schema combination quickly and in isolation.",
            },
          ],
        ],
      },
      callout: {
        tone: "warning",
        title: {
          id: "Schema tidak memahami seluruh bisnis",
          en: "A schema does not understand the whole business",
        },
        text: {
          id: "Schema dapat memastikan quantity adalah integer positif, tetapi belum tentu dapat membuktikan stok tersedia, promo berlaku, atau transisi status diizinkan.",
          en: "A schema can ensure quantity is a positive integer, but it cannot necessarily prove inventory exists, a promotion applies, or a status transition is allowed.",
        },
      },
    },
    {
      id: "kontrak-untuk-cqrs",
      heading: {
        id: "Kontrak khusus ketika backend memakai CQRS",
        en: "Contract details when the backend uses CQRS",
      },
      paragraphs: [
        {
          text: {
            id: "Pada CQRS asinkron, batas arsitektur tidak boleh bocor sebagai kebingungan UI. Kontrak harus menjelaskan bahwa 202 Accepted berarti command diterima tetapi belum selesai, menyediakan operationId untuk mengecek status, serta menetapkan kapan read model diperkirakan menyusul.",
            en: "With asynchronous CQRS, architectural boundaries should not leak into confusing UI behavior. The contract must explain that 202 Accepted means the command was accepted but has not finished, provide an operationId for status checks, and define when the read model is expected to catch up.",
          },
        },
      ],
      bullets: [
        {
          title: {
            id: "Command sebagai intent",
            en: "Commands as intent",
          },
          text: {
            id: "Gunakan operation seperti placeOrder atau approveInvoice agar efek, izin, dan error domain dapat dijelaskan.",
            en: "Use operations such as placeOrder or approveInvoice so effects, permissions, and domain errors can be explained.",
          },
        },
        {
          title: {
            id: "Status pemrosesan",
            en: "Processing status",
          },
          text: {
            id: "Definisikan pending, succeeded, failed, expiry, polling interval, dan mekanisme notifikasi jika ada.",
            en: "Define pending, succeeded, failed, expiry, polling intervals, and notification mechanisms when available.",
          },
        },
        {
          title: {
            id: "Read-your-own-write",
            en: "Read-your-own-write",
          },
          text: {
            id: "Jelaskan apakah UI mendapat snapshot hasil command, optimistic state, atau harus menunggu projection.",
            en: "Explain whether the UI receives a command-result snapshot, uses optimistic state, or waits for the projection.",
          },
        },
        {
          title: {
            id: "Retry dan duplikasi",
            en: "Retries and duplicates",
          },
          text: {
            id: "Wajibkan idempotency key dan dokumentasikan response untuk command yang pernah diproses.",
            en: "Require an idempotency key and document responses for an already-processed command.",
          },
        },
      ],
    },
    {
      id: "checklist-kontrak",
      heading: {
        id: "Definition of Done untuk kontrak API",
        en: "Definition of Done for an API contract",
      },
      bullets: [
        {
          title: {
            id: "Dapat ditemukan",
            en: "Discoverable",
          },
          text: {
            id: "OpenAPI berada di repository, memiliki owner, versi, dan URL dokumentasi yang stabil.",
            en: "OpenAPI lives in the repository with an owner, version, and stable documentation URL.",
          },
        },
        {
          title: {
            id: "Lengkap",
            en: "Complete",
          },
          text: {
            id: "Success, empty, validation, auth, conflict, rate-limit, dan server-error flow telah didefinisikan.",
            en: "Success, empty, validation, auth, conflict, rate-limit, and server-error flows are defined.",
          },
        },
        {
          title: {
            id: "Dapat dieksekusi",
            en: "Executable",
          },
          text: {
            id: "Contoh lolos schema, mock berasal dari kontrak, dan provider response diverifikasi otomatis.",
            en: "Examples validate against the schema, mocks derive from the contract, and provider responses are verified automatically.",
          },
        },
        {
          title: {
            id: "Kompatibel",
            en: "Compatible",
          },
          text: {
            id: "CI membandingkan kontrak dengan versi produksi dan menolak breaking change yang tidak disengaja.",
            en: "CI compares the contract with production and rejects unintended breaking changes.",
          },
        },
        {
          title: {
            id: "Dipahami consumer",
            en: "Consumer-aware",
          },
          text: {
            id: "Frontend telah mereview nullability, fallback enum, empty state, error mapping, dan consistency behavior.",
            en: "The frontend has reviewed nullability, enum fallbacks, empty states, error mapping, and consistency behavior.",
          },
        },
        {
          title: {
            id: "Dapat berevolusi",
            en: "Evolvable",
          },
          text: {
            id: "Perubahan memiliki deprecation window, migration guide, usage telemetry, dan tanggal penghapusan.",
            en: "Changes have a deprecation window, migration guide, usage telemetry, and removal date.",
          },
        },
      ],
    },
  ],
  faqs: [
    {
      question: {
        id: "Apa perbedaan API contract dan dokumentasi API?",
        en: "What is the difference between an API contract and API documentation?",
      },
      answer: {
        id: "Dokumentasi membantu manusia memahami cara memakai API. Kontrak adalah bagian yang disepakati dan dapat diverifikasi—termasuk schema, status, error, serta perilaku kompatibilitas. OpenAPI dapat berfungsi sebagai kontrak sekaligus menghasilkan dokumentasi.",
        en: "Documentation helps humans understand how to use an API. A contract is the agreed and verifiable surface—including schemas, statuses, errors, and compatibility behavior. OpenAPI can serve as a contract while also generating documentation.",
      },
    },
    {
      question: {
        id: "Apakah OpenAPI sama dengan Swagger?",
        en: "Are OpenAPI and Swagger the same?",
      },
      answer: {
        id: "OpenAPI adalah spesifikasi untuk mendeskripsikan HTTP API. Swagger adalah nama ekosistem alat yang dapat membaca atau menghasilkan dokumen OpenAPI, seperti Swagger UI dan Swagger Editor.",
        en: "OpenAPI is the specification for describing HTTP APIs. Swagger is the name of a tooling ecosystem that reads or generates OpenAPI documents, including Swagger UI and Swagger Editor.",
      },
    },
    {
      question: {
        id: "Siapa yang seharusnya memiliki kontrak API?",
        en: "Who should own the API contract?",
      },
      answer: {
        id: "Backend dapat menjadi accountable owner, tetapi desainnya harus direview bersama frontend, QA, dan consumer lain. Kontrak yang dibuat sepihak mudah benar secara teknis namun tidak cocok dengan kebutuhan penggunaan.",
        en: "The backend can be the accountable owner, but frontend, QA, and other consumers should review its design. A one-sided contract can be technically correct while still failing real usage needs.",
      },
    },
    {
      question: {
        id: "Apakah contract testing menggantikan E2E testing?",
        en: "Does contract testing replace E2E testing?",
      },
      answer: {
        id: "Tidak. Contract test memeriksa kesesuaian interaksi consumer–provider secara cepat dan terisolasi. Tetap pertahankan integration dan E2E test dalam jumlah terarah untuk alur bisnis kritis serta dependency nyata.",
        en: "No. Contract tests check consumer–provider interaction compatibility quickly and in isolation. Keep a focused set of integration and E2E tests for critical business flows and real dependencies.",
      },
    },
    {
      question: {
        id: "Kapan API perlu membuat versi baru?",
        en: "When does an API need a new version?",
      },
      answer: {
        id: "Buat versi baru ketika perubahan semantik atau struktur tidak dapat dibuat backward-compatible dalam migration window yang wajar. Penambahan kompatibel biasanya tidak memerlukan versi baru.",
        en: "Create a new version when a semantic or structural change cannot remain backward-compatible within a reasonable migration window. Compatible additions usually do not require a new version.",
      },
    },
  ],
  references: [
    {
      kind: "standard",
      authors: "OpenAPI Initiative",
      title: "OpenAPI Specification",
      publication: "The Linux Foundation",
      year: "2025",
      url: "https://spec.openapis.org/oas/latest.html",
      note: {
        id: "Spesifikasi language-agnostic untuk mendeskripsikan HTTP API.",
        en: "The language-agnostic specification for describing HTTP APIs.",
      },
    },
    {
      kind: "standard",
      authors: "JSON Schema",
      title: "JSON Schema Draft 2020-12",
      publication: "JSON Schema Specification",
      year: "2022",
      url: "https://json-schema.org/draft/2020-12",
      note: {
        id: "Acuan struktur, tipe, constraint, dan validasi data JSON.",
        en: "The reference for JSON structure, types, constraints, and validation.",
      },
    },
    {
      kind: "standard",
      authors: "M. Nottingham, E. Wilde, dan S. Dalal",
      title: "Problem Details for HTTP APIs (RFC 9457)",
      publication: "Internet Engineering Task Force",
      year: "2023",
      url: "https://doi.org/10.17487/RFC9457",
      note: {
        id: "Standar response error machine-readable untuk HTTP API.",
        en: "The standard machine-readable error response format for HTTP APIs.",
      },
    },
    {
      kind: "journal",
      authors: "Tiago Espinha, Andy Zaidman, dan Hans-Gerhard Gross",
      title: "Web API Growing Pains: Loosely Coupled Yet Strongly Tied",
      publication: "Journal of Systems and Software, 100, 27–43",
      year: "2015",
      url: "https://doi.org/10.1016/j.jss.2014.10.014",
      note: {
        id: "Studi dampak evolusi Web API pada provider dan source code client.",
        en: "A study of Web API evolution impact on providers and client source code.",
      },
    },
    {
      kind: "journal",
      authors:
        "Alexander Lercher, Johann Glock, Christian Macho, dan Martin Pinzger",
      title: "Microservice API Evolution in Practice: A Study on Strategies and Challenges",
      publication: "Journal of Systems and Software, 215, 112110",
      year: "2024",
      url: "https://doi.org/10.1016/j.jss.2024.112110",
      note: {
        id: "Wawancara pada 11 perusahaan tentang kompatibilitas, versioning, komunikasi, dan consumer lock-in.",
        en: "Interviews across 11 companies on compatibility, versioning, communication, and consumer lock-in.",
      },
    },
    {
      kind: "journal",
      authors: "Georg-Daniel Schwarz, Felix Quast, dan Dirk Riehle",
      title:
        "Ensuring Syntactic Interoperability Using Consumer-Driven Contract Testing",
      publication: "Software Testing, Verification and Reliability",
      year: "2025",
      url: "https://doi.org/10.1002/stvr.70006",
      note: {
        id: "Systematic literature review dan action research mengenai peran consumer-driven contract testing.",
        en: "A systematic literature review and action-research study of consumer-driven contract testing.",
      },
    },
    {
      kind: "proceeding",
      authors: "Jyri Lehvä, Niko Mäkitalo, dan Tommi Mikkonen",
      title: "Consumer-Driven Contract Tests for Microservices: A Case Study",
      publication: "PROFES 2019, Lecture Notes in Computer Science 11915",
      year: "2019",
      url: "https://doi.org/10.1007/978-3-030-35333-9_35",
      note: {
        id: "Studi kasus pengujian integrasi consumer–provider secara terisolasi.",
        en: "A case study of isolated consumer–provider integration testing.",
      },
    },
    {
      kind: "proceeding",
      authors:
        "Hamdy Michael Ayas, Hartmut Fischer, Philipp Leitner, dan Francisco Gomes",
      title:
        "An Empirical Analysis of Microservices Systems Using Consumer-Driven Contract Testing",
      publication: "48th Euromicro Conference on SEAA",
      year: "2022",
      url: "https://doi.org/10.1109/SEAA56994.2022.00022",
      note: {
        id: "Analisis artefak testing pada repository microservices yang memakai consumer-driven contracts.",
        en: "An analysis of testing artifacts in microservice repositories using consumer-driven contracts.",
      },
    },
    {
      kind: "proceeding",
      authors:
        "Davide Corradini, Zeno Montolli, Michele Pasqua, dan Mariano Ceccato",
      title:
        "DeepREST: Automated Test Case Generation for REST APIs Exploiting Deep Reinforcement Learning",
      publication:
        "39th IEEE/ACM International Conference on Automated Software Engineering",
      year: "2024",
      url: "https://doi.org/10.1145/3691620.3695511",
      note: {
        id: "Membahas batas informasi sintaksis OpenAPI terhadap business logic API.",
        en: "Discusses the limits of OpenAPI's syntactic information relative to API business logic.",
      },
    },
  ],
} satisfies Article;

