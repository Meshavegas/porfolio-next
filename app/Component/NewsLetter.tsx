"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import { sendMail } from "./_actions";
import { compileWelcomeTemplate } from "@/lib/compile";

const NewsLetter = () => {
  // const form = useForm()
  const [datas, setDatas] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatas({
      ...datas,
      [e.target.name]: e.target.value,
    });
  };
  const handleChange2 = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDatas({
      ...datas,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dat = {
      ...datas,
      body: compileWelcomeTemplate(datas?.userName, "meshavegas.com"),
    };
    const response = await sendMail(dat);
  };
  return (
    <div className="flex justify-between flex-wrap py-5">
      <div className=" w-full md:w-[30%] flex flex-col items-center">
        <Link href="/" className="">
          <Image
            src="/logo4.png"
            alt="logo"
            width={300}
            height={300}
            className=" aspect-video"
          />
        </Link>
        <div className=" flex flex-col gap-4 mt-5">
          <h1 className=" text-2xl text-light-100 ">Start New Project</h1>
          <h2 className=" text-white font-bold">
            Email : <span className=" font-light">Meshavegas@gmail.com</span>
          </h2>
          <h2 className=" text-white font-bold">
            Phone :{" "}
            <span className=" font-light">
              +237 681 41 57 23 | +237 694 34 83 68
            </span>
          </h2>
          <h2 className=" text-white font-bold">
            Adress :{" "}
            <span className=" font-light">
              Bonamoussadi, Vallee commissariat
            </span>
          </h2>
        </div>
      </div>
      <div className=" w-full md:w-[65%] flex flex-col mt-5">
        <form onSubmit={handleSubmit}>
          <div className=" flex justify-between">
            <input
              type="text"
              placeholder="Write your name"
              className="bg-transparent text-white border-b w-[45%] focus:outline-none"
              name="userName"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Write your Email"
              className="bg-transparent text-white border-b w-[45%] focus:outline-none"
              name="email"
              onChange={handleChange}
            />
          </div>
          <textarea
            name="content"
            className="mt-10 w-full h-64 bg-primary2 focus:bg-light-200 focus:opacity-80 focus:outline-none p-3 rounded opacity-70 "
            onChange={handleChange2}
          ></textarea>

          <br />
          <button
            type="submit"
            className="mt-5 flex gap-5 items-center text-whited hover:text-secondary"
          >
            Send Now <IoMdArrowForward className=" text-xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
