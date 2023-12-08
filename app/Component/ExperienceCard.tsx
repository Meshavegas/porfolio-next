import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideVariants } from "./SingleTestimony";

export const ExperianceCard = () => {
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = experiences.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className=" w-full mt-10">
      <h1 className=" text-3xl text-gray-light font-bold">Experience</h1>
      <h2 className=" text-3xl text-secondary font-bold ">what i done since</h2>
      <div className=" mt-5 h-fit lg:h-[400px]">
        {currentItems.map((ex, key) => (
          <motion.div
            className="border-t flex justify-between py-3 lg:flex-row flex-col"
            key={key}
            variants={slideVariants}
            initial={"hiddenRight"}
            animate="visible"
            exit="exit"
          >
            <div className="">
              <h1 className=" text-2xl font-bold">{ex.company}</h1>
              <p className=" text-xl mt-3 text-primary">- {ex.position}</p>
              <div className=" mt-3" id="task">
                {ex.tasks.map((tasks, key) => (
                  <div className=" flex gap-3 items-center" key={key}>
                    <div className=" w-4 h-4 bg-primary3 rounded-full"></div>
                    <span>{tasks}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className=" flex gap-3 lg:mt-0 mt-10 flex-nowrap w-[25%] justify-end ">
              <span>{ex.startYear}</span>
              <span>-</span>
              <span className=" capitalize">{ex.endYear}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="pagination flex justify-end gap-5 lg:mt-0 mt-10">
        {Array.from({
          length: Math.ceil(experiences.length / itemsPerPage),
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
export default ExperianceCard;

const experiences = [
  {
    company: "Ocean Innovation Center",
    position: "Développeur Web et Mobile",
    tasks: [
      "Conception, développement, formation et maintenance",
      "Collaboration étroite avec l'équipe de développement pour résoudre les problèmes",
      "Résolution de bugs, optimisation du code et mise en œuvre de meilleures pratiques de développement",
    ],
    startYear: "Apr. 2023",
    endYear: "present",
  },
  {
    company: "Doho Consulting & Engineering (DCE)",
    position: "Full Stack Consultant",
    tasks: ["Consultant Full Stack pour l'entreprise DCE"],
    startYear: "Nov. 2022",
    endYear: "present",
  },
  {
    company: "Sarki Money Contribution",
    position: "Stage",
    tasks: [
      "Assistance aux utilisateurs sur les outils bureautiques et messagerie",
      "Dépannage et maintenance du parc informatique",
      "Participation à la gestion du réseau (câblage, matériel, sécurité)",
    ],
    startYear: "Jul 2022",
    endYear: "Oct 2022",
  },
  {
    company: "Institut Africain d'Informatique",
    position: "Formateur",
    tasks: [
      "Dépannage et installation de postes informatiques",
      "Gestion des sauvegardes et mises à jour",
      "Rédaction de documentation utilisateur",
    ],
    startYear: "Jul 2021",
    endYear: "Oct 2021",
  },
  {
    company: "Institut Africain d'Informatique",
    position:
      "Formateur (MIJEF 2035 training in office automation and the Internet)",
    tasks: [
      "Formation dans l'automatisation de bureau et l'Internet dans le cadre du programme MIJEF 2035",
    ],
    startYear: "Nov 2021",
    endYear: "Feb 2022",
  },
];
