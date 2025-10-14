import Image from "next/image";
import HeroSection from "../sections/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "../sections/AboutSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
    </main>
  );
}
