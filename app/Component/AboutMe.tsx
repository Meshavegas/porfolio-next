"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";

const AboutMe = () => {
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
        <button className="absolute flex gap-5 bg-secondary px-6 py-3 text-xl text-white rounded-full md:bottom-4 bottom-16">
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

const AboutCard = () => {
  return (
    <div className=" mt-10 w-full">
      <h1 className=" text-3xl text-gray-light font-bold">About me</h1>
      <h2
        className=" text-3xl text-secondary font-bold
  "
      >
        Kwow about more
      </h2>
      <p className=" text-xl leading-10 mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        obcaecati dolor expedita exercitationem? Maxime dolorum ipsam, sed
        tenetur veritatis dolorem!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quo!
      </p>
      <div className="mt-10">
        <h2 className="text-3xl text-secondary font-bold">My Skills</h2>
        <div className="flex gap-4 mt-5 flex-wrap justify-center">
          <ul className="w-[100px] h-[100px] bg-primary"></ul>
          <ul className="w-[100px] h-[100px] bg-primary"></ul>
          <ul className="w-[100px] h-[100px] bg-primary"></ul>
          <ul className="w-[100px] h-[100px] bg-primary"></ul>
          <ul className="w-[100px] h-[100px] bg-primary"></ul>
        </div>
      </div>
    </div>
  );
};
const EducationCard = () => {
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = education.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div className=" w-full mt-10">
      <h1 className=" text-3xl text-gray-light font-bold">Education</h1>
      <h2 className=" text-3xl text-secondary font-bold mt-5">
        what i learn in School
      </h2>
      <div className=" mt-5 h-fit lg:h-[400px] ">
        {currentItems.map((educ, key) => (
          <div className=" bg-primary px-10 py-5 flex flex-col gap-3 mb-4 shadow-2xl rounded-3xl">
            <h1 className=" text-2xl text-white font-bold">{educ.school}</h1>
            <div className=" text-xl text-white2 font-bold">
              <span>{educ.startYr}</span>
              <span>-</span>
              <span className=" capitalize">{educ.endYr}</span>
            </div>
            <h2 className=" text-xl text-white2 font-bold">{educ.degree}</h2>
          </div>
        ))}
      </div>
      <div className="pagination flex justify-end gap-5">
        {Array.from({ length: Math.ceil(education.length / itemsPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`${
                currentPage === index + 1
                  ? " bg-secondary text-white"
                  : "bg-primary3 text-white"
              } px-4 py-2 text-xl font-extrabold`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};
const ExperianceCard = () => {
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = exp.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div className=" w-full mt-10">
      <h1 className=" text-3xl text-gray-light font-bold">Experience</h1>
      <h2 className=" text-3xl text-secondary font-bold mt-5">
        what i done since
      </h2>
      <div className=" mt-5 h-fit lg:h-[400px]">
        {currentItems.map((ex, key) => (
          <div
            className="border-t flex justify-between py-3 lg:flex-row flex-col"
            key={key}
          >
            <div className="">
              <h1 className=" text-2xl font-bold">{ex.company}</h1>
              <p className=" text-xl mt-3">- {ex.position}</p>
              <div className=" mt-3" id="task">
                {ex.task.map((tasks, key) => (
                  <div className=" flex gap-3 items-center" key={key}>
                    <div className=" w-4 h-4 bg-primary3 rounded-full"></div>
                    <span>{tasks}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className=" flex gap-3 lg:mt-0 mt-10">
              <span>{ex.startYear}</span>
              <span>-</span>
              <span className=" capitalize">{ex.endYear}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination flex justify-end gap-5 lg:mt-0 mt-10">
        {Array.from({ length: Math.ceil(exp.length / itemsPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`${
                currentPage === index + 1
                  ? " bg-secondary text-white"
                  : "bg-primary3 text-white"
              } px-4 py-2 text-xl font-extrabold`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

const education = [
  {
    school: "Institut Africain D'informatique",
    startYr: "2002",
    endYr: "present",
    degree: "Sofware engeener degreer",
  },
  {
    school: "Institut Africain D'informatique",
    startYr: "2002",
    endYr: "present",
    degree: "Sofware engeener degreer",
  },
  {
    school: "Institut Africain D'informatique",
    startYr: "2002",
    endYr: "present",
    degree: "Sofware engeener degreer",
  },
  {
    school: "Institut Africain D'informatique",
    startYr: "2002",
    endYr: "present",
    degree: "Sofware engeener degreer",
  },
  {
    school: "Institut Africain D'informatique",
    startYr: "2002",
    endYr: "present",
    degree: "Sofware engeener degreer",
  },
  {
    school: "Institut Africain D'informatique",
    startYr: "2002",
    endYr: "present",
    degree: "Sofware engeener degreer",
  },
];
const exp = [
  {
    company: "OIC",
    position: "Software Developer | computer Science trainer",
    startYear: "2022",
    endYear: "present",
    task: ["developemt", "trainnnig", "debuging"],
  },
  {
    company: "OIC",
    position: "Software Developer | computer Science trainer",
    startYear: "2022",
    endYear: "present",
    task: ["developemt", "trainnnig", "debuging"],
  },
  {
    company: "OIC",
    position: "Software Developer | computer Science trainer",
    startYear: "2022",
    endYear: "present",
    task: ["developemt", "trainnnig", "debuging"],
  },
  {
    company: "OIC",
    position: "Software Developer | computer Science trainer",
    startYear: "2022",
    endYear: "present",
    task: ["developemt", "trainnnig", "debuging"],
  },
  {
    company: "OIC",
    position: "Software Developer | computer Science trainer",
    startYear: "2022",
    endYear: "present",
    task: ["developemt", "trainnnig", "debuging"],
  },
  {
    company: "OIC",
    position: "Software Developer | computer Science trainer",
    startYear: "2022",
    endYear: "present",
    task: ["developemt", "trainnnig", "debuging"],
  },
  {
    company: "OIC",
    position: "Software Developer | computer Science trainer",
    startYear: "2022",
    endYear: "present",
    task: ["developemt", "trainnnig", "debuging"],
  },
];
