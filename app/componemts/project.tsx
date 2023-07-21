import React from "react";
import { Title } from "./small/title";
import { getIllustration, getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

export const Project = async () => {
  const projects = await getProjects();
  console.log(projects[0].techno);

  return (
    <div
      className="px-4 md:px-40 py-20 bg-white bg-cover flex flex-col justify-center"
      id="portfolio"
    >
      <div className="">
        <Title title="PortFolio" isCenter="center" />
        <div className="text-3xl text-center">
          Presentoire des project realiser
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-col gap-3 justify-center md:flex-row ">
          <div className="text-2xl rounded-lg bg-base px-2 py-1 text-white">
            All
          </div>
          <div className="text-2xl rounded-lg border-base hover:bg-base hover:cursor-pointer border px-2 py-1">
            Web
          </div>
          <div className="text-2xl rounded-lg border-base hover:bg-base hover:cursor-pointer border px-2 py-1">
            Mobile
          </div>
        </div>
        <div className="project mt-4 flex md:flex-row md:flex-wrap flex-col gap-4 justify-center">
          {/* 1st card */}
          {projects.map((project) => (
            <div
              key={project.slug}
              className="bg-gray w-full md:w-1/3 flex flex-col justify-between items-center rounded-xl pt-4   mt-4 ml-0 "
            >
              <div className="flex justify-center items-center px-3">
                {project.image && (
                  <Image
                    src={project.image[0].asset.url}
                    width={1000}
                    height={1000}
                    alt={project.name}
                    className=" h-full"
                  />
                )}
              </div>
              <div className="bg-white flex flex-row w-full justify-between items-center px-2 py-1 border-b-2 border-l-2 border-r-2 rounded-b-xl border-base mt-4">
                <div className="">
                  <div className="text-4xl font-extrabold">{project.name}</div>
                  <p className="text-lg text-light font-extrabold">
                    [
                    {project.techno.map((tech) => (
                      <span key={tech}>{tech},</span>
                    ))}
                    ]
                  </p>
                </div>
                <a
                  href={project.url}
                  className="rounded-full bg-base p-4 w-50 h-50 hover:cursor-pointer hover:border-light hover:border"
                >
                  <BsArrowUpRight
                    size={20}
                    className=" text-center text-white w-full h-full text-4xl font-extrabold"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
