"use client";

import React, { useState } from "react";

import Image from "next/image";

import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";

const Testimony = () => {
  const itemsPerPage = 1;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = testimony.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div>
      <div className="">
        {currentItems.map((it, key) => (
          <div className=" flex gap-10">
            <div className=" w-1/4 rounded-xl overflow-hidden">
              <Image
                src={it.image}
                alt={it.name}
                className=" object-cover aspect-square"
                width={500}
                height={500}
              />
            </div>
            <div className=" w-1/2 flex  flex-col justify-center">
              <div className="">
                <h1 className=" text-2xl">Client Speak</h1>
                <h1 className=" text-3xl text-primary font-extrabold mt-5">
                  What some of my Client Say
                </h1>
              </div>
              <p className=" text-left text-2xl leading-10 mt-5">“{it.text}”</p>
              <h1 className=" text-2xl mt-10">
                <span className=" text-primary font-bold"> {it.name}</span>{" "}
                {it.poste}
              </h1>
            </div>
          </div>
        ))}

        <div className="pagination flex  justify-between w-1/4 mt-5">
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
const testimony = [
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
