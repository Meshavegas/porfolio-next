import React from "react";
import Image from "next/image";

const ProjectsScetion = () => {
  return (
    <div>
      <h1 className=" text-3xl font-extrabold text-primary text-center">
        Our Recent Projects
      </h1>
      <div className=" flex flex-wrap gap-10 mt-10">
        <div className=" w-1/3 bg-white2 px-6 py-6 rounded-xl">
          <div className=" overflow-hidden w-ful">
            <Image
              src="/infographie.png"
              width={1080}
              height={1080}
              alt=""
              className=" transform   h-[15em] object-cover rounded-2xl hover:scale-150 transition duration-500"
            />
          </div>
          <div className=" mt-5">
            <h1 className=" text-2xl font-bold">Plateforme de e-commerce</h1>
            <div className=" mt-5 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              voluptas eum debitis similique dignissimos labore alias
              laudantium, accusamus nemo tempore ipsa ipsum sunt?
            </div>
            <button className=" mt-5 capitalize outline outline-secondary rounded-full px-6 py-2 hover:bg-secondary hover:text-white hover:outline-none">
              View Project
            </button>
          </div>
        </div>
        <div className="w-1/3">
          <div className=" overflow-hidden w-full">
            <Image
              src="/infographie.png"
              width={1080}
              height={1080}
              alt=""
              className=" transform   h-[15em] object-cover rounded-2xl hover:scale-150 transition duration-500"
            />
          </div>
          <div className="">
            <h1>Plateforme de e-commerce</h1>
            <div className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              voluptas eum debitis similique dignissimos labore alias
              laudantium, accusamus nemo tempore ipsa ipsum sunt?
            </div>
            <button>View Project</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsScetion;
