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
          Embark on a journey through the boundless realm of technological
          versatility with us. I am more than just a developer – I am a digital
          architect, an experience creator, and an unwavering problem solver.
          From intuitive design to robust code, I seamlessly blend aesthetics
          with functionality, sculpting innovative solutions with every line of
          code. Welcome to a world where versatility becomes a technological
          masterpiece. Together, let's push the boundaries of what's possible.
        </p>
        <button className=" mt-10 bg-secondary rounded-full px-6 py-3 text-white text-xl">
          Let&lsquo;s Talk!
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
