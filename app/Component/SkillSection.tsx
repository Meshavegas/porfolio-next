import React from "react";

const SkillSection = () => {
  return (
    <div>
      <h1 className=" text-3xl font-bold text-center capitalize">My Skills</h1>
      <div className=" flex gap-10 mt-10 flex-col md:flex-row">
        <div className=" bg-white py-3 px-6 rounded-xl shadow">
          <div className=" flex justify-between">
            <div className=" w-12 h-12 bg-secondary flex justify-center items-center border-2 border-dashed border-light-grey rounded-full">
              <h3 className=" text-xl text-light-grey font-bold ">01</h3>
            </div>
            <div className="h-36 w-36 bg-primary">image</div>
          </div>
          <div className="">
            <h2 className=" text-2xl font-bold text-primary">
              Full Stack Developeur
            </h2>
            <p className=" text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum non
              labore nam quae omnis totam repudiandae iste obcaecati odio nisi.
            </p>
          </div>
        </div>
        <div className=" bg-white py-3 px-6 rounded-xl shadow">
          <div className=" flex justify-between">
            <div className=" w-12 h-12 bg-secondary flex justify-center items-center border-2 border-dashed border-light-grey rounded-full">
              <h3 className=" text-xl text-light-grey font-bold ">02</h3>
            </div>
            <div className="h-36 w-36 bg-primary">image</div>
          </div>
          <div className="">
            <h2 className=" text-2xl font-bold text-primary">
              Full Stack Developeur
            </h2>
            <p className=" text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum non
              labore nam quae omnis totam repudiandae iste obcaecati odio nisi.
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-5 bg-white py-3 px-6 rounded-xl shadow">
        <div className=" flex justify-between flex-wrap">
          <div className=" w-12 h-12 bg-secondary flex justify-center items-center border-2 border-dashed border-light-grey rounded-full">
            <h3 className=" text-xl text-light-grey font-bold ">03</h3>
          </div>
          <h2 className=" text-2xl font-bold text-primary capitalize">
            Programing language
          </h2>
        </div>
        <ul className=" mt-10 flex justify-between flex-wrap gap-2">
          <li className="w-20 h-20 bg-primary rounded-lg flex justify-center items-center">
            HTML5
          </li>
          <li className=" w-20 h-20 bg-primary rounded-lg flex justify-center items-center">
            HTML5
          </li>
          <li className=" w-20 h-20 bg-primary rounded-lg flex justify-center items-center">
            HTML5
          </li>
          <li className=" w-20 h-20 bg-primary rounded-lg flex justify-center items-center">
            HTML5
          </li>
          <li className=" w-20 h-20 bg-primary rounded-lg flex justify-center items-center">
            HTML5
          </li>
          <li className=" w-20 h-20 bg-primary rounded-lg flex justify-center items-center">
            HTML5
          </li>
          <li className=" w-20 h-20 bg-primary rounded-lg flex justify-center items-center">
            HTML5
          </li>
          <li className=" w-20 h-20 bg-primary rounded-lg flex justify-center items-center">
            HTML5
          </li>
        </ul>
      </div>
      <div className=" mt-5 bg-white py-3 px-6 rounded-xl shadow">
        <div className=" flex justify-between flex-wrap">
          <div className=" w-12 h-12 bg-secondary flex justify-center items-center border-2 border-dashed border-light-grey rounded-full">
            <h3 className=" text-xl text-light-grey font-bold ">04</h3>
          </div>
          <h2 className=" text-2xl font-bold text-primary capitalize">
            Frameworks
          </h2>
        </div>
        <ul className=" mt-10 flex justify-between flex-wrap gap-2">
          <li className=" w-20 h-20 bg-primary rounded-lg flex justify-center items-center">
            HTML5
          </li>
          <li className=" w-20 h-20 bg-primary rounded-lg flex justify-center items-center">
            HTML5
          </li>
          <li className=" w-20 h-20 bg-primary rounded-lg flex justify-center items-center">
            HTML5
          </li>
          <li className=" w-20 h-20 bg-primary rounded-lg flex justify-center items-center">
            HTML5
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SkillSection;
