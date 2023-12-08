"use client";
import React from "react";
import Marquee from "react-fast-marquee";

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
      <hr className=" w-full border-gray opacity-30 my-10" />

      <div className="">
        <Marquee
          direction="left"
          speed={100}
          pauseOnHover={true}
          play={false}
          className=" mb-10 w-[90%] py-2"
        >
          <div className=" text-6xl font-extrabold ml-10 bg-primary5">Logo</div>
          <div className=" text-6xl font-extrabold ml-10 bg-primary5">Logo</div>
          <div className=" text-6xl font-extrabold ml-10 bg-primary5">Logo</div>
          <div className=" text-6xl font-extrabold ml-10 bg-primary5">Logo</div>
          <div className=" text-6xl font-extrabold ml-10 bg-primary5">Logo</div>
          <div className=" text-6xl font-extrabold ml-10 bg-primary5">Logo</div>
          <div className=" text-6xl font-extrabold ml-10 bg-primary5">Logo</div>
          <div className=" text-6xl font-extrabold ml-10 bg-primary5">Logo</div>
          <div className=" text-6xl font-extrabold ml-10 bg-primary5">Logo</div>
        </Marquee>
      </div>
    </div>
  );
};

export default Statistique;
