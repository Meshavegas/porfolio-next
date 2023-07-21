import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import Title from "./small/title";
import { getIllustration } from "@/sanity/sanity-utils";
import Image from "next/image";

export const About = async () => {
  const aboutImage = await getIllustration("about-me");
  return (
    <div
      id="apropos"
      className="flex flex-col-reverse lg:flex-row gap-3  py-20 md:py-40 bg-cover px-4 bg-base-light md:px-20 items-center justify-center"
    >
      <div className="w-full md:w-1/2 flex justify-center">
        {aboutImage && (
          <Image
            src={aboutImage.image}
            width={1000}
            height={1000}
            alt={aboutImage.name}
            className=" w-3/4"
          />
        )}
      </div>
      <div className="w-full md:w-1/2 grid grid-cols-1">
        <Title title="About Me" align="center" />

        <div className="text-4xl font-bold justify-center">
          Programer un produit, pas juste une application
        </div>
        <div className="text-black text-xl">
          Je suis convaincu que la programmation d&apos;un produit ne consiste
          pas simplement à créer une application qui fonctionne. Il s&apos;agit
          de créer un produit qui est utile, attrayant et durable. Il
          s&apos;agit de créer un produit qui a un impact positif sur le monde.
        </div>
        <div className=" bg-light flex flex-row p-3 rounded-md mt-2 justify-start items-start">
          <div className="w-30 mr-4">
            <BsArrowRightCircle className="text-white" size={30} />
          </div>
          <div className="text-2xl">
            <h1 className="text-2xl font-extrabold">6 Projets Terminer</h1>
            J&apos;ai participé à plus de 6 projets, en collaboration avec mon
            équipe et avec le soutien précieux de mes collègues seniors.
          </div>
        </div>
        <div className=" bg-light flex flex-row p-3 rounded-md mt-2 justify-start items-start">
          <div className="w-30 mr-4">
            <BsArrowRightCircle className="text-white " size={30} />
          </div>
          <div className="text-2xl">
            <h1 className="text-2xl font-extrabold">
              1+ ans expérience dans le développement web et mobile.
            </h1>
            Je suis un développeur motivé, avec plus d&apos;un an
            d&apos;expérience. Je suis toujours à la recherche de nouveaux défis
            et j&apos;apprends toujours de nouvelles choses.
          </div>
        </div>
        <div className="bg-light px-3 py-2 rounded-3xl text-white cursor-pointer items-center justify-center  w-fit mt-4 text-3xl md:text-4xl font-extrabold flex flex-row">
          Telecharger mon CV{" "}
          <AiOutlineDownload className="text-white ml-4" size={50} />
        </div>
      </div>
    </div>
  );
};
