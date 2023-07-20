import React from "react";
import { BsGearWide } from "react-icons/bs";
import { Title } from "./small/title";

export const Process = () => {
  return (
    <div className="mx-4 md:px-20">
      <Title title="Process" isCenter="center" />
      <h1 className="text-4xl font-extrabold text-center">
        Mon proccesus de traivail
      </h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex flex-col">
          <div className="border rounded-full border-light border-dashed p-2 w-fit">
            <div className=" bg-base w-fit p-3 rounded-full ">
              <BsGearWide size="2.5rem" color="white" />
            </div>
          </div>
          <p>Choix du projet et analyse des besoins.</p>
          <div className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dicta
            magnam corporis voluptate odit est commodi doloremque praesentium
            autem pariatur?
          </div>
        </div>
      </div>
    </div>
  );
};
