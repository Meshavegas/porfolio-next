import React, { useState } from "react";
import OneEducationItem from "./OneEducationItem";
import { motion, AnimatePresence } from "framer-motion";

export const EducationCard = () => {
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = education.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className=" w-full mt-10">
      <h1 className=" text-3xl text-gray-light font-bold">Education</h1>
      <h2 className=" text-3xl text-secondary font-bold ">
        what i learn in School
      </h2>
      <div className=" mt-5 h-fit lg:h-[400px] ">
        <AnimatePresence>
          {currentItems.map((item, key) => (
            <OneEducationItem key={key} item={item} />
          ))}
        </AnimatePresence>
      </div>
      <div className="pagination flex justify-end gap-5">
        {Array.from({
          length: Math.ceil(education.length / itemsPerPage),
        }).map((_, index) => (
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
        ))}
      </div>
    </div>
  );
};
export default EducationCard;

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
