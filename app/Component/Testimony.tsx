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
    }, 10000);

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
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, doloribus! Voluptas laborum quae cupiditate magni fugiat sed enim ipsa officia!",
    name: "John Doe",
    poste: "CEO de Google",
  },
  {
    image: "/infographie.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, doloribus! Voluptas laborum quae cupiditate magni fugiat sed enim ipsa officia!",
    name: "John Doe",
    poste: "CEO de Blender",
  },
  {
    image: "/infographie.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, doloribus! Voluptas laborum quae cupiditate magni fugiat sed enim ipsa officia!",
    name: "John Doe",
    poste: "CEO de Google",
  },
  {
    image: "/infographie.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, doloribus! Voluptas laborum quae cupiditate magni fugiat sed enim ipsa officia!",
    name: "John Doe",
    poste: "CEO de Meta",
  },
  {
    image: "/infographie.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, doloribus! Voluptas laborum quae cupiditate magni fugiat sed enim ipsa officia!",
    name: "John Doe",
    poste: "CEO de X",
  },
];
