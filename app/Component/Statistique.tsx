"use client";
import React from "react";
import styled, { keyframes, css } from "styled-components";
import Image from "next/image";

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
        <div className=" md:w-[30%] bg-white shadow-lg flex justify-center flex-col items-center rounded-md px-6 py-6 group hover:bg-primary cursor-default">
          <h1 className=" text-4xl font-extrabold text-primary group-hover:text-white">
            144+
          </h1>
          <p className=" text-xl font-bold mt-5 group-hover:text-white">
            Completes Projects
          </p>
        </div>
        <div className=" md:w-[30%] bg-white shadow-lg flex justify-center flex-col items-center rounded-md px-6 py-6 group hover:bg-primary">
          <h1 className=" text-4xl font-extrabold text-primary group-hover:text-white">
            144+
          </h1>
          <p className=" text-xl font-bold mt-5 group-hover:text-white">
            Completes Projects
          </p>
        </div>
        <div className=" md:w-[30%] bg-white shadow-lg flex justify-center flex-col items-center rounded-md px-6 py-6 group hover:bg-primary">
          <h1 className=" text-4xl font-extrabold text-primary group-hover:text-white">
            144+
          </h1>
          <p className=" text-xl font-bold mt-5 group-hover:text-white">
            Completes Projects
          </p>
        </div>
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

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;
const AppContainer = styled.div`
  width: 100%;
  color: #000000;
  overflow-x: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;

  @media (max-width: 768px) {
    width: 1200px;
  }
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );

  &:hover ${MarqueeGroup} {
    animation-play-state: paused;
  }
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 20vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 10vmin, 30rem) / 10);
`;

const Images = styled.img`
  object-fit: contain;

  border-radius: 0.5rem;
  aspect-ratio: 16/9;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
