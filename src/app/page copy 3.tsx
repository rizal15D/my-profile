import Image from "next/image";
import HeroSection2 from "../sections/HeroSection2";
import Navbar from "../components/Navbar";
import AboutSection from "../sections/AboutSection";
import Section from "@/components/Section";

export default function Home() {
  return (
    <main className="snap-container">
      <HeroSection2 />
      <Section id="coba" className="text-white">
        coba
      </Section>
    </main>
  );
}
