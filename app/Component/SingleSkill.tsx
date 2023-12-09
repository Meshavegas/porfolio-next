"use client";
import React from "react";
import {
  AppContainer,
  ImageGroup,
  MarqueeGroup,
  Wrapper,
  Marquee,
} from "./StyledComponents";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { AnimatePresence, motion } from "framer-motion";
import { slideVariants } from "./SingleTestimony";

function SingleSkill({
  mykey,
  skill,
  openIndex,
  collapseSkill,
}: {
  mykey: number;
  skill: Skill;
  openIndex: number;
  collapseSkill: (i: number) => void;
}) {
  return (
    <div className=" mt-5 bg-white py-3 px-6 rounded-xl shadow">
      <div className=" flex justify-between flex-wrap items-center">
        <div className=" w-12 h-12 bg-secondary flex justify-center items-center border-2 border-dashed border-light-grey rounded-full">
          <h3 className=" text-xl text-light-grey font-bold ">0{3 + mykey}</h3>
        </div>
        <div
          className=" flex gap-3 items-center cursor-pointer"
          onClick={() => collapseSkill(mykey)}
        >
          <h2 className=" text-2xl font-bold text-primary capitalize">
            {skill.name}
          </h2>
          <div className=" text-2xl font-extrabold text-secondary">
            {openIndex === mykey ? (
              <MdOutlineKeyboardDoubleArrowUp className=" w-10 h-10" />
            ) : (
              <MdOutlineKeyboardDoubleArrowDown className=" w-10 h-10" />
            )}
          </div>
        </div>
      </div>
      {openIndex === mykey && (
        <AnimatePresence>
          <motion.div
            className=""
            variants={slideVariants}
            initial={"hiddenTop"}
            animate="visible2"
            exit="exit"
          >
            <AppContainer>
              <Wrapper>
                <Marquee>
                  <MarqueeGroup>
                    {skill.tableauItems.map((el, key) => (
                      <ImageGroup key={key}>
                        <Image
                          src={urlFor(el.image).url()}
                          alt="image"
                          height={120}
                          width={120}
                          className=" object-contain aspect-video shadow-image"
                        />
                        {/* <Texte>{el.url}</Texte> */}
                      </ImageGroup>
                    ))}
                  </MarqueeGroup>
                  <MarqueeGroup>
                    {skill.tableauItems.map((el, key) => (
                      <ImageGroup key={key}>
                        <Image
                          src={urlFor(el.image).url()}
                          alt="image"
                          height={120}
                          width={120}
                          className=" object-contain aspect-video shadow-image"
                        />
                        {/* <Texte>{el.url}</Texte> */}
                      </ImageGroup>
                    ))}
                  </MarqueeGroup>
                </Marquee>
              </Wrapper>
            </AppContainer>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

export default SingleSkill;
