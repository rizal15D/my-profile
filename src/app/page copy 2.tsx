// app/page.tsx
import Section from "../components/Section";

export default function Page() {
  return (
    <main className="snap-container">
      {/* Navbar kecil yang “anchor-jump” antar section */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-10 bg-black/60 text-white backdrop-blur rounded-full px-4 py-2">
        <ul className="flex gap-4 text-sm">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Tentang</a>
          </li>
          <li>
            <a href="#projects">Projek</a>
          </li>
          <li>
            <a href="#contact">Kontak</a>
          </li>
        </ul>
      </nav>

      <Section
        id="home"
        title="Muhammad Rizal"
        className="bg-gradient-to-b from-slate-900 to-slate-800 text-white"
      >
        <p className="text-lg opacity-90">
          Fullstack Developer — React, Next.js, Node.js, FastAPI. Fokus
          microservices & DevOps ringan.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a
            href="#projects"
            className="rounded-xl bg-white text-slate-900 px-4 py-2 font-medium"
          >
            Lihat Projek
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-white/60 px-4 py-2 font-medium"
          >
            Hubungi
          </a>
        </div>
      </Section>

      <Section
        id="about"
        title="Tentang Saya"
        className="bg-white text-slate-900"
      >
        <p className="text-lg leading-relaxed">
          Saya membangun aplikasi web & mobile, API berperforma, dan pipeline
          sederhana CI/CD. Pengalaman: Next.js, React Native, Node.js/Nest,
          FastAPI, PostgreSQL/MySQL, Docker.
        </p>
      </Section>

      <Section
        id="projects"
        title="Projek Terpilih"
        className="bg-slate-50 text-slate-900"
      >
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <li className="rounded-2xl border p-4">
            <h3 className="font-semibold">AI Pertanian & Peta</h3>
            <p className="text-sm opacity-80">
              Next.js + FastAPI, YOLOv8, RAG (FAISS), OSM mapping.
            </p>
          </li>
          <li className="rounded-2xl border p-4">
            <h3 className="font-semibold">ERP Mini</h3>
            <p className="text-sm opacity-80">
              Express + PostgreSQL, Grafana/Prometheus monitoring.
            </p>
          </li>
          <li className="rounded-2xl border p-4">
            <h3 className="font-semibold">React Native App</h3>
            <p className="text-sm opacity-80">
              Push notif, Auth, Upgrade RN & dependency hardening.
            </p>
          </li>
          <li className="rounded-2xl border p-4">
            <h3 className="font-semibold">Microservice Auth</h3>
            <p className="text-sm opacity-80">
              NestJS + RabbitMQ, Mongo/Postgres, API gateway.
            </p>
          </li>
        </ul>
      </Section>

      <Section id="contact" title="Kontak" className="bg-slate-900 text-white">
        <div className="space-y-2">
          <p>
            Email:{" "}
            <a
              className="underline"
              href="mailto:muhammadrizal15122001@gmail.com"
            >
              muhammadrizal15122001@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              className="underline"
              href="https://www.linkedin.com/in/muhammadrizalgg/"
            >
              /in/muhammadrizalgg
            </a>
          </p>
        </div>
        <a
          href="#home"
          className="mt-6 inline-block rounded-xl border border-white/50 px-4 py-2"
        >
          ↑ Kembali ke atas
        </a>
      </Section>
    </main>
  );
}
