"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import { AboutCard } from "./AboutCard";
import { EducationCard } from "./EducationCard";
import { ExperianceCard } from "./ExperienceCard";
import { saveAs } from "file-saver";

const AboutMe = () => {
  const saveFile = () => {
    saveAs(
      "https://firebasestorage.googleapis.com/v0/b/maniv-a665b.appspot.com/o/LONTCHI_LO%C3%8FC%20STEVE_Resume_02-11-2023-16-35-38.pdf?alt=media&token=bbafd449-aff1-4d37-819a-209943949ad8",
      "LONTCHI_LOÏC_CV.pdf"
    );
  };
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex gap-10 lg:flex-row flex-col items-center ">
      <div className=" w-[90%] lg:w-1/3 h-[600px] relative flex justify-center items-center">
        <Image
          src="/blop.png"
          width={1080}
          height={1080}
          alt=""
          className=" -z-10 absolute rotate-12 top-20"
        />
        <Image
          src="/bonome.webp"
          alt="logo"
          width={1080}
          height={1080}
          className=""
        />

        <button
          onClick={saveFile}
          className=" animation-pulse absolute flex gap-5 bg-secondary px-6 py-3 text-xl text-white rounded-full md:bottom-4 bottom-16 capitalize"
        >
          {" "}
          <FaDownload />
          Download my CV
        </button>
      </div>
      <div className=" w-[90%] lg:w-[65%] lg:flex lg:flex-col items-end h-full lg:h-[600px] ">
        <div className="flex gap-5 lg:gap-10  bg-primary w-fit px-2 mb-3 lg:mb-0 py-2  lg:px-6 lg:py-2 rounded-full text-whited items-center">
          <h2
            className={`text-center cursor-pointer text-lg lg:text-xl  ${
              activeIndex === 0
                ? "text-secondary bg-white px-3 py-1 rounded-full"
                : "text-white"
            }`}
            onClick={() => setActiveIndex(0)}
          >
            About
          </h2>
          <h2
            className={`text-center cursor-pointer text-lg lg:text-xl ${
              activeIndex === 1
                ? "text-secondary bg-white px-3 py-1 rounded-full"
                : "text-white"
            }`}
            onClick={() => setActiveIndex(1)}
          >
            Education
          </h2>
          <h2
            className={`text-center cursor-pointer text-lg lg:text-xl ${
              activeIndex === 2
                ? "text-secondary bg-white px-3 py-1 rounded-full"
                : "text-white"
            }`}
            onClick={() => setActiveIndex(2)}
          >
            Experience
          </h2>
        </div>
        {activeIndex === 0 && <AboutCard />}
        {activeIndex === 1 && <EducationCard />}
        {activeIndex === 2 && <ExperianceCard />}
      </div>
    </div>
  );
};

export default AboutMe;
