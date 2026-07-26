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
  portrait: "/images/Removal-10-2.png",
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
    company: "Wijoyo Dev",
    date: {
      id: "Apr 2025 - Sekarang",
      en: "Apr 2025 - Present",
    },
    description: {
      id: "Debugging dan optimasi aplikasi React.js serta React Native untuk 1.500+ pengguna. Refactor backend Express.js, caching Node.js, deployment otomatis, dan monitoring dengan Grafana serta Prometheus.",
      en: "Debugged and optimized React.js and React Native applications for 1,500+ users. Refactored an Express.js backend, added Node.js caching, automated deployments, and monitored systems with Grafana and Prometheus.",
    },
  },
  {
    role: "Fullstack Developer",
    company: "Final Project - PENS",
    date: {
      id: "Jan 2024 - Agu 2025",
      en: "Jan 2024 - Aug 2025",
    },
    description: {
      id: "Membangun platform pertanian berbasis AI dengan peta interaktif, dashboard, chatbot LLM, deteksi YOLOv8, dan layanan FastAPI yang dideploy ke VPS Ubuntu.",
      en: "Built an AI-powered agriculture platform with interactive maps, dashboards, an LLM chatbot, YOLOv8 detection, and FastAPI services deployed to an Ubuntu VPS.",
    },
  },
  {
    role: "Django Developer (Intern)",
    company: "CV Sejahtera Mandiri Solusindo",
    date: {
      id: "Sep 2024 - Jan 2025",
      en: "Sep 2024 - Jan 2025",
    },
    description: {
      id: "Mengembangkan ERP dengan Django dan PostgreSQL, termasuk Redis caching, CRUD API, antarmuka responsif, dan penerapan arsitektur microservices.",
      en: "Developed an ERP system with Django and PostgreSQL, including Redis caching, CRUD APIs, a responsive interface, and a microservices architecture.",
    },
  },
  {
    role: "Fullstack Developer",
    company: "Jagapadi",
    date: {
      id: "Agu 2024 - Nov 2024",
      en: "Aug 2024 - Nov 2024",
    },
    description: {
      id: "Mengembangkan sistem riset dengan Laravel, FastAPI, dan Next.js; mengelola data lapangan PostgreSQL, visualisasi data drone, dan deployment melalui GitLab CI/CD.",
      en: "Developed a research system with Laravel, FastAPI, and Next.js; managed PostgreSQL field data, drone data visualization, and deployment through GitLab CI/CD.",
    },
  },
  {
    role: "Fullstack Developer (Intern)",
    company: "CV Sejahtera Mandiri Solusindo",
    date: {
      id: "Mei 2024 - Agu 2024",
      en: "May 2024 - Aug 2024",
    },
    description: {
      id: "Membangun API Express.js, database PostgreSQL, dan frontend Next.js dengan TypeScript. Aplikasi digunakan oleh 8 divisi untuk digitalisasi proses fakultas.",
      en: "Built Express.js APIs, PostgreSQL databases, and a Next.js frontend with TypeScript. The application was adopted by 8 divisions to digitize faculty processes.",
    },
  },
  {
    role: "Backend Developer (Intern)",
    company: "CV Sejahtera Mandiri Solusindo",
    date: {
      id: "Des 2023 - Mei 2024",
      en: "Dec 2023 - May 2024",
    },
    description: {
      id: "Mengembangkan backend Express.js dan PostgreSQL, melakukan deployment ke Windows Server, dan mengoordinasikan workflow sebagai Assistant Project Manager.",
      en: "Developed an Express.js and PostgreSQL backend, deployed applications to Windows Server, and coordinated the workflow as Assistant Project Manager.",
    },
  },
  {
    role: "Assistant Product Owner",
    company: "Agile Teknik",
    date: {
      id: "Feb 2023 - Nov 2023",
      en: "Feb 2023 - Nov 2023",
    },
    description: {
      id: "Mengoordinasikan tim Simple Wallet, menangani pengujian dan dokumentasi SQA, mendukung developer Flutter, dan berkontribusi pada integrasi backend Laravel.",
      en: "Coordinated the Simple Wallet team, handled SQA testing and documentation, supported Flutter developers, and contributed to Laravel backend integration.",
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
