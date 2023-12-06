import Image from "next/image";
import SectionLayout from "../Component/SectionLayout";
import HeroSection from "../Component/HeroSection";
import AboutMe from "../Component/AboutMe";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SectionLayout classNames="" sectionId="Hero" hauteur="90vh">
        <AboutMe />
      </SectionLayout>
    </main>
  );
}
