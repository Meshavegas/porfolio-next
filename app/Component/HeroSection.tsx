import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section
      id="hero"
      className=" h-fit lg:h-[90vh] bg-gradient-to-r from-primary4 via-primary4 to-primary2 flex flex-col lg:flex-row  justify-center items-center gap-10"
    >
      <div className=" lg:w-1/3 w-[90%] mt-10 lg:mt-0">
        <h1 className=" text-4xl font-bold text-white uppercase">
          Work better, faster, Together
        </h1>
        <p className=" text-xl text-justify mt-10 leading-10 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam a
          reiciendis sed deserunt vitae error doloribus omnis neque? Rerum,
          excepturi hic. Fugiat necessitatibus enim consequuntur ad consectetur
          minima quibusdam omnis
        </p>
        <button className=" mt-10 bg-secondary rounded-full px-6 py-3 text-white text-xl">
          Let's Talk!
        </button>
      </div>
      <div className="lg:w-1/3 w-[90%] mb-32 lg:mb-0 ">
        <Image
          src="/hero1.webp"
          alt="logo"
          width={1080}
          height={1080}
          className=" "
        />
      </div>
    </section>
  );
};

export default HeroSection;
