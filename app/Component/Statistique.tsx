import React from "react";

const Statistique = () => {
  return (
    <div className=" bg-whited flex flex-col justify-center items-center">
      <div className="w-[30%]">
        <p className=" text-4xl leading-10 text-center text-primary">
          <span className=" text-5xl font-extrabold"> 04+ </span>
          leading brands have chosen us since 2023
        </p>
      </div>
      <hr className=" w-full border-gray opacity-30 my-10" />
      <div className="w-[60%] flex justify-between">
        <div className=" w-[30%] bg-white shadow-lg flex justify-center flex-col items-center rounded-md px-6 py-6 group hover:bg-primary cursor-default">
          <h1 className=" text-4xl font-extrabold text-primary group-hover:text-white">
            144+
          </h1>
          <p className=" text-xl font-bold mt-5 group-hover:text-white">
            Completes Projects
          </p>
        </div>
        <div className=" w-[30%] bg-white shadow-lg flex justify-center flex-col items-center rounded-md px-6 py-6 group hover:bg-primary">
          <h1 className=" text-4xl font-extrabold text-primary group-hover:text-white">
            144+
          </h1>
          <p className=" text-xl font-bold mt-5 group-hover:text-white">
            Completes Projects
          </p>
        </div>
        <div className=" w-[30%] bg-white shadow-lg flex justify-center flex-col items-center rounded-md px-6 py-6 group hover:bg-primary">
          <h1 className=" text-4xl font-extrabold text-primary group-hover:text-white">
            144+
          </h1>
          <p className=" text-xl font-bold mt-5 group-hover:text-white">
            Completes Projects
          </p>
        </div>
      </div>
      <hr className=" w-full border-gray opacity-30 my-10" />

      <div className=" mb-10 flex justify-between w-[70%]">
        <div className=" text-6xl font-extrabold">Logo</div>
        <div className=" text-6xl font-extrabold">Logo</div>
        <div className=" text-6xl font-extrabold">Logo</div>
        <div className=" text-6xl font-extrabold">Logo</div>
        <div className=" text-6xl font-extrabold">Logo</div>
      </div>
    </div>
  );
};

export default Statistique;
