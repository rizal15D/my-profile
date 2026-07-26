export type Locale = "id" | "en";

export type LocalizedText = Record<Locale, string>;

export const profile = {
  names: {
    id: "Rizal",
    en: "Mehmed",
  },
  fullName: "Muhammad Rizal",
  linkedIn: "https://www.linkedin.com/in/muhammadrizalgg/",
  cv: "/documents/Muhammad Rizal_cv.pdf",
  portrait: "/images/foto.png",
};

export const copy = {
  id: {
    localeName: "ID",
    nav: {
      work: "Karya",
      services: "Layanan",
      experience: "Pengalaman",
      skills: "Keahlian",
      about: "Tentang",
    },
    menu: "Buka menu",
    close: "Tutup menu",
    theme: "Ganti tema",
    language: "Pilih bahasa",
    availability: "Terbuka untuk peluang kerja dan freelance",
    role: "Fullstack Software Developer",
    headline: "Rizal",
    heroLead:
      "Saya merancang dan membangun produk digital dari antarmuka hingga infrastruktur.",
    heroBody:
      "Berpengalaman mengembangkan aplikasi web dan mobile, backend multi-service, deployment, serta observability untuk produk yang digunakan di lingkungan nyata.",
    contact: "Hubungi saya",
    downloadCv: "Download CV",
    portraitAlt: "Ilustrasi sementara untuk foto profil Rizal",
    proof: [
      { value: "1.500+", label: "pengguna aplikasi" },
      { value: "8", label: "divisi terdigitalisasi" },
      { value: "2021", label: "mulai membangun produk" },
    ],
    workEyebrow: "Karya terpilih",
    workTitle: "Bukti kerja, bukan sekadar daftar teknologi.",
    workBody:
      "Dua proyek yang menunjukkan kemampuan saya berkontribusi pada produk lintas web, mobile, dan proses agile.",
    roleLabel: "Peran",
    outcomeLabel: "Dampak",
    servicesEyebrow: "Layanan freelance",
    servicesTitle: "Dari ide hingga sistem yang siap digunakan.",
    servicesBody:
      "Saya dapat bergabung di satu bagian produk atau menangani alur pengembangan secara menyeluruh.",
    experienceEyebrow: "Pengalaman",
    experienceTitle: "Membangun dan menjaga produk di berbagai konteks.",
    experienceBody:
      "Pengalaman profesional dan proyek utama yang paling relevan untuk peran fullstack.",
    experienceSummary: "Ringkasan",
    experienceDetails: "Detail",
    experienceSummaryHint:
      "Tampilan singkat untuk memindai peran, periode, dan kontribusi utama.",
    experienceDetailsHint:
      "Rincian tanggung jawab dan hasil berdasarkan CV terbaru.",
    present: "Sekarang",
    skillsEyebrow: "Technology stack",
    skillsTitle: "Perangkat yang saya gunakan untuk menyelesaikan masalah.",
    skillsBody:
      "Saya memilih teknologi berdasarkan kebutuhan produk, kemampuan tim, dan kemudahan operasional.",
    aboutEyebrow: "Tentang saya",
    aboutTitle: "Engineer yang memahami produk dan proses.",
    aboutBody:
      "Saya memiliki pengalaman sebagai developer, Assistant Project Manager, dan Assistant Product Owner. Perspektif ini membantu saya menghubungkan kebutuhan pengguna, keputusan teknis, dan eksekusi tim.",
    educationLabel: "Pendidikan",
    education:
      "D4 Teknik Informatika, Politeknik Elektronika Negeri Surabaya (PENS)",
    collaborationLabel: "Cara bekerja",
    collaboration:
      "Terbiasa dengan pengembangan agile, pengujian API, debugging, dokumentasi, CI/CD, dan monitoring produksi.",
    contactEyebrow: "Mulai percakapan",
    contactTitle: "Punya produk untuk dibangun atau posisi yang cocok?",
    contactBody:
      "Mari diskusikan kebutuhan produk, tantangan teknis, atau peluang fullstack di tim Anda.",
    contactLinkedIn: "Hubungi via LinkedIn",
    contactNote:
      "LinkedIn adalah kanal kontak publik utama untuk versi portfolio ini.",
    footer: "Dirancang dan dibangun oleh Muhammad Rizal.",
    backToTop: "Kembali ke atas",
  },
  en: {
    localeName: "EN",
    nav: {
      work: "Work",
      services: "Services",
      experience: "Experience",
      skills: "Skills",
      about: "About",
    },
    menu: "Open menu",
    close: "Close menu",
    theme: "Change theme",
    language: "Choose language",
    availability: "Open to full-time roles and freelance work",
    role: "Fullstack Software Developer",
    headline: "Mehmed",
    heroLead:
      "I design and build digital products from interface to infrastructure.",
    heroBody:
      "Experienced in web and mobile applications, multi-service backends, deployment, and observability for products used in real-world environments.",
    contact: "Contact me",
    downloadCv: "Download CV",
    portraitAlt: "Temporary illustration for Mehmed's profile photo",
    proof: [
      { value: "1,500+", label: "application users" },
      { value: "8", label: "divisions digitized" },
      { value: "2021", label: "started building products" },
    ],
    workEyebrow: "Selected work",
    workTitle: "Evidence of delivery, not just a technology list.",
    workBody:
      "Two projects that show how I contribute across web, mobile, and agile product development.",
    roleLabel: "Role",
    outcomeLabel: "Outcome",
    servicesEyebrow: "Freelance services",
    servicesTitle: "From an early idea to a system ready for use.",
    servicesBody:
      "I can contribute to a focused part of a product or own the full development flow.",
    experienceEyebrow: "Experience",
    experienceTitle: "Building and maintaining products across contexts.",
    experienceBody:
      "The professional experience and core projects most relevant to fullstack roles.",
    experienceSummary: "Summary",
    experienceDetails: "Details",
    experienceSummaryHint:
      "A concise view for scanning roles, dates, and primary contributions.",
    experienceDetailsHint:
      "Responsibilities and outcomes based on the latest CV.",
    present: "Present",
    skillsEyebrow: "Technology stack",
    skillsTitle: "Tools I use to solve product problems.",
    skillsBody:
      "I select technology around product requirements, team capability, and operational maintainability.",
    aboutEyebrow: "About me",
    aboutTitle: "An engineer who understands product and process.",
    aboutBody:
      "I have worked as a developer, Assistant Project Manager, and Assistant Product Owner. That perspective helps me connect user needs, technical decisions, and team execution.",
    educationLabel: "Education",
    education:
      "Applied Bachelor in Informatics Engineering, Politeknik Elektronika Negeri Surabaya (PENS)",
    collaborationLabel: "How I work",
    collaboration:
      "Comfortable with agile development, API testing, debugging, documentation, CI/CD, and production monitoring.",
    contactEyebrow: "Start a conversation",
    contactTitle: "Have a product to build or a role that fits?",
    contactBody:
      "Let’s discuss your product requirements, technical challenges, or a fullstack opportunity on your team.",
    contactLinkedIn: "Contact via LinkedIn",
    contactNote:
      "LinkedIn is the primary public contact channel for this portfolio version.",
    footer: "Designed and built by Muhammad Rizal.",
    backToTop: "Back to top",
  },
} as const;

export const projects = [
  {
    title: {
      id: "E-Vote HIMIT PENS",
      en: "E-Vote HIMIT PENS",
    },
    description: {
      id: "Platform pemilihan ketua Himpunan Mahasiswa Teknik Informatika yang dirancang untuk proses voting yang aman dan mudah digunakan.",
      en: "An election platform for the Informatics Engineering Student Association designed for a secure and accessible voting process.",
    },
    role: {
      id: "Frontend Developer",
      en: "Frontend Developer",
    },
    outcome: {
      id: "Digunakan oleh lebih dari 500 peserta dalam proses pemilihan.",
      en: "Used by more than 500 participants during the election process.",
    },
    image: "/images/Screenshot (305).png",
    technologies: ["Laravel", "JavaScript", "MySQL"],
  },
  {
    title: {
      id: "Simple Wallet",
      en: "Simple Wallet",
    },
    description: {
      id: "Aplikasi pencatatan keuangan kolaboratif dengan transaksi, pemindaian struk, input suara, dan dompet bersama.",
      en: "A collaborative finance application with transactions, receipt scanning, voice input, and shared wallets.",
    },
    role: {
      id: "Assistant Product Owner, SQA & Mobile Developer",
      en: "Assistant Product Owner, SQA & Mobile Developer",
    },
    outcome: {
      id: "Mendukung koordinasi tim agile, pengujian kualitas, dan integrasi aplikasi mobile dengan backend.",
      en: "Supported agile team coordination, quality assurance, and mobile-to-backend integration.",
    },
    image: "/images/Screenshot (307).png",
    technologies: ["Flutter", "Laravel", "SQA", "Agile"],
  },
] as const;

export const services = [
  {
    number: "01",
    title: {
      id: "Pengembangan produk fullstack",
      en: "Fullstack product development",
    },
    description: {
      id: "Membangun aplikasi web responsif, dashboard operasional, dan alur produk dari frontend hingga database.",
      en: "Building responsive web applications, operational dashboards, and product flows from frontend to database.",
    },
  },
  {
    number: "02",
    title: {
      id: "Backend dan integrasi API",
      en: "Backend and API integration",
    },
    description: {
      id: "Merancang REST API, autentikasi, integrasi layanan, caching, serta struktur data yang dapat dipelihara.",
      en: "Designing REST APIs, authentication, service integrations, caching, and maintainable data structures.",
    },
  },
  {
    number: "03",
    title: {
      id: "Deployment dan optimasi",
      en: "Deployment and optimization",
    },
    description: {
      id: "Menyiapkan CI/CD, deployment VPS, debugging, monitoring, dan peningkatan performa aplikasi.",
      en: "Setting up CI/CD, VPS deployments, debugging, monitoring, and application performance improvements.",
    },
  },
] as const;

export const experiences = [
  {
    role: "Fullstack Developer",
    company: "PT Ganapatih Akasa Solution",
    date: {
      id: "Jan 2026 - Sekarang",
      en: "Jan 2026 - Present",
    },
    location: "Jakarta, Indonesia",
    description: {
      id: "Mengembangkan REST API, integrasi chat media sosial, dan landing page responsif dengan Golang, Python, JavaScript, Next.js, React, serta TypeScript.",
      en: "Developing REST APIs, social media chat integrations, and responsive landing pages with Golang, Python, JavaScript, Next.js, React, and TypeScript.",
    },
    details: {
      id: [
        "Mengembangkan dan memelihara RESTful API menggunakan Golang, Python, dan JavaScript.",
        "Membangun integrasi chat media sosial dan fitur percakapan terpusat.",
        "Mengembangkan landing page responsif menggunakan Next.js, React, TypeScript, dan Tailwind CSS.",
        "Menerapkan peta interaktif, navigasi responsif, optimasi gambar, dan peningkatan performa.",
        "Mengintegrasikan object storage untuk file aplikasi dan aset digital.",
        "Mengirim fitur baru, meningkatkan fungsionalitas, dan menyelesaikan masalah aplikasi.",
        "Berkolaborasi dengan developer dan stakeholder melalui branching, code review, dan workflow Git.",
      ],
      en: [
        "Develop and maintain RESTful APIs using Golang, Python, and JavaScript.",
        "Build social media chat integrations and centralized conversation features.",
        "Develop responsive landing pages using Next.js, React, TypeScript, and Tailwind CSS.",
        "Implement interactive maps, responsive navigation, image optimization, and performance improvements.",
        "Integrate object storage for application files and digital assets.",
        "Deliver new features, improve existing functionality, and resolve application issues.",
        "Collaborate with developers and stakeholders through branching, code review, and Git workflows.",
      ],
    },
  },
  {
    role: "Fullstack Developer",
    company: "Wijoyo Dev",
    date: {
      id: "Apr 2025 - Sep 2025",
      en: "Apr 2025 - Sep 2025",
    },
    location: "Surabaya, Indonesia",
    description: {
      id: "Mengoptimalkan aplikasi React.js dan React Native untuk 1.500+ pengguna, melakukan refactor backend Express.js, serta menangani deployment dan monitoring produksi.",
      en: "Optimized React.js and React Native applications for 1,500+ users, refactored an Express.js backend, and handled production deployment and monitoring.",
    },
    details: {
      id: [
        "Debugging dan optimasi aplikasi web React.js serta mobile React Native untuk 1.500+ pengguna aktif.",
        "Melakukan refactor backend Express.js untuk mengurangi latency dan meningkatkan stabilitas API.",
        "Menerapkan caching Node.js untuk mempercepat respons API dan mengurangi beban server.",
        "Melakukan pengujian API dengan Postman serta mengelola dan mengoptimalkan database MySQL.",
        "Mengembangkan script deployment otomatis untuk staging dan production serta melakukan deployment ke VPS.",
        "Memperbarui dependency React Native untuk menjaga kompatibilitas sistem operasi.",
        "Memantau uptime dan performa melalui Grafana dan Prometheus.",
      ],
      en: [
        "Debugged and optimized React.js web and React Native mobile applications for 1,500+ active users.",
        "Refactored the Express.js backend to reduce latency and improve API stability.",
        "Implemented Node.js caching to improve API response times and reduce server load.",
        "Performed API testing with Postman and managed and optimized MySQL databases.",
        "Developed automated deployment scripts for staging and production and deployed systems to VPS.",
        "Upgraded React Native dependencies to maintain operating system compatibility.",
        "Monitored uptime and performance through Grafana and Prometheus.",
      ],
    },
  },
  {
    role: "Fullstack Developer",
    company: "Final Project of Polytechnic - PENS",
    date: {
      id: "Jan 2024 - Agu 2025",
      en: "Jan 2024 - Aug 2025",
    },
    location: "Surabaya, Indonesia",
    description: {
      id: "Membangun platform pertanian berbasis AI dengan peta interaktif, dashboard, chatbot LLM, deteksi YOLOv8, dan layanan FastAPI yang dideploy ke VPS Ubuntu.",
      en: "Built an AI-powered agriculture platform with interactive maps, dashboards, an LLM chatbot, YOLOv8 detection, and FastAPI services deployed to an Ubuntu VPS.",
    },
    details: {
      id: [
        "Merancang platform pertanian dengan peta interaktif, dashboard data, dan chatbot berbasis AI.",
        "Menerapkan arsitektur multi-service dengan frontend Next.js, Laravel API gateway, dan microservice FastAPI.",
        "Mengembangkan deteksi hama dan penyakit YOLOv8 yang terhubung ke OpenStreetMap.",
        "Mengumpulkan dan mengurasi 982+ foto lapangan beserta metadata lokasi, fase pertumbuhan, dan waktu.",
        "Membangun chatbot Gemini 2.0 Flash dengan RAG menggunakan FAISS dan pipeline LLM multi-tahap.",
        "Mengembangkan dashboard admin untuk upload dokumen, validasi metadata, dan visualisasi data.",
        "Melakukan deployment ke VPS Ubuntu dengan autentikasi JWT dan manajemen antrean.",
      ],
      en: [
        "Designed an agricultural platform with interactive maps, data dashboards, and an AI-powered chatbot.",
        "Implemented a multi-service architecture with a Next.js frontend, Laravel API gateway, and FastAPI microservices.",
        "Developed YOLOv8 pest and disease detection linked to OpenStreetMap.",
        "Collected and curated 982+ field photos with location, growth phase, and time metadata.",
        "Built a Gemini 2.0 Flash chatbot with RAG using FAISS and a multi-stage LLM pipeline.",
        "Developed an admin dashboard for document upload, metadata validation, and data visualization.",
        "Deployed the system to an Ubuntu VPS with JWT authentication and queue management.",
      ],
    },
  },
  {
    role: "Django Developer (Intern)",
    company: "CV Sejahtera Mandiri Solusindo",
    date: {
      id: "Sep 2024 - Jan 2025",
      en: "Sep 2024 - Jan 2025",
    },
    location: "Surabaya, Indonesia",
    description: {
      id: "Mengembangkan ERP dengan Django dan PostgreSQL, termasuk Redis caching, CRUD API, antarmuka responsif, dan penerapan arsitektur microservices.",
      en: "Developed an ERP system with Django and PostgreSQL, including Redis caching, CRUD APIs, a responsive interface, and a microservices architecture.",
    },
    details: {
      id: [
        "Mengembangkan sistem ERP untuk perusahaan material bangunan menggunakan Django dan PostgreSQL.",
        "Membangun UI responsif dan mudah digunakan dengan jQuery.",
        "Membangun dan mengelola CRUD API untuk integrasi layanan.",
        "Menerapkan Redis caching untuk meningkatkan performa dan mengurangi query database.",
        "Menerapkan arsitektur microservices untuk mendukung skalabilitas sistem.",
      ],
      en: [
        "Developed an ERP system for a building materials company using Django and PostgreSQL.",
        "Built a responsive and user-friendly interface with jQuery.",
        "Built and managed CRUD APIs for service integration.",
        "Implemented Redis caching to improve performance and reduce database queries.",
        "Applied a microservices architecture to support system scalability.",
      ],
    },
  },
  {
    role: "Fullstack Developer",
    company: "Jagapadi",
    date: {
      id: "Agu 2024 - Nov 2024",
      en: "Aug 2024 - Nov 2024",
    },
    location: "Surabaya, Indonesia",
    description: {
      id: "Mengembangkan sistem riset dengan Laravel, FastAPI, dan Next.js; mengelola data lapangan PostgreSQL, visualisasi data drone, dan deployment melalui GitLab CI/CD.",
      en: "Developed a research system with Laravel, FastAPI, and Next.js; managed PostgreSQL field data, drone data visualization, and deployment through GitLab CI/CD.",
    },
    details: {
      id: [
        "Mengembangkan backend riset teknologi pertanian menggunakan Laravel dan Python.",
        "Membangun API Laravel dan FastAPI untuk integrasi layanan riset.",
        "Merancang dan mengelola database PostgreSQL untuk penyimpanan dan pemrosesan data.",
        "Mengintegrasikan backend dengan frontend Next.js serta membangun peta interaktif dan integrasi sistem drone.",
        "Melakukan deployment ke VPS dan berkolaborasi melalui GitLab.",
      ],
      en: [
        "Developed an agricultural technology research backend using Laravel and Python.",
        "Built Laravel and FastAPI services for research integrations.",
        "Designed and managed PostgreSQL databases for research data storage and processing.",
        "Integrated the backend with Next.js and built interactive maps and drone system integration.",
        "Deployed applications to VPS and collaborated through GitLab.",
      ],
    },
  },
  {
    role: "Fullstack Developer (Intern)",
    company: "CV Sejahtera Mandiri Solusindo",
    date: {
      id: "Mei 2024 - Agu 2024",
      en: "May 2024 - Aug 2024",
    },
    location: "Surabaya, Indonesia",
    description: {
      id: "Membangun API Express.js, database PostgreSQL, dan frontend Next.js dengan TypeScript. Aplikasi digunakan oleh 8 divisi untuk digitalisasi proses fakultas.",
      en: "Built Express.js APIs, PostgreSQL databases, and a Next.js frontend with TypeScript. The application was adopted by 8 divisions to digitize faculty processes.",
    },
    details: {
      id: [
        "Mengembangkan backend menggunakan JavaScript dan Python serta bertugas sebagai Assistant Project Manager.",
        "Membangun dan mengelola API Express.js untuk integrasi layanan.",
        "Merancang dan mengoptimalkan struktur database PostgreSQL.",
        "Mengembangkan fitur frontend menggunakan Next.js dan TypeScript.",
        "Melakukan deployment ke Windows Server dan berkolaborasi melalui GitHub.",
        "Menghasilkan aplikasi yang digunakan oleh 8 divisi untuk digitalisasi administrasi fakultas.",
      ],
      en: [
        "Developed backend software with JavaScript and Python and served as Assistant Project Manager.",
        "Built and managed Express.js APIs for service integration.",
        "Designed and optimized PostgreSQL database structures.",
        "Developed frontend features using Next.js and TypeScript.",
        "Deployed applications to Windows Server and collaborated through GitHub.",
        "Delivered an application adopted by 8 divisions to digitize faculty administration.",
      ],
    },
  },
  {
    role: "Backend Developer (Intern)",
    company: "CV Sejahtera Mandiri Solusindo",
    date: {
      id: "Des 2023 - Mei 2024",
      en: "Dec 2023 - May 2024",
    },
    location: "Surabaya, Indonesia",
    description: {
      id: "Mengembangkan backend Express.js dan PostgreSQL, melakukan deployment ke Windows Server, dan mengoordinasikan workflow sebagai Assistant Project Manager.",
      en: "Developed an Express.js and PostgreSQL backend, deployed applications to Windows Server, and coordinated the workflow as Assistant Project Manager.",
    },
    details: {
      id: [
        "Mengembangkan dan mengelola backend aplikasi.",
        "Bertugas sebagai Assistant Project Manager untuk koordinasi tim dan workflow pengembangan.",
        "Membangun API Express.js serta merancang dan mengoptimalkan database PostgreSQL.",
        "Mengintegrasikan backend dengan frontend Next.js.",
        "Melakukan deployment ke Windows Server dan menjaga stabilitas sistem produksi.",
      ],
      en: [
        "Developed and managed application backends.",
        "Served as Assistant Project Manager to coordinate the team and development workflow.",
        "Built Express.js APIs and designed and optimized PostgreSQL databases.",
        "Integrated the backend with a Next.js frontend.",
        "Deployed applications to Windows Server and maintained production stability.",
      ],
    },
  },
  {
    role: "Assistant Product Owner",
    company: "Agile Teknik",
    date: {
      id: "Feb 2023 - Nov 2023",
      en: "Feb 2023 - Nov 2023",
    },
    location: "Surabaya, Indonesia",
    description: {
      id: "Mengoordinasikan tim Simple Wallet, menangani pengujian dan dokumentasi SQA, mendukung developer Flutter, dan berkontribusi pada integrasi backend Laravel.",
      en: "Coordinated the Simple Wallet team, handled SQA testing and documentation, supported Flutter developers, and contributed to Laravel backend integration.",
    },
    details: {
      id: [
        "Mengoordinasikan tim Simple Wallet untuk mengidentifikasi hambatan dan merumuskan solusi.",
        "Bertugas sebagai SQA untuk pengujian fungsional dan dokumentasi bug.",
        "Memberikan dukungan teknis kepada developer Flutter dalam pengembangan fitur mobile.",
        "Berkontribusi pada backend Laravel untuk integrasi dan peningkatan performa.",
      ],
      en: [
        "Coordinated the Simple Wallet team to identify blockers and formulate solutions.",
        "Served as SQA for functional testing and bug documentation.",
        "Provided technical support to Flutter developers building mobile features.",
        "Contributed to the Laravel backend for integration and performance improvements.",
      ],
    },
  },
  {
    role: "Steering Committee",
    company: "Informatics Department Orientation - PENS",
    date: {
      id: "Jun 2022 - Jan 2023",
      en: "Jun 2022 - Jan 2023",
    },
    location: "Surabaya, Indonesia",
    description: {
      id: "Mengarahkan 100+ panitia dalam persiapan orientasi jurusan dan mendukung pengelolaan data untuk 125+ mahasiswa baru.",
      en: "Guided 100+ committee members preparing the department orientation and supported data management for 125+ new students.",
    },
    details: {
      id: [
        "Berkolaborasi dengan Himpunan Mahasiswa Informatika dalam merancang konsep dan agenda orientasi.",
        "Memberikan arahan kepada 100+ panitia dalam mempersiapkan rangkaian kegiatan.",
        "Terlibat dalam pengumpulan dan pengelolaan data 125+ mahasiswa baru.",
        "Berkontribusi pada keputusan strategis agar program selaras dengan tujuan organisasi.",
      ],
      en: [
        "Collaborated with the Informatics Student Association to design the orientation concept and agenda.",
        "Guided 100+ committee members in preparing the program.",
        "Supported data collection and management for 125+ new students.",
        "Contributed to strategic decisions to align the program with organizational goals.",
      ],
    },
  },
  {
    role: "Frontend Developer",
    company: "E-Code",
    date: {
      id: "Des 2021 - Mei 2023",
      en: "Dec 2021 - May 2023",
    },
    location: "Surabaya, Indonesia",
    description: {
      id: "Mengembangkan frontend aplikasi e-voting berbasis Laravel yang digunakan oleh 500+ peserta dalam pemilihan ketua himpunan.",
      en: "Developed a Laravel-based e-voting frontend used by 500+ participants in a student association election.",
    },
    details: {
      id: [
        "Mengembangkan frontend proyek e-voting untuk pemilihan ketua Himpunan Mahasiswa Informatika.",
        "Membangun sistem menggunakan PHP Laravel dengan fokus pada kemudahan penggunaan dan stabilitas.",
        "Melakukan deployment aplikasi yang digunakan oleh 500+ peserta untuk pemilihan yang aman dan transparan.",
      ],
      en: [
        "Developed the frontend for an e-voting project used in an Informatics Student Association election.",
        "Built the system with PHP Laravel with a focus on usability and stability.",
        "Deployed the application for 500+ participants, supporting a secure and transparent election.",
      ],
    },
  },
] as const;

export const skillGroups = [
  {
    title: {
      id: "Frontend & Mobile",
      en: "Frontend & Mobile",
    },
    items: ["Next.js", "React.js", "React Native", "TypeScript", "Flutter"],
  },
  {
    title: {
      id: "Backend",
      en: "Backend",
    },
    items: ["Node.js", "NestJS", "Express.js", "Laravel", "Django", "FastAPI"],
  },
  {
    title: {
      id: "Data & Infrastruktur",
      en: "Data & Infrastructure",
    },
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Docker",
      "RabbitMQ",
    ],
  },
  {
    title: {
      id: "Delivery & Observability",
      en: "Delivery & Observability",
    },
    items: ["Git", "CI/CD", "Ubuntu VPS", "Grafana", "Prometheus", "API Testing"],
  },
] as const;
