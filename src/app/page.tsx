import Image from "next/image";
import HeroSection2 from "../sections/HeroSection2";
import ExperienceSection from "../sections/ExperienceSection";
import Section from "@/components/Section";

export default function Home() {
  return (
    <main className="snap-container">
      <HeroSection2 />
      <ExperienceSection />
    </main>
  );
}
