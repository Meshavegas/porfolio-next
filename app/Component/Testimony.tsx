"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import SingleTestimony from "./SingleTestimony";

declare module "framer-motion" {
  export interface AnimatePresenceProps {
    children?: React.ReactNode;
  }
}
const Testimony = () => {
  const itemsPerPage = 1;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = testimony.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    // Démarrez un intervalle pour exécuter paginate toutes les 5000 millisecondes (5 secondes)
    const intervalId = setInterval(() => {
      const nextPage = currentPage < testimony.length ? currentPage + 1 : 1;
      paginate(nextPage);
      setCurrentPage(nextPage);
    }, 20000);

    // Nettoyez l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, [currentPage, testimony, paginate]);
  return (
    <div className=" py-10">
      <div className="">
        <SingleTestimony
          key={currentPage}
          it={currentItems[0]}
          currentPage={currentPage}
          paginate={paginate}
        />

        <div className="pagination flex  justify-between md:w-1/4 mt-5">
          {testimony.map((it, index) => (
            <Image
              onClick={() => paginate(index + 1)}
              key={index}
              src={it.image}
              alt={it.name}
              className={` object-cover aspect-square ${
                currentPage === index + 1 ? " opacity-100" : " opacity-40"
              } `}
              width={50}
              height={50}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimony;
export const testimony = [
  {
    image: "/infographie.png",
    text: "Je suis ravi de souligner les compétences exceptionnelles de LOIC, Développeur Web et Mobile depuis avril 2023. Sa créativité, sa résolution de problèmes aiguë et son impact positif sur notre équipe ont considérablement renforcé notre excellence technologique. Un atout inestimable.",
    name: "J. B.",
    poste: "CEO de Ocean Innovation Center",
  },
  {
    image: "/infographie.png",
    text: "Il est un immense plaisir de vanter les talents incommensurables de Mesha, notre Consultant Full Stack depuis novembre 2022. Sa brillante maîtrise technique et son engagement infatigable démontrent une excellence sans égale. Mesha est l'architecte de l'innovation qui propulse notre entreprise vers de nouveaux sommets, une véritable source d'inspiration pour toute l'équipe",
    name: "B. M",
    poste: "Chef de Project de Doho Consulting & Engineering,",
  },
  {
    image: "/infographie.png",
    text: "Il me fait un immense plaisir de témoigner du stage exceptionnel de Loic de juillet à octobre 2022. Son dévouement sans faille à l'assistance utilisateur, à la maintenance informatique et à la gestion du réseau a été remarquable. En tant que jeune developeur dynamique, Lontchi apporte une perspective unique et précieuse à notre équipe",
    name: "R. Lady",
    poste: "Superviseure chez Sarki Money Contribution",
  },
  {
    image: "/infographie.png",
    text: "J'ai eu le privilège de travailler avec LONTCHI en tant que formateur de juillet à octobre 2021. Son expertise dans le dépannage, l'installation, la gestion des sauvegardes et la rédaction de documentation utilisateur a considérablement amélioré notre programme de formation. M. LONTCHI a démontré un engagement exceptionnel envers l'excellence pédagogique, laissant une empreinte positive sur nos étudiants et notre institution.",
    name: "S. Y",
    poste: "Chef De Centre  à l'Institut Africain d'Informatique",
  },
  {
    image: "/infographie.png",
    text: "Collaborer avec LONTCHI en tant que formateur en Bureautique et Internet pour le programme MIJEF 2035 a été un privilège. Son expertise remarquable et sa dévotion exemplaire ont été essentielles. LONTCHI a facilité la compréhension des sujets complexes, motivé les participants et contribué au succès du programme, favorisant l'épanouissement des étudiants.",
    name: "P. M.",
    poste: "Responsable de Formation à l'Institut Africain d'Informatique",
  },
];
