"use client";
import React, { useState } from "react";
import SingleSkill from "./SingleSkill";
import Image from "next/image";

type Props = {
  skills: Skill[];
};
const SkillSection = ({ skills }: Props) => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const collapseSkill = (pageNumber: number) => setOpenIndex(pageNumber);

  return (
    <div>
      <h1 className=" text-3xl font-bold text-center capitalize">My Skills</h1>
      <div className=" flex gap-5 mt-10 flex-col md:flex-row">
        <div className=" bg-white py-3 px-6 rounded-xl shadow">
          <div className=" flex justify-between">
            <div className=" w-12 h-12 bg-secondary flex justify-center items-center border-2 border-dashed border-light-grey rounded-full">
              <h3 className=" text-xl text-light-grey font-bold ">01</h3>
            </div>
            <div className="h-36 w-36">
              <Image
                src="developer.png"
                alt="image"
                height={120}
                width={120}
                className=" object-contain aspect-square"
              />
            </div>
          </div>
          <div className="">
            <h2 className=" text-2xl font-bold text-primary">
              Full Stack Developeur
            </h2>
            <p className=" text-xl">
              Being a full-stack developer is like being the conductor of a
              digital symphony. I juggle between design and code, sculpting
              online experiences. I&lsquo;m the architect who turns lines of
              code into functional works of art. In essence, I&lsquo;m the one
              who breathes life into digital magic.
            </p>
          </div>
        </div>
        <div className=" bg-white py-3 px-6 rounded-xl shadow">
          <div className=" flex justify-between">
            <div className=" w-12 h-12 bg-secondary flex justify-center items-center border-2 border-dashed border-light-grey rounded-full">
              <h3 className=" text-xl text-light-grey font-bold ">02</h3>
            </div>
            <div className="h-36 w-36">
              <Image
                src="app-dev.png"
                alt="image"
                height={120}
                width={120}
                className=" object-contain aspect-square"
              />
            </div>
          </div>
          <div className="">
            <h2 className=" text-2xl font-bold text-primary">
              Mobile App Developeur
            </h2>
            <p className=" text-xl">
              Being a mobile developer is like being an architect of digital
              innovation. I craft mobile experiences that push boundaries,
              juggling design and code with boundless audacity. I am the
              architect transforming lines of code into revolutionary mobile
              applications. In essence, I am the one reinventing the mobile
              experience with unwavering passion.
            </p>
          </div>
        </div>
      </div>
      {skills.map((skill, i) => {
        return (
          <SingleSkill
            key={i}
            mykey={i}
            skill={skill}
            collapseSkill={collapseSkill}
            openIndex={openIndex}
          />
        );
      })}
    </div>
  );
};

export default SkillSection;

{
  /*
<div className=" mt-5 bg-white py-3 px-6 rounded-xl shadow">
        <div className=" flex justify-between flex-wrap">
          <div className=" w-12 h-12 bg-secondary flex justify-center items-center border-2 border-dashed border-light-grey rounded-full">
            <h3 className=" text-xl text-light-grey font-bold ">04</h3>
          </div>
          <h2 className=" text-2xl font-bold text-primary capitalize">
            Frameworks
          </h2>
        </div>
        <ul className=" mt-10 flex justify-between flex-wrap gap-2">
          <li className=" w-20 h-20 bg-primary rounded-lg flex justify-center items-center">
            HTML5
          </li>
          <li className=" w-20 h-20 bg-primary rounded-lg flex justify-center items-center">
            HTML5
          </li>
          <li className=" w-20 h-20 bg-primary rounded-lg flex justify-center items-center">
            HTML5
          </li>
          <li className=" w-20 h-20 bg-primary rounded-lg flex justify-center items-center">
            HTML5
          </li>
        </ul>
      </div>
*/
}
