import type { Article } from "./types";

export const ledgerBankArticle = {
  slug: "ledgerbank-core-banking-simulator",
  theme: "ledgerbank",
  category: {
    id: "Backend Engineering",
    en: "Backend Engineering",
  },
  title: {
    id: "LedgerBank: Membangun Simulator Core Banking yang Konsisten dan Andal",
    en: "LedgerBank: Building a Consistent and Reliable Core Banking Simulator",
  },
  excerpt: {
    id: "Studi kasus membangun REST API perbankan dengan transfer atomik, idempotency, keamanan berbasis sesi, Transactional Outbox, dan pengujian kegagalan infrastruktur.",
    en: "A case study in building a banking REST API with atomic transfers, idempotency, session-based security, a Transactional Outbox, and infrastructure-failure testing.",
  },
  seoDescription: {
    id: "Studi kasus LedgerBank: simulator core banking Java dengan transfer atomik, idempotency, PostgreSQL, Redis, RabbitMQ, dan Testcontainers.",
    en: "A LedgerBank case study: a Java core banking simulator using atomic transfers, idempotency, PostgreSQL, Redis, RabbitMQ, and Testcontainers.",
  },
  directAnswer: {
    id: "LedgerBank adalah simulator core banking berbasis Java yang saya bangun untuk mempelajari cara menjaga konsistensi, keamanan, dan keandalan transaksi finansial. Fokusnya bukan sekadar endpoint CRUD, tetapi perilaku sistem saat menerima request bersamaan, retry, duplikasi pesan, dan gangguan infrastruktur.",
    en: "LedgerBank is a Java-based core banking simulator I built to study how financial transactions can remain consistent, secure, and reliable. Its focus goes beyond CRUD endpoints to system behavior under concurrent requests, retries, duplicate messages, and infrastructure failures.",
  },
  publishedAt: "2026-10-04",
  modifiedAt: "2026-10-04",
  publishedLabel: {
    id: "4 Oktober 2026",
    en: "October 4, 2026",
  },
  modifiedLabel: {
    id: "4 Oktober 2026",
    en: "October 4, 2026",
  },
  readingTime: {
    id: "11 menit baca",
    en: "11 min read",
  },
  keywords: [
    "LedgerBank",
    "core banking simulator",
    "backend engineering",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Redis",
    "RabbitMQ",
    "Transactional Outbox",
    "idempotency",
    "Testcontainers",
  ],
  takeaways: [
    {
      id: "Transaksi finansial perlu dirancang berdasarkan invariant bisnis, bukan hanya urutan pemanggilan endpoint.",
      en: "Financial transactions should be designed around business invariants, not merely endpoint call sequences.",
    },
    {
      id: "Idempotency membuat retry aman tanpa memproses transfer yang sama dua kali.",
      en: "Idempotency makes retries safe without processing the same transfer twice.",
    },
    {
      id: "Transactional Outbox menghubungkan perubahan database dan publikasi event tanpa mengandalkan dual write yang rapuh.",
      en: "A Transactional Outbox connects database changes and event publication without relying on fragile dual writes.",
    },
    {
      id: "Pengujian concurrency, rollback, duplikasi, dan outage memberi bukti yang lebih kuat daripada happy-path test saja.",
      en: "Testing concurrency, rollbacks, duplicates, and outages provides stronger evidence than happy-path tests alone.",
    },
  ],
  sections: [
    {
      id: "lebih-dari-crud",
      heading: {
        id: "Mengapa proyek ini harus lebih dari CRUD?",
        en: "Why did this project need to go beyond CRUD?",
      },
      paragraphs: [
        {
          text: {
            id: "Saya membangun LedgerBank sebagai REST API edukasional yang mensimulasikan registrasi dan autentikasi pengguna, pengelolaan rekening, deposit, penarikan, transfer internal, dan riwayat transaksi. Fitur-fitur itu sengaja dipilih karena saling bertemu pada satu pertanyaan penting: bagaimana data tetap benar ketika banyak hal terjadi pada waktu yang hampir bersamaan?",
            en: "I built LedgerBank as an educational REST API simulating user registration and authentication, account management, deposits, withdrawals, internal transfers, and transaction history. These features deliberately converge on one important question: how does the data remain correct when many things happen at nearly the same time?",
          },
        },
        {
          text: {
            id: "Membuat endpoint yang mengembalikan status sukses relatif mudah. Tantangan sebenarnya muncul ketika client mengirim ulang request karena timeout, dua transfer menyentuh rekening yang sama, message broker tidak tersedia, atau event terkirim lebih dari sekali. Karena itu, saya menjadikan konsistensi, keamanan, dan recovery sebagai bagian dari desain sejak awal.",
            en: "Building an endpoint that returns a successful status is relatively easy. The real challenge appears when a client retries after a timeout, two transfers touch the same account, the message broker becomes unavailable, or an event is delivered more than once. That is why I treated consistency, security, and recovery as design concerns from the beginning.",
          },
        },
      ],
      callout: {
        tone: "info",
        title: {
          id: "Batas proyek",
          en: "Project boundary",
        },
        text: {
          id: "LedgerBank adalah simulator untuk belajar dan portofolio. Proyek ini tidak dimaksudkan sebagai sistem perbankan produksi.",
          en: "LedgerBank is a learning and portfolio simulator. It is not intended to be a production banking system.",
        },
      },
    },
    {
      id: "invariant-dan-transfer-atomik",
      heading: {
        id: "Menjaga invariant dengan transfer atomik",
        en: "Protecting invariants with atomic transfers",
      },
      paragraphs: [
        {
          text: {
            id: "PostgreSQL menjadi source of truth untuk rekening, saldo, transfer, dan riwayat transaksi. Operasi yang saling bergantung dijalankan dalam satu transaksi database agar perubahan berhasil seluruhnya atau dibatalkan seluruhnya. Properti transaksi dan isolation level database menjadi fondasi, tetapi aturan bisnis tetap harus dibuat eksplisit di application layer.",
            en: "PostgreSQL is the source of truth for accounts, balances, transfers, and transaction history. Dependent operations run in one database transaction so that all changes either succeed or are rolled back together. Database transaction properties and isolation levels provide the foundation, but business rules still need to be explicit in the application layer.",
          },
          citations: [2],
        },
        {
          text: {
            id: "Untuk transfer internal, sistem harus mempertahankan beberapa invariant: rekening sumber dan tujuan valid, pengguna berhak mengakses rekening sumber, dana mencukupi, dan debit serta kredit tidak boleh terpisah. Penyimpanan transfer dan event outbox juga menjadi bagian dari unit transaksi yang sama.",
            en: "For an internal transfer, the system must preserve several invariants: source and destination accounts are valid, the user may access the source account, funds are sufficient, and debit and credit cannot be separated. Persisting the transfer and its outbox event also belongs to the same transactional unit.",
          },
        },
      ],
      steps: [
        {
          title: {
            id: "Validasi identitas dan akses",
            en: "Validate identity and access",
          },
          text: {
            id: "Pastikan sesi valid, role sesuai, dan pengguna memiliki rekening sumber.",
            en: "Ensure the session is valid, the role is appropriate, and the user owns the source account.",
          },
        },
        {
          title: {
            id: "Periksa idempotency key",
            en: "Check the idempotency key",
          },
          text: {
            id: "Kembalikan hasil sebelumnya ketika request identik sudah berhasil diproses.",
            en: "Return the previous result when an identical request has already been processed.",
          },
        },
        {
          title: {
            id: "Mutasi state dalam satu transaksi",
            en: "Mutate state in one transaction",
          },
          text: {
            id: "Validasi saldo, lakukan debit dan kredit, lalu simpan transfer serta event outbox sebagai satu unit atomik.",
            en: "Validate funds, apply the debit and credit, then persist the transfer and outbox event as one atomic unit.",
          },
        },
        {
          title: {
            id: "Commit sebelum publikasi asinkron",
            en: "Commit before asynchronous publication",
          },
          text: {
            id: "Publisher membaca outbox setelah commit sehingga event tidak mendahului data sumbernya.",
            en: "The publisher reads the outbox after commit so that an event never precedes its source data.",
          },
        },
      ],
      code: {
        label: {
          id: "Alur konseptual transfer",
          en: "Conceptual transfer flow",
        },
        language: "text",
        filename: "transfer-flow.txt",
        code: `BEGIN TRANSACTION
  validate session, ownership, accounts, and amount
  find result by idempotency key
  reserve and validate the current balance
  debit source account
  credit destination account
  save transfer and transaction history
  save outbox event
  save idempotent response
COMMIT

publish pending outbox events asynchronously`,
      },
    },
    {
      id: "retry-dan-duplikasi",
      heading: {
        id: "Membuat retry dan duplikasi menjadi aman",
        en: "Making retries and duplicates safe",
      },
      paragraphs: [
        {
          text: {
            id: "Client tidak selalu mengetahui apakah request yang timeout gagal sebelum atau sesudah server melakukan commit. Idempotency key memberi identitas stabil pada operasi sehingga retry tidak membuat transfer baru. Sistem dapat mengenali request yang pernah diproses dan mengembalikan hasil yang konsisten.",
            en: "A client cannot always know whether a timed-out request failed before or after the server committed. An idempotency key gives an operation a stable identity so that retrying does not create a new transfer. The system can recognize an already processed request and return a consistent result.",
          },
        },
        {
          text: {
            id: "Prinsip yang sama diterapkan pada sisi asynchronous consumer. RabbitMQ dapat mengirim ulang pesan ketika acknowledgement tidak diterima, sehingga consumer harus mampu mengenali event yang sudah selesai diproses. Publisher confirmations, acknowledgement, retry dengan exponential backoff, dan idempotent consumer bekerja sebagai lapisan yang saling melengkapi.",
            en: "The same principle applies to asynchronous consumers. RabbitMQ can redeliver a message when an acknowledgement is not received, so consumers must recognize events that have already been handled. Publisher confirmations, acknowledgements, exponential-backoff retries, and idempotent consumers form complementary layers.",
          },
          citations: [3],
        },
      ],
      table: {
        caption: {
          id: "Skenario kegagalan dan kontrol yang digunakan",
          en: "Failure scenarios and their controls",
        },
        headers: [
          {
            id: "Skenario",
            en: "Scenario",
          },
          {
            id: "Risiko",
            en: "Risk",
          },
          {
            id: "Kontrol",
            en: "Control",
          },
        ],
        rows: [
          [
            {
              id: "Request transfer diulang",
              en: "Transfer request is retried",
            },
            {
              id: "Debit ganda",
              en: "Duplicate debit",
            },
            {
              id: "Idempotency key dan hasil tersimpan",
              en: "Idempotency key and stored result",
            },
          ],
          [
            {
              id: "Dua request menyentuh saldo yang sama",
              en: "Two requests touch the same balance",
            },
            {
              id: "Race condition atau saldo tidak valid",
              en: "Race condition or invalid balance",
            },
            {
              id: "Transaksi database dan kontrol concurrency",
              en: "Database transaction and concurrency control",
            },
          ],
          [
            {
              id: "Pesan dikirim ulang",
              en: "Message is redelivered",
            },
            {
              id: "Efek samping ganda",
              en: "Duplicate side effect",
            },
            {
              id: "Idempotent consumer",
              en: "Idempotent consumer",
            },
          ],
          [
            {
              id: "RabbitMQ sementara tidak tersedia",
              en: "RabbitMQ is temporarily unavailable",
            },
            {
              id: "Event hilang",
              en: "Lost event",
            },
            {
              id: "Transactional Outbox, retry, dan publisher confirmation",
              en: "Transactional Outbox, retry, and publisher confirmation",
            },
          ],
        ],
      },
    },
    {
      id: "transactional-outbox",
      heading: {
        id: "Menghindari dual write dengan Transactional Outbox",
        en: "Avoiding dual writes with a Transactional Outbox",
      },
      paragraphs: [
        {
          text: {
            id: "Menyimpan transfer ke PostgreSQL lalu langsung mengirim event ke RabbitMQ menciptakan dua operasi independen. Jika salah satunya berhasil dan yang lain gagal, state database dan pesan dapat berbeda. LedgerBank mengatasinya dengan menyimpan event ke tabel outbox dalam transaksi database yang sama dengan perubahan bisnis.",
            en: "Saving a transfer to PostgreSQL and then immediately publishing an event to RabbitMQ creates two independent operations. If one succeeds while the other fails, database state and messaging state can diverge. LedgerBank addresses this by storing the event in an outbox table within the same database transaction as the business change.",
          },
        },
        {
          text: {
            id: "Proses terpisah mengambil event yang masih pending, memublikasikannya, menunggu publisher confirmation, lalu memperbarui status outbox. Ketika publikasi gagal, event tetap tersedia untuk dicoba kembali. Desain ini tidak menghilangkan kemungkinan pengiriman duplikat, sehingga consumer tetap dibuat idempotent.",
            en: "A separate process retrieves pending events, publishes them, waits for publisher confirmation, and then updates the outbox status. When publishing fails, the event remains available for another attempt. This design does not eliminate duplicate delivery, so consumers still need to be idempotent.",
          },
          citations: [3],
        },
      ],
      callout: {
        tone: "warning",
        title: {
          id: "At-least-once berarti duplikasi mungkin terjadi",
          en: "At-least-once means duplicates can happen",
        },
        text: {
          id: "Jangan mengandalkan message broker untuk memberi exactly-once effect. Simpan identitas event dan buat pengolahan ulang aman.",
          en: "Do not rely on the message broker to provide exactly-once effects. Persist event identities and make repeated processing safe.",
        },
      },
    },
    {
      id: "keamanan-dan-observability",
      heading: {
        id: "Keamanan dan observability sebagai fitur inti",
        en: "Security and observability as core features",
      },
      paragraphs: [
        {
          text: {
            id: "Autentikasi menggunakan opaque bearer token dengan sesi yang disimpan di Redis. Pendekatan ini memungkinkan server mengendalikan lifecycle sesi secara terpusat. Role-based access control membatasi aksi berdasarkan peran, sedangkan ownership enforcement memastikan pengguna hanya mengoperasikan resource yang memang dimilikinya.",
            en: "Authentication uses opaque bearer tokens backed by sessions stored in Redis. This approach lets the server centrally control the session lifecycle. Role-based access control restricts actions by role, while ownership enforcement ensures users only operate resources they actually own.",
          },
        },
        {
          text: {
            id: "Correlation ID membantu mengikuti satu request melintasi log dan proses asinkron. Health check memperlihatkan kesiapan dependency, sedangkan metric melalui Micrometer dan Prometheus membuat kondisi runtime dapat diamati tanpa menunggu laporan pengguna.",
            en: "Correlation IDs help trace one request across logs and asynchronous processing. Health checks expose dependency readiness, while metrics through Micrometer and Prometheus make runtime conditions observable without waiting for user reports.",
          },
          citations: [6],
        },
      ],
      bullets: [
        {
          title: {
            id: "Authentication",
            en: "Authentication",
          },
          text: {
            id: "Opaque bearer token dan sesi Redis untuk validasi serta pencabutan akses.",
            en: "Opaque bearer tokens and Redis sessions for validation and access revocation.",
          },
        },
        {
          title: {
            id: "Authorization",
            en: "Authorization",
          },
          text: {
            id: "Role-based access control ditambah pemeriksaan kepemilikan resource.",
            en: "Role-based access control combined with resource-ownership checks.",
          },
        },
        {
          title: {
            id: "Traceability",
            en: "Traceability",
          },
          text: {
            id: "Correlation ID menghubungkan request, log, dan pemrosesan event.",
            en: "Correlation IDs connect requests, logs, and event processing.",
          },
        },
        {
          title: {
            id: "Operational visibility",
            en: "Operational visibility",
          },
          text: {
            id: "Health check dan metric Prometheus membantu mendeteksi dependency atau alur yang bermasalah.",
            en: "Health checks and Prometheus metrics help identify failing dependencies or workflows.",
          },
        },
      ],
    },
    {
      id: "pengujian-reliability",
      heading: {
        id: "Menguji reliability, bukan hanya business flow",
        en: "Testing reliability, not only business flows",
      },
      paragraphs: [
        {
          text: {
            id: "LedgerBank memiliki 95 unit dan MVC tests serta 24 integration tests. Integration test menggunakan Testcontainers agar PostgreSQL, Redis, dan RabbitMQ yang diuji memiliki perilaku lebih dekat dengan dependency sebenarnya daripada pengganti in-memory.",
            en: "LedgerBank includes 95 unit and MVC tests plus 24 integration tests. The integration tests use Testcontainers so the tested PostgreSQL, Redis, and RabbitMQ behavior is closer to real dependencies than in-memory substitutes.",
          },
          citations: [4],
        },
        {
          text: {
            id: "Skenario pengujian mencakup concurrency, rollback, request duplikat, serta RabbitMQ outage dan recovery. Tujuannya bukan mengejar jumlah test, melainkan membuktikan invariant tetap terjaga ketika sistem berada pada kondisi yang tidak ideal.",
            en: "Test scenarios cover concurrency, rollbacks, duplicate requests, and RabbitMQ outage and recovery. The goal is not the test count itself, but evidence that invariants remain protected when the system is under non-ideal conditions.",
          },
        },
      ],
      bullets: [
        {
          title: {
            id: "Unit dan MVC tests",
            en: "Unit and MVC tests",
          },
          text: {
            id: "Memeriksa aturan bisnis, validasi input, otorisasi, dan kontrak HTTP secara cepat.",
            en: "Quickly verify business rules, input validation, authorization, and HTTP contracts.",
          },
        },
        {
          title: {
            id: "Integration tests",
            en: "Integration tests",
          },
          text: {
            id: "Memastikan transaksi, constraint, session store, dan messaging bekerja bersama pada dependency nyata dalam container.",
            en: "Ensure transactions, constraints, session storage, and messaging work together against real dependencies in containers.",
          },
        },
        {
          title: {
            id: "Failure-path tests",
            en: "Failure-path tests",
          },
          text: {
            id: "Mensimulasikan timeout, rollback, duplikasi, dan dependency outage untuk memeriksa recovery.",
            en: "Simulate timeouts, rollbacks, duplicates, and dependency outages to verify recovery.",
          },
        },
      ],
    },
    {
      id: "tooling-dan-quality-gate",
      heading: {
        id: "Tooling dan quality gate yang digunakan",
        en: "Tooling and quality gates",
      },
      paragraphs: [
        {
          text: {
            id: "API didokumentasikan dengan OpenAPI dan Swagger UI agar kontrak endpoint dapat dibaca manusia maupun alat. Flyway mengelola perubahan schema secara versioned. Pada pipeline, Checkstyle dan SpotBugs memeriksa kualitas statis, JaCoCo melaporkan coverage, dan GitHub Actions menjalankan rangkaian validasi secara konsisten.",
            en: "The API is documented with OpenAPI and Swagger UI so endpoint contracts can be consumed by humans and tools. Flyway manages versioned schema changes. In the pipeline, Checkstyle and SpotBugs perform static quality checks, JaCoCo reports coverage, and GitHub Actions runs the validation suite consistently.",
          },
          citations: [5],
        },
      ],
      table: {
        caption: {
          id: "Stack utama LedgerBank",
          en: "LedgerBank's primary stack",
        },
        headers: [
          {
            id: "Area",
            en: "Area",
          },
          {
            id: "Teknologi",
            en: "Technology",
          },
          {
            id: "Peran",
            en: "Role",
          },
        ],
        rows: [
          [
            {
              id: "Application",
              en: "Application",
            },
            {
              id: "Java 25, Spring Boot 4.1.1, Maven",
              en: "Java 25, Spring Boot 4.1.1, Maven",
            },
            {
              id: "REST API dan aturan bisnis",
              en: "REST API and business rules",
            },
          ],
          [
            {
              id: "Data",
              en: "Data",
            },
            {
              id: "PostgreSQL, Redis, Flyway",
              en: "PostgreSQL, Redis, Flyway",
            },
            {
              id: "Source of truth, sesi, dan migrasi",
              en: "Source of truth, sessions, and migrations",
            },
          ],
          [
            {
              id: "Messaging",
              en: "Messaging",
            },
            {
              id: "RabbitMQ",
              en: "RabbitMQ",
            },
            {
              id: "Pemrosesan event asinkron",
              en: "Asynchronous event processing",
            },
          ],
          [
            {
              id: "Testing",
              en: "Testing",
            },
            {
              id: "JUnit, MVC tests, Testcontainers",
              en: "JUnit, MVC tests, Testcontainers",
            },
            {
              id: "Verifikasi unit, HTTP, dan integrasi",
              en: "Unit, HTTP, and integration verification",
            },
          ],
          [
            {
              id: "Operations",
              en: "Operations",
            },
            {
              id: "Docker, Micrometer, Prometheus, GitHub Actions",
              en: "Docker, Micrometer, Prometheus, GitHub Actions",
            },
            {
              id: "Runtime, observability, dan CI",
              en: "Runtime, observability, and CI",
            },
          ],
        ],
      },
    },
    {
      id: "pelajaran-utama",
      heading: {
        id: "Pelajaran utama dari LedgerBank",
        en: "The main lesson from LedgerBank",
      },
      paragraphs: [
        {
          text: {
            id: "Proyek ini memperdalam pemahaman saya bahwa backend engineering bukan hanya membuat endpoint bekerja. Desain harus tetap masuk akal ketika request berjalan bersamaan, client melakukan retry, broker mengirim pesan duplikat, atau infrastruktur berhenti sementara.",
            en: "This project deepened my understanding that backend engineering is not only about making endpoints work. A design must continue to make sense when requests run concurrently, clients retry, brokers deliver duplicates, or infrastructure temporarily stops.",
          },
        },
        {
          text: {
            id: "Saya juga belajar bahwa reliability tidak datang dari satu pola. Transaksi database, idempotency, outbox, retry, acknowledgement, observability, dan pengujian kegagalan saling menutup celah yang berbeda. Nilai terpenting LedgerBank adalah kesempatan untuk melihat bagaimana keputusan-keputusan itu bekerja sebagai satu sistem.",
            en: "I also learned that reliability does not come from a single pattern. Database transactions, idempotency, outbox processing, retries, acknowledgements, observability, and failure testing each close a different gap. LedgerBank's greatest value is the opportunity to see how those decisions work as one system.",
          },
          citations: [1],
        },
      ],
      callout: {
        tone: "success",
        title: {
          id: "Kesimpulan",
          en: "Conclusion",
        },
        text: {
          id: "Mulailah dari invariant yang harus dilindungi, petakan setiap mode kegagalan, lalu buktikan kontrolnya dengan pengujian yang dapat diulang.",
          en: "Start with the invariants that must be protected, map each failure mode, and prove the controls through repeatable tests.",
        },
      },
    },
  ],
  faqs: [
    {
      question: {
        id: "Apakah LedgerBank merupakan sistem perbankan produksi?",
        en: "Is LedgerBank a production banking system?",
      },
      answer: {
        id: "Tidak. LedgerBank adalah simulator edukasional dan proyek portofolio untuk mempelajari konsistensi transaksi, keamanan, messaging, observability, dan pengujian reliability.",
        en: "No. LedgerBank is an educational simulator and portfolio project for studying transaction consistency, security, messaging, observability, and reliability testing.",
      },
    },
    {
      question: {
        id: "Mengapa PostgreSQL dijadikan source of truth?",
        en: "Why is PostgreSQL the source of truth?",
      },
      answer: {
        id: "Data rekening dan transaksi memerlukan constraint serta perubahan atomik. PostgreSQL menyediakan transaksi dan isolation control untuk menjadi fondasi konsistensi, sementara aturan bisnis tetap ditegakkan oleh aplikasi.",
        en: "Account and transaction data require constraints and atomic changes. PostgreSQL provides transactions and isolation controls as a consistency foundation, while the application still enforces business rules.",
      },
    },
    {
      question: {
        id: "Apa fungsi idempotency pada transfer?",
        en: "What does idempotency do for transfers?",
      },
      answer: {
        id: "Idempotency memastikan retry dengan identitas operasi yang sama tidak menghasilkan transfer atau debit tambahan. Sistem mengembalikan hasil operasi yang sudah diproses.",
        en: "Idempotency ensures a retry carrying the same operation identity does not create another transfer or debit. The system returns the already processed operation's result.",
      },
    },
    {
      question: {
        id: "Mengapa masih memerlukan idempotent consumer jika memakai Transactional Outbox?",
        en: "Why are idempotent consumers still needed with a Transactional Outbox?",
      },
      answer: {
        id: "Outbox mencegah event hilang di antara commit database dan publikasi, tetapi retry dapat membuat event terkirim lebih dari sekali. Consumer harus mengenali event yang sudah diproses agar efek samping tidak terulang.",
        en: "The outbox prevents an event from being lost between database commit and publication, but retries can cause duplicate delivery. Consumers must recognize processed events so side effects are not repeated.",
      },
    },
    {
      question: {
        id: "Apa yang diverifikasi oleh integration test LedgerBank?",
        en: "What do LedgerBank's integration tests verify?",
      },
      answer: {
        id: "Integration test memeriksa kerja sama aplikasi dengan dependency dalam container, termasuk transaksi, concurrency, rollback, request duplikat, serta outage dan recovery RabbitMQ.",
        en: "The integration tests verify how the application works with containerized dependencies, including transactions, concurrency, rollbacks, duplicate requests, and RabbitMQ outage and recovery.",
      },
    },
  ],
  references: [
    {
      kind: "documentation",
      authors: "Muhammad Rizal",
      title: "LedgerBank — Core Banking Simulator",
      publication: "Source code and project documentation",
      year: "2026",
      url: "https://lnkd.in/gQUrN5sq",
      note: {
        id: "Source code dan dokumentasi lengkap proyek yang dibahas dalam artikel.",
        en: "Source code and full documentation for the project discussed in this article.",
      },
    },
    {
      kind: "documentation",
      authors: "PostgreSQL Global Development Group",
      title: "Transaction Isolation",
      publication: "PostgreSQL Documentation",
      year: "2026",
      url: "https://www.postgresql.org/docs/current/transaction-iso.html",
      note: {
        id: "Dokumentasi resmi mengenai isolation level dan perilaku transaksi concurrent.",
        en: "Official documentation on isolation levels and concurrent transaction behavior.",
      },
    },
    {
      kind: "documentation",
      authors: "Broadcom",
      title: "Consumer Acknowledgements and Publisher Confirms",
      publication: "RabbitMQ Documentation",
      year: "2026",
      url: "https://www.rabbitmq.com/docs/confirms",
      note: {
        id: "Dokumentasi resmi acknowledgement, redelivery, dan publisher confirmation RabbitMQ.",
        en: "Official documentation for RabbitMQ acknowledgements, redelivery, and publisher confirmations.",
      },
    },
    {
      kind: "documentation",
      authors: "Testcontainers",
      title: "Testcontainers for Java",
      publication: "Testcontainers Documentation",
      year: "2026",
      url: "https://java.testcontainers.org/",
      note: {
        id: "Dokumentasi penggunaan dependency nyata berbasis container dalam integration test Java.",
        en: "Documentation for using containerized real dependencies in Java integration tests.",
      },
    },
    {
      kind: "standard",
      authors: "OpenAPI Initiative",
      title: "OpenAPI Specification",
      publication: "The Linux Foundation",
      year: "2025",
      url: "https://spec.openapis.org/oas/latest.html",
      note: {
        id: "Spesifikasi machine-readable untuk mendeskripsikan HTTP API.",
        en: "The machine-readable specification for describing HTTP APIs.",
      },
    },
    {
      kind: "documentation",
      authors: "Prometheus Authors",
      title: "Overview",
      publication: "Prometheus Documentation",
      year: "2026",
      url: "https://prometheus.io/docs/introduction/overview/",
      note: {
        id: "Dokumentasi resmi model metric dan komponen monitoring Prometheus.",
        en: "Official documentation for Prometheus metrics and monitoring components.",
      },
    },
  ],
} satisfies Article;
