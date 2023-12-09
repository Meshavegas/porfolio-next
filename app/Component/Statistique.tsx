"use client";
import React from "react";
import Image from "next/image";
import { AppContainer } from "./StyledComponents";
import { Wrapper } from "./StyledComponents";
import { MarqueeGroup } from "./StyledComponents";
import { Marquee } from "./StyledComponents";
import { ImageGroup } from "./StyledComponents";
import AnimatedNumbers from "react-animated-numbers";

const Statistique = () => {
  return (
    <div
      className=" bg-whited flex flex-col justify-center items-center"
      id="clients"
    >
      <div className=" w-[90%] md:w-[30%]">
        <p className=" text-4xl leading-10 text-center text-primary">
          <span className=" text-5xl font-extrabold"> 04+ </span>
          leading brands have chosen us since 2023
        </p>
      </div>
      <hr className=" w-full border-gray opacity-30 my-10" />
      <div className="w-[90%] md:w-[60%] flex justify-between md:flex-row flex-col gap-4 md:gap-0">
        <SingleStat nbr={25} title="Completes Projects" />
        <SingleStat nbr={3} title="Currents Projects" />
        <SingleStat nbr={10} title="Clients Satisfieds" />
      </div>
      <hr className=" w-full border-gray opacity-30 my-10 overflow-hidden" />

      <AppContainer>
        <Wrapper>
          <Marquee>
            <MarqueeGroup>
              {partenaire.map((el, key) => (
                <ImageGroup key={key}>
                  <Image
                    src={el.logo}
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
              {partenaire.map((el, key) => (
                <ImageGroup key={key}>
                  <Image
                    src={el.logo}
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
    </div>
  );
};

export default Statistique;

const partenaire = [
  { logo: "./infographie.png", url: "lien" },
  { logo: "./logo.png", url: "lien" },
  { logo: "./infographie.png", url: "lien" },
  { logo: "./logo.png", url: "lien" },
  { logo: "./infographie.png", url: "lien" },
  { logo: "./logo.png", url: "lien" },
  { logo: "./infographie.png", url: "lien" },
  { logo: "./logo.png", url: "lien" },
  { logo: "./infographie.png", url: "lien" },
];

function SingleStat({ nbr, title }: { nbr: number; title: string }) {
  return (
    <div className=" md:w-[30%] bg-white shadow-lg flex justify-center flex-col items-center rounded-md px-6 py-6 group hover:bg-primary cursor-default">
      <h1 className=" text-4xl font-extrabold text-primary group-hover:text-white flex">
        <AnimatedNumbers
          transitions={(index) => ({
            type: "keyframes",
            duration: index + 1.6,
          })}
          animateToNumber={nbr}
        />
        +
      </h1>
      <p className=" text-xl font-bold mt-5 group-hover:text-white">{title}</p>
    </div>
  );
}
