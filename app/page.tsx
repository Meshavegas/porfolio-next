"use client";
import {
  getHero,
  getProjects,
  getServices,
  getTestimony,
} from "@/sanity/sanity-utils";
import { project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import { NavBar } from "./componemts/Navbar";
import { PortableText } from "@portabletext/react";
import {
  BsArrowRightCircle,
  BsFillArrowRightCircleFill,
  BsGearWide,
} from "react-icons/bs";
import { Rating, ThinStar } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Testimony } from "./componemts/textimony";
import { Process } from "./componemts/process";
import { About } from "./componemts/about";
import { Service } from "./componemts/service";
import { Project } from "./componemts/project";
import { NewsLetter } from "./componemts/newsLetters";
import { Footer } from "./componemts/footer";
import { Copyright } from "./componemts/copyright";

export default async function Home() {
  const projects = await getProjects();
  const hero = await getHero();

  return (
    <div className="">
      <NavBar />
      <div className="bg-hero-image bg-center bg-cover ">
        <div className=" flex lg:flex-row flex-col pt-1 md:pt-20 justify-center items-center">
          <div className="basis-full md:basis-1/2 md:mt-30 md:mx-20 mt-3 mx-2">
            <h1 className="md:text-5xl font-extrabold text-white flex flex-wrap text-3xl">
              Hello, I'am Mesha vegas An Mobile and Web Developer
            </h1>
            <div className="mt-4 text-2xl text-white text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              eaque repellendus quod facere vero, in hic, ex minus temporibus
              distinctio nisi perferendis veritatis? Explicabo, laborum rem!
              Facere, repellendus. Debitis, dolor.
            </div>
            <div className=" w-fit mt-2">
              <div className="bg-light text-3xl px-3 py-4 text-white flex flex-row rounded-2xl justify-center align-middle hover:bg-base hover:text-white cursor-pointer">
                Me Contacter{" "}
                <BsFillArrowRightCircleFill className="ml-4 mt-2" />
              </div>
            </div>
          </div>
          <div className="md:basis-1/2 basis-full  lg:flex md:mt-0 mt-5 mx-2">
            <Image
              src={hero.image}
              width={1000}
              height={1000}
              alt={hero.name}
              className="w-full"
            />
          </div>
        </div>

        {/* Hero Section */}
      </div>
      <Service />
      <About />
      <Process />
      <Testimony />
      <Project />
      <NewsLetter />
      <Footer />
      <Copyright />
    </div>
  );
}
