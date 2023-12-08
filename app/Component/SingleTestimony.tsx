"use client";

import React, { useState } from "react";
//import {useInView} tells the dom when something is in viewport
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { testimony } from "./Testimony";

export const slideVariants = {
  hiddenRight: {
    x: "10%",
    opacity: 0,
  },
  textHidden: {
    y: "-10%",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.5,
    },
  },
};
function SingleTestimony({
  key,
  it,
  currentPage,
  paginate,
}: {
  currentPage: number;
  paginate: (i: number) => void;
  it: any;
  key: number;
}) {
  return (
    <AnimatePresence>
      <div className=" flex gap-10 flex-wrap items-end" key={key}>
        <div className=" md:hidden text-center">
          <h1 className=" text-2xl">Client Speak</h1>
          <h1 className=" text-3xl text-primary font-extrabold mt-5">
            What some of my Client Say
          </h1>
        </div>
        <div className="w-full md:w-1/4 mb-5 md:mb-0">
          <motion.div
            className="  rounded-xl overflow-hidden shadow-xl h-fit"
            variants={slideVariants}
            initial={"hiddenRight"}
            animate="visible"
            exit="exit"
          >
            <Image
              src={it.image}
              alt={it.name}
              className=" object-cover aspect-square"
              width={500}
              height={500}
            />
          </motion.div>
          <div className="pagination flex  justify-between  mt-5 ">
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
        <div className=" md:w-[70%] flex  flex-col md:justify-center mb-5">
          <div className=" hidden md:block">
            <h1 className=" text-2xl">Client Speak</h1>
            <h1 className=" text-3xl text-primary font-extrabold mt-5">
              What some of my Client Say
            </h1>
          </div>
          <motion.p
            className=" text-left text-2xl leading-10 md:mt-5"
            variants={slideVariants}
            initial={"textHidden"}
            animate="visible"
            exit="exit"
          >
            “{it.text}”
          </motion.p>
          <motion.h1
            className=" text-2xl mt-10"
            variants={slideVariants}
            initial={"textHidden"}
            animate="visible"
            exit="exit"
          >
            <span className=" text-primary font-bold"> {it.name}</span>{" "}
            {it.poste}
          </motion.h1>
          <div className="flex gap-4 mt-10 items-center md:justify-start justify-center">
            {testimony.map((it, key) =>
              key + 1 === currentPage ? (
                <div
                  key={key}
                  onClick={() => paginate(key + 1)}
                  className=" border p-1 rounded-full border-secondary"
                >
                  <div className=" rounded-full w-6 h-6 bg-primary outline-offset-4"></div>
                </div>
              ) : (
                <div
                  className=" rounded-full w-5 h-5 bg-primary outline-offset-4"
                  key={key}
                  onClick={() => paginate(key + 1)}
                ></div>
              )
            )}
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default SingleTestimony;
