import Image from "next/image";
import SectionLayout from "../Component/SectionLayout";
import HeroSection from "../Component/HeroSection";
import AboutMe from "../Component/AboutMe";
import SkillSection from "../Component/SkillSection";
import ProjectsScetion from "../Component/ProjectsScetion";
import Statistique from "../Component/Statistique";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SectionLayout classNames=" bg-whited" sectionId="about" hauteur="60vh">
        <AboutMe />
      </SectionLayout>
      <SectionLayout classNames=" bg-whited" sectionId="skill" hauteur="90vh">
        <SkillSection />
      </SectionLayout>
      <SectionLayout classNames=" bg-whited" sectionId="project" hauteur="90vh">
        <ProjectsScetion />
      </SectionLayout>
      <Statistique />
    </main>
  );
}