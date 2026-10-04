import type { Article } from "./types";

export const cqrsArticle = {
  slug: "cqrs-command-query-responsibility-segregation",
  theme: "cqrs",
  category: {
    id: "Software Architecture",
    en: "Software Architecture",
  },
  title: {
    id: "CQRS: Kapan Memisahkan Jalur Write dan Read?",
    en: "CQRS: When Should You Separate Write and Read Paths?",
  },
  excerpt: {
    id: "Panduan praktis memahami Command Query Responsibility Segregation, dari pemisahan handler sederhana hingga read model terpisah—lengkap dengan trade-off, contoh alur, dan checklist keputusan.",
    en: "A practical guide to Command Query Responsibility Segregation, from simple handler separation to a dedicated read model—with trade-offs, flow examples, and a decision checklist.",
  },
  seoDescription: {
    id: "Pelajari CQRS, perbedaan command dan query, kaitannya dengan Event Sourcing, trade-off eventual consistency, serta checklist kapan pola ini layak dipakai.",
    en: "Learn CQRS, command and query separation, its relationship with Event Sourcing, eventual-consistency trade-offs, and when the pattern is worth using.",
  },
  directAnswer: {
    id: "CQRS adalah pola arsitektur yang memisahkan model untuk mengubah state (command) dari model untuk membaca data (query). Mulailah dari pemisahan tanggung jawab di dalam kode; tambahkan database, message broker, atau Event Sourcing hanya ketika kebutuhan skala dan domain benar-benar membenarkannya.",
    en: "CQRS is an architectural pattern that separates the model used to change state (commands) from the model used to read data (queries). Start by separating responsibilities in code; add databases, message brokers, or Event Sourcing only when scale and domain needs genuinely justify them.",
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
    id: "12 menit baca",
    en: "12 min read",
  },
  keywords: [
    "CQRS",
    "Command Query Responsibility Segregation",
    "arsitektur software",
    "Event Sourcing",
    "read model",
    "write model",
    "eventual consistency",
    "microservices",
  ],
  takeaways: [
    {
      id: "CQRS memisahkan tanggung jawab command dan query; bukan kewajiban memisahkan server atau database.",
      en: "CQRS separates command and query responsibilities; it does not require separate servers or databases.",
    },
    {
      id: "Event Sourcing, message broker, dan eventual consistency adalah pilihan implementasi, bukan definisi CQRS.",
      en: "Event Sourcing, message brokers, and eventual consistency are implementation choices, not the definition of CQRS.",
    },
    {
      id: "CQRS layak dipilih ketika kompleksitas read dan write berbeda nyata—bukan hanya agar arsitektur terlihat canggih.",
      en: "CQRS earns its place when read and write complexity differ materially—not merely to make an architecture look sophisticated.",
    },
  ],
  sections: [
    {
      id: "apa-itu-cqrs",
      heading: {
        id: "Apa itu CQRS?",
        en: "What is CQRS?",
      },
      paragraphs: [
        {
          text: {
            id: "CQRS adalah singkatan dari Command Query Responsibility Segregation. Command menyatakan niat untuk mengubah state—misalnya PlaceOrder atau ApproveInvoice—sedangkan query mengambil data tanpa mengubah state bisnis. Pemisahan ini membuat kedua sisi dapat memiliki model, validasi, dan optimasi yang berbeda.",
            en: "CQRS stands for Command Query Responsibility Segregation. A command expresses an intent to change state—such as PlaceOrder or ApproveInvoice—while a query retrieves data without changing business state. This separation lets each side use different models, validation rules, and optimizations.",
          },
          citations: [1],
        },
        {
          text: {
            id: "Bentuk paling ringan cukup memakai command handler dan query handler yang berbeda di aplikasi dan database yang sama. Bentuk yang lebih jauh dapat memakai read model terdenormalisasi, penyimpanan terpisah, serta sinkronisasi asinkron. Riset kasus CQRS menunjukkan bahwa pola ini memang memiliki banyak variasi implementasi, sehingga keputusan sebaiknya dibuat bertahap.",
            en: "The lightest form can use separate command and query handlers in the same application and database. A more advanced form may add a denormalized read model, separate storage, and asynchronous synchronization. CQRS case-study research documents this implementation variability, which is why adoption should be incremental.",
          },
          citations: [1, 2],
        },
      ],
      callout: {
        tone: "info",
        title: {
          id: "Definisi satu kalimat",
          en: "One-sentence definition",
        },
        text: {
          id: "Satu kebutuhan bisnis dapat memiliki bentuk data yang kaya aturan untuk menulis, tetapi bentuk data yang ringkas dan siap tampil untuk membaca.",
          en: "One business capability can use a rule-rich shape for writes and a compact, display-ready shape for reads.",
        },
      },
    },
    {
      id: "alur-kerja-cqrs",
      heading: {
        id: "Bagaimana alur CQRS bekerja?",
        en: "How does a CQRS flow work?",
      },
      paragraphs: [
        {
          text: {
            id: "Bayangkan fitur checkout. Jalur write perlu memeriksa stok, harga, batas pembelian, dan status pembayaran. Jalur read hanya perlu menyajikan ringkasan pesanan secepat mungkin. CQRS membiarkan kedua jalur tersebut berkembang sesuai tugasnya.",
            en: "Consider a checkout feature. The write path must verify inventory, pricing, purchase limits, and payment state. The read path only needs to return an order summary quickly. CQRS allows both paths to evolve around their own jobs.",
          },
        },
      ],
      steps: [
        {
          title: {
            id: "Frontend mengirim command",
            en: "The frontend sends a command",
          },
          text: {
            id: "Request membawa intent bisnis dan idempotency key, bukan instruksi database mentah.",
            en: "The request carries business intent and an idempotency key, not raw database instructions.",
          },
        },
        {
          title: {
            id: "Command handler memvalidasi aturan",
            en: "The command handler validates rules",
          },
          text: {
            id: "Handler memuat state yang diperlukan, menjalankan invariant domain, lalu menyimpan perubahan.",
            en: "The handler loads the required state, enforces domain invariants, and persists the change.",
          },
        },
        {
          title: {
            id: "Perubahan menghasilkan event",
            en: "The change produces an event",
          },
          text: {
            id: "Event seperti OrderPlaced dapat dicatat bersama transaksi melalui transactional outbox agar tidak hilang di antara database dan broker.",
            en: "An event such as OrderPlaced can be recorded in the same transaction through a transactional outbox so it is not lost between the database and broker.",
          },
        },
        {
          title: {
            id: "Projector memperbarui read model",
            en: "A projector updates the read model",
          },
          text: {
            id: "Consumer yang idempoten mengubah event menjadi data yang siap dibaca oleh layar atau laporan tertentu.",
            en: "An idempotent consumer turns the event into data shaped for a particular screen or report.",
          },
        },
        {
          title: {
            id: "Query membaca model yang siap tampil",
            en: "The query reads a display-ready model",
          },
          text: {
            id: "Query handler tidak perlu mengulang seluruh logika domain atau join kompleks di jalur write.",
            en: "The query handler does not need to repeat domain logic or complex joins from the write path.",
          },
        },
      ],
      callout: {
        tone: "warning",
        title: {
          id: "Tidak semua langkah wajib",
          en: "Not every step is mandatory",
        },
        text: {
          id: "Untuk CQRS sederhana, command dan query dapat memakai satu proses serta satu database. Event, outbox, dan read store terpisah baru diperlukan saat ada alasan terukur.",
          en: "In simple CQRS, commands and queries may share one process and one database. Events, an outbox, and a separate read store are only needed when measurable reasons exist.",
        },
      },
    },
    {
      id: "cqrs-bukan-event-sourcing",
      heading: {
        id: "CQRS bukan sinonim Event Sourcing",
        en: "CQRS is not a synonym for Event Sourcing",
      },
      paragraphs: [
        {
          text: {
            id: "CQRS mengatur pemisahan tanggung jawab baca dan tulis. Event Sourcing mengatur cara state disimpan sebagai rangkaian event. Keduanya sering dipakai bersama, tetapi dapat berdiri sendiri. Menggabungkannya tanpa kebutuhan audit, replay, atau model temporal justru menambah pekerjaan evolusi event dan rebuild projection.",
            en: "CQRS governs the separation of read and write responsibilities. Event Sourcing governs how state is stored as a sequence of events. They are often combined, but each can stand alone. Combining them without audit, replay, or temporal-model needs adds event-evolution and projection-rebuild work.",
          },
          citations: [2, 3],
        },
      ],
      table: {
        caption: {
          id: "Empat tingkat adopsi CQRS, dari yang paling ringan",
          en: "Four CQRS adoption levels, from lightest to most involved",
        },
        headers: [
          { id: "Tingkat", en: "Level" },
          { id: "Pemisahan", en: "Separation" },
          { id: "Konsekuensi", en: "Consequence" },
        ],
        rows: [
          [
            { id: "1 · Handler", en: "1 · Handlers" },
            {
              id: "Command dan query memakai tipe serta handler berbeda.",
              en: "Commands and queries use different types and handlers.",
            },
            {
              id: "Kompleksitas rendah; satu aplikasi dan database tetap cukup.",
              en: "Low complexity; one application and database remain enough.",
            },
          ],
          [
            { id: "2 · Model", en: "2 · Models" },
            {
              id: "Write model dan read model berbeda, masih dalam satu database.",
              en: "Write and read models differ while sharing one database.",
            },
            {
              id: "Query lebih sederhana tanpa biaya sinkronisasi lintas store.",
              en: "Simpler queries without cross-store synchronization costs.",
            },
          ],
          [
            { id: "3 · Store", en: "3 · Stores" },
            {
              id: "Read store terpisah dan diperbarui secara asinkron.",
              en: "A separate read store is updated asynchronously.",
            },
            {
              id: "Skala independen, tetapi muncul lag dan operasi tambahan.",
              en: "Independent scaling, with added lag and operational work.",
            },
          ],
          [
            { id: "4 · Event Sourcing", en: "4 · Event Sourcing" },
            {
              id: "Event menjadi sumber kebenaran untuk membangun state.",
              en: "Events become the source of truth used to rebuild state.",
            },
            {
              id: "Audit dan replay kuat; evolusi schema jauh lebih menuntut.",
              en: "Strong audit and replay; substantially harder schema evolution.",
            },
          ],
        ],
      },
    },
    {
      id: "contoh-implementasi",
      heading: {
        id: "Contoh implementasi CQRS yang tetap sederhana",
        en: "A deliberately simple CQRS implementation",
      },
      paragraphs: [
        {
          text: {
            id: "Contoh berikut memisahkan kontrak command dan query tanpa memaksa dua service. Handler write menjaga aturan bisnis; query membaca projection yang memang dirancang untuk kebutuhan UI.",
            en: "The example below separates command and query contracts without forcing two services. The write handler protects business rules; the query reads a projection designed for the UI.",
          },
        },
      ],
      code: {
        label: {
          id: "Contoh TypeScript: command dan query terpisah",
          en: "TypeScript example: separate command and query",
        },
        language: "ts",
        filename: "orders.application.ts",
        code: `type PlaceOrder = {
commandId: string;
customerId: string;
items: Array<{ productId: string; quantity: number }>;
};

export async function placeOrder(command: PlaceOrder) {
if (await handledCommands.exists(command.commandId)) return;

const order = Order.place(command.customerId, command.items);

await transaction.commit({
  aggregate: order,
  outbox: [{ type: "OrderPlaced", payload: order.toEvent() }],
  commandId: command.commandId,
});
}

export async function getOrderSummary(orderId: string) {
return orderSummaryProjection.findById(orderId);
}`,
      },
      callout: {
        tone: "success",
        title: {
          id: "Pertahankan bahasa domain",
          en: "Preserve domain language",
        },
        text: {
          id: "Nama command sebaiknya menyatakan intent—PlaceOrder—bukan CRUD generik seperti UpdateOrderStatus. Intent membuat validasi, audit, dan izin akses lebih jelas.",
          en: "A command name should express intent—PlaceOrder—rather than generic CRUD such as UpdateOrderStatus. Intent makes validation, auditing, and authorization clearer.",
        },
      },
    },
    {
      id: "konsistensi-dan-kegagalan",
      heading: {
        id: "Kelola konsistensi, duplikasi, dan kegagalan",
        en: "Manage consistency, duplicates, and failure",
      },
      paragraphs: [
        {
          text: {
            id: "Saat read model diperbarui secara asinkron, response command yang sukses belum tentu langsung terlihat pada query berikutnya. Ini bukan bug selama kontraknya eksplisit. Frontend perlu mengetahui apakah harus menampilkan status pending, melakukan polling, atau menunggu notifikasi.",
            en: "When the read model is updated asynchronously, a successful command may not be visible to the next query immediately. This is not a bug when the contract is explicit. The frontend needs to know whether to show a pending state, poll, or await a notification.",
          },
        },
        {
          text: {
            id: "Jika Event Sourcing ikut dipakai, evolusi event, rebuild projection, learning curve, dan privasi data menjadi concern tersendiri. Studi empiris terhadap 19 sistem event-sourced dan 25 engineer mengidentifikasi area-area tersebut sebagai tantangan nyata.",
            en: "If Event Sourcing is added, event evolution, projection rebuilding, the learning curve, and data privacy become distinct concerns. An empirical study of 19 event-sourced systems and 25 engineers identified these as practical challenges.",
          },
          citations: [3],
        },
      ],
      bullets: [
        {
          title: {
            id: "Idempotency",
            en: "Idempotency",
          },
          text: {
            id: "Gunakan commandId atau idempotency key agar retry tidak menggandakan transaksi.",
            en: "Use a commandId or idempotency key so retries do not duplicate a transaction.",
          },
        },
        {
          title: {
            id: "Transactional outbox",
            en: "Transactional outbox",
          },
          text: {
            id: "Simpan perubahan domain dan event keluar dalam satu transaksi, lalu terbitkan dengan worker.",
            en: "Store domain changes and outbound events in one transaction, then publish them with a worker.",
          },
        },
        {
          title: {
            id: "Projection checkpoint",
            en: "Projection checkpoint",
          },
          text: {
            id: "Catat posisi event terakhir agar projector dapat melanjutkan dan di-replay dengan aman.",
            en: "Track the last processed event position so a projector can resume and replay safely.",
          },
        },
        {
          title: {
            id: "Observability",
            en: "Observability",
          },
          text: {
            id: "Hubungkan commandId, eventId, dan traceId; ukur projection lag serta dead-letter queue.",
            en: "Correlate commandId, eventId, and traceId; measure projection lag and the dead-letter queue.",
          },
        },
      ],
    },
    {
      id: "kapan-menggunakan-cqrs",
      heading: {
        id: "Kapan CQRS layak digunakan?",
        en: "When is CQRS worth using?",
      },
      paragraphs: [
        {
          text: {
            id: "CQRS bukan peningkat performa otomatis. Studi menunjukkan bahwa read dan write memang dapat diskalakan secara independen, tetapi hasil selalu terkait arsitektur dan workload yang diuji. Eksperimen jurnal Indonesia pada satu microservice CQRS–Event Sourcing, misalnya, melaporkan peningkatan sekitar 3,7%; angka itu adalah hasil konteks eksperimen, bukan janji universal.",
            en: "CQRS is not an automatic performance upgrade. Research shows that reads and writes can be scaled independently, but outcomes remain tied to the tested architecture and workload. An Indonesian journal experiment on one CQRS–Event Sourcing microservice, for example, reported an improvement of about 3.7%; that is a contextual result, not a universal promise.",
          },
          citations: [4, 5],
        },
      ],
      table: {
        caption: {
          id: "Sinyal keputusan CQRS",
          en: "CQRS decision signals",
        },
        headers: [
          { id: "Gunakan bila…", en: "Consider it when…" },
          { id: "Tahan dulu bila…", en: "Hold off when…" },
        ],
        rows: [
          [
            {
              id: "Aturan write kompleks, sedangkan kebutuhan read sangat berbeda.",
              en: "Write rules are complex while read needs are substantially different.",
            },
            {
              id: "Aplikasi hanya CRUD sederhana dengan satu model yang sudah jelas.",
              en: "The application is straightforward CRUD with one clear model.",
            },
          ],
          [
            {
              id: "Volume read dan write timpang dan perlu diskalakan mandiri.",
              en: "Read and write volumes are imbalanced and need independent scaling.",
            },
            {
              id: "Tim belum memiliki observability dan disiplin operasi asinkron.",
              en: "The team lacks observability and asynchronous-operations discipline.",
            },
          ],
          [
            {
              id: "Beberapa layar memerlukan projection terdenormalisasi khusus.",
              en: "Several screens need purpose-built denormalized projections.",
            },
            {
              id: "Konsistensi langsung wajib pada setiap interaksi pengguna.",
              en: "Immediate consistency is mandatory for every user interaction.",
            },
          ],
          [
            {
              id: "Audit, intent bisnis, atau histori perubahan bernilai tinggi.",
              en: "Auditability, business intent, or change history has high value.",
            },
            {
              id: "Masalah saat ini belum diukur atau masih dapat diselesaikan dengan index/cache.",
              en: "The current problem is unmeasured or still solvable with an index or cache.",
            },
          ],
        ],
      },
      callout: {
        tone: "warning",
        title: {
          id: "Uji solusi termurah lebih dulu",
          en: "Test the cheapest solution first",
        },
        text: {
          id: "Sebelum memisahkan store, ukur query plan, perbaiki index, batasi payload, dan pertimbangkan cache atau read replica. CQRS menyelesaikan ketidaksesuaian model; ia bukan pengganti optimasi database dasar.",
          en: "Before splitting stores, inspect query plans, improve indexes, limit payloads, and consider caching or a read replica. CQRS solves model mismatch; it does not replace basic database optimization.",
        },
      },
    },
    {
      id: "checklist-implementasi",
      heading: {
        id: "Checklist sebelum implementasi",
        en: "Pre-implementation checklist",
      },
      bullets: [
        {
          title: {
            id: "Masalah terukur",
            en: "Measured problem",
          },
          text: {
            id: "Tuliskan bottleneck, kebutuhan domain, dan target keberhasilan yang tidak dapat diselesaikan arsitektur saat ini.",
            en: "Write down the bottleneck, domain need, and success target the current architecture cannot meet.",
          },
        },
        {
          title: {
            id: "Batas konsistensi",
            en: "Consistency boundary",
          },
          text: {
            id: "Tentukan data mana yang harus langsung konsisten dan berapa projection lag yang masih diterima.",
            en: "Define which data must be immediately consistent and what projection lag remains acceptable.",
          },
        },
        {
          title: {
            id: "Kontrak command",
            en: "Command contract",
          },
          text: {
            id: "Dokumentasikan status sinkron atau asinkron, idempotency, error, retry, dan cara mengecek hasil.",
            en: "Document synchronous or asynchronous status, idempotency, errors, retries, and how to check the result.",
          },
        },
        {
          title: {
            id: "Recovery projection",
            en: "Projection recovery",
          },
          text: {
            id: "Siapkan mekanisme replay, checkpoint, rekonsiliasi, dan prosedur ketika read model tertinggal.",
            en: "Prepare replay, checkpointing, reconciliation, and a procedure for a lagging read model.",
          },
        },
        {
          title: {
            id: "Adopsi bertahap",
            en: "Incremental adoption",
          },
          text: {
            id: "Mulai dari satu bounded context atau query yang paling bermasalah, lalu evaluasi biaya operasionalnya.",
            en: "Start with one bounded context or the most problematic query, then evaluate its operational cost.",
          },
        },
      ],
    },
  ],
  faqs: [
    {
      question: {
        id: "Apakah CQRS harus memakai dua database?",
        en: "Does CQRS require two databases?",
      },
      answer: {
        id: "Tidak. Command dan query dapat memakai model berbeda di atas database yang sama. Database terpisah hanya salah satu variasi ketika kebutuhan skala, bentuk data, atau isolasi operasional membenarkan biayanya.",
        en: "No. Commands and queries can use different models over the same database. Separate databases are only one variation when scaling, data-shape, or operational-isolation needs justify their cost.",
      },
    },
    {
      question: {
        id: "Apakah CQRS sama dengan Event Sourcing?",
        en: "Is CQRS the same as Event Sourcing?",
      },
      answer: {
        id: "Tidak. CQRS memisahkan jalur command dan query; Event Sourcing menyimpan state sebagai rangkaian event. Keduanya dapat digabungkan, tetapi tidak saling mewajibkan.",
        en: "No. CQRS separates command and query paths; Event Sourcing stores state as a sequence of events. They can be combined, but neither requires the other.",
      },
    },
    {
      question: {
        id: "Apa arti eventual consistency pada CQRS?",
        en: "What does eventual consistency mean in CQRS?",
      },
      answer: {
        id: "Jika read model diperbarui secara asinkron, ada jeda setelah command berhasil sebelum query menampilkan state terbaru. Durasi dan perilaku UI selama jeda itu harus menjadi bagian dari kontrak sistem.",
        en: "When a read model updates asynchronously, there is a delay after a successful command before queries show the latest state. The delay and UI behavior during it must be part of the system contract.",
      },
    },
    {
      question: {
        id: "Apakah CQRS cocok untuk aplikasi CRUD sederhana?",
        en: "Is CQRS suitable for a simple CRUD application?",
      },
      answer: {
        id: "Biasanya tidak. Jika satu model sudah cukup untuk membaca dan menulis, CQRS dapat menambah abstraksi, sinkronisasi, serta beban operasi tanpa manfaat yang sebanding.",
        en: "Usually not. If one model already serves reads and writes well, CQRS can add abstractions, synchronization, and operational work without proportional benefit.",
      },
    },
  ],
  references: [
    {
      kind: "proceeding",
      authors: "Jaap Kabbedijk, Slinger Jansen, dan Sjaak Brinkkemper",
      title:
        "A Case Study of the Variability Consequences of the CQRS Pattern in Online Business Software",
      publication:
        "17th European Conference on Pattern Languages of Programs (EuroPLoP)",
      year: "2012",
      url: "https://doi.org/10.1145/2602928.2603078",
      note: {
        id: "Studi kasus tentang variasi implementasi dan pemisahan subsystem command–query.",
        en: "A case study on implementation variability and command–query subsystem separation.",
      },
    },
    {
      kind: "journal",
      authors: "Oleksandr Lytvynov dan Dmytro Hruzin",
      title:
        "Decision-making on Command Query Responsibility Segregation with Event Sourcing Architectural Variations",
      publication: "Technology Audit and Production Reserves, 4(2), 37–59",
      year: "2025",
      url: "https://doi.org/10.15587/2706-5448.2025.337168",
      note: {
        id: "Membandingkan variasi CQRS–Event Sourcing berdasarkan kompleksitas, performa, waktu, dan keahlian.",
        en: "Compares CQRS–Event Sourcing variations across complexity, performance, time, and expertise.",
      },
    },
    {
      kind: "journal",
      authors:
        "Michiel Overeem, Marten Spoor, Slinger Jansen, dan Sjaak Brinkkemper",
      title:
        "An Empirical Characterization of Event Sourced Systems and Their Schema Evolution",
      publication: "Journal of Systems and Software, 178, 110970",
      year: "2021",
      url: "https://doi.org/10.1016/j.jss.2021.110970",
      note: {
        id: "Studi empiris tantangan evolusi event pada 19 sistem dan 25 engineer.",
        en: "An empirical study of event-evolution challenges across 19 systems and 25 engineers.",
      },
    },
    {
      kind: "journal",
      authors:
        "Andrzej Dębski, Bartłomiej Szczepanik, Maciej Malawski, Stefan Spahr, dan Dirk Muthig",
      title: "A Scalable, Reactive Architecture for Cloud Applications",
      publication: "IEEE Software, 35(2), 62–71",
      year: "2018",
      url: "https://doi.org/10.1109/MS.2017.265095722",
      note: {
        id: "Evaluasi arsitektur yang menskalakan model baca dan tulis secara independen.",
        en: "An architecture evaluation that scales read and write models independently.",
      },
    },
    {
      kind: "journal",
      authors:
        "Difa Al Fansha, Muhammad Yusril Helmi Setyawan, dan Mohamad Nurkamal Fauzan",
      title:
        "Load Test pada Microservice yang Menerapkan CQRS dan Event Sourcing",
      publication: "Jurnal Buana Informatika, 12(2)",
      year: "2021",
      url: "https://doi.org/10.24002/jbi.v12i2.4749",
      note: {
        id: "Eksperimen performa pada satu implementasi microservice CQRS–Event Sourcing.",
        en: "A performance experiment on one CQRS–Event Sourcing microservice implementation.",
      },
    },
    {
      kind: "documentation",
      authors: "Microsoft Azure Architecture Center",
      title: "CQRS Pattern",
      publication: "Cloud Design Patterns",
      year: "2025",
      url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs",
      note: {
        id: "Referensi resmi untuk variasi single-store, trade-off, dan skenario penggunaan.",
        en: "Official guidance on single-store variations, trade-offs, and usage scenarios.",
      },
    },
  ],
} satisfies Article;

