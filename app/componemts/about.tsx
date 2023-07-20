import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { Title } from "./small/title";

export const About = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-3 py-20 bg-cover px-4 bg-story-image md:px-20">
      <div className="div">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque omnis
        reiciendis id? Officia itaque dignissimos cumque, nesciunt tempora nihil
        delectus perspiciatis odit facilis, quidem enim quis vitae, suscipit
        repellat. Numquam quis sapiente inventore tempore quibusdam cupiditate
        obcaecati quam ipsum accusamus facilis veniam earum, esse nam minus quia
        aspernatur officiis necessitatibus.
      </div>
      <div className="grid grid-cols-1">
        <Title title="About Me" isCenter="center" />

        <div className="text-4xl font-bold justify-center">
          Programer un produit, pas juste une application
        </div>
        <div className="text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          deleniti voluptates aperiam eaque molestiae dolorem saepe
          exercitationem, dolor repellendus delectus nobis ipsam illum. Officia
          sed beatae, iure illo minus voluptates!
        </div>
        <div className=" bg-light flex gap-4 flex-row p-3 rounded-md mt-2">
          <BsArrowRightCircle className="text-white w-7" size="2rem" />
          <div className="text-2xl ml-4">
            <h1 className="text-2xl font-extrabold">5 Projects complets</h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
            sunt.
          </div>
        </div>
        <div className=" bg-light flex gap-4 flex-row p-3 rounded-md mt-2">
          <BsArrowRightCircle className="text-white w-7" size="2rem" />
          <div className="text-2xl ml-4">
            <h1 className="text-2xl font-extrabold">5 Projects complets</h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
            sunt.
          </div>
        </div>
        <div className="bg-light px-3 py-2 rounded-2xl text-white cursor-pointer  w-fit mt-4">
          Telecharger mon CV
        </div>
      </div>
    </div>
  );
};
