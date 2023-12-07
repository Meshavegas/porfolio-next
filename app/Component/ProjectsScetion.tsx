import React from "react";
import Image from "next/image";

const ProjectsScetion = () => {
  return (
    <div>
      <h1 className=" text-3xl font-extrabold text-primary text-center">
        Our Recent Projects
      </h1>
      <div className=" flex flex-wrap  mt-10 items-start justify-between">
        <div className=" w-full md:w-[32%] bg-white2 px-6 py-6 rounded-xl shadow-sm my-5 md:my-0">
          <div className=" overflow-hidden w-ful rounded-2xl">
            <Image
              src="/infographie.png"
              width={1080}
              height={1080}
              alt=""
              className=" transform   h-[15em] object-cover rounded-2xl hover:scale-150 transition duration-500"
            />
          </div>
          <div className=" mt-5">
            <h1 className=" text-xl font-bold">Plateforme de e-commerce</h1>
            <div className=" mt-3 text-lg text-justify leading-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              voluptas eum debitis similique dignissimos labore alias
            </div>
            <button className=" mt-5 capitalize outline outline-secondary rounded-full px-6 py-2 hover:bg-secondary hover:text-white hover:outline-none">
              View Project
            </button>
          </div>
        </div>
        <div className=" w-full my-5 md:my-0 md:w-[32%] bg-white2 px-6 py-6 rounded-xl shadow-sm">
          <div className=" overflow-hidden w-ful rounded-2xl">
            <Image
              src="/infographie.png"
              width={1080}
              height={1080}
              alt=""
              className=" transform   h-[15em] object-cover rounded-2xl hover:scale-150 transition duration-500"
            />
          </div>
          <div className=" mt-5">
            <h1 className=" text-xl font-bold">Plateforme de e-commerce</h1>
            <div className=" mt-3 text-lg text-justify leading-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              voluptas eum debitis similique dignissimos labore alias
            </div>
            <button className=" mt-5 capitalize outline outline-secondary rounded-full px-6 py-2 hover:bg-secondary hover:text-white hover:outline-none">
              View Project
            </button>
          </div>
        </div>
        <div className="my-5 md:my-0 w-full md:w-[32%] bg-white2 px-6 py-6 rounded-xl shadow-sm">
          <div className=" overflow-hidden w-ful rounded-2xl">
            <Image
              src="/infographie.png"
              width={1080}
              height={1080}
              alt=""
              className=" transform   h-[15em] object-cover rounded-2xl hover:scale-150 transition duration-500"
            />
          </div>
          <div className=" mt-5">
            <h1 className=" text-xl font-bold">Plateforme de e-commerce</h1>
            <div className=" mt-3 text-lg text-justify leading-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              voluptas eum debitis similique dignissimos labore alias
            </div>
            <button className=" mt-5 capitalize outline outline-secondary rounded-full px-6 py-2 hover:bg-secondary hover:text-white hover:outline-none">
              View Project
            </button>
          </div>
        </div>
        <div className=" my-5 md:my-0 w-full md:w-[32%] bg-white2 px-6 py-6 rounded-xl shadow-sm  md:mt-5">
          <div className=" overflow-hidden w-ful rounded-2xl">
            <Image
              src="/infographie.png"
              width={1080}
              height={1080}
              alt=""
              className=" transform   h-[15em] object-cover rounded-2xl hover:scale-150 transition duration-500"
            />
          </div>
          <div className=" mt-5">
            <h1 className=" text-xl font-bold">Plateforme de e-commerce</h1>
            <div className=" mt-3 text-lg text-justify leading-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              voluptas eum debitis similique dignissimos labore alias
            </div>
            <button className=" mt-5 capitalize outline outline-secondary rounded-full px-6 py-2 hover:bg-secondary hover:text-white hover:outline-none">
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsScetion;
