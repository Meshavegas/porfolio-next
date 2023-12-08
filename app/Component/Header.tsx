"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { RiMailSendFill } from "react-icons/ri";

const navLinks = [
  { name: "About Me", to: "/#about-us" },
  { name: "Project", to: "/#projects" },
  { name: "Clients", to: "/#clients" },
  { name: "Blog", to: "/#blog" },
  { name: "Contacts", to: "/#contacts" },
];
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="sticky top-0 w-full h-[80px] z-40 shadow font-b93 text-2xl bg-white">
      {/* <ScrollToHashElement /> */}
      <div className="flex justify-between items-center h-full px-10">
        <h1 className="flex items-center text-lg font-bold  text-light">
          <Link href="/" className="flex gap-4 items-center ">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={180}
              className=" aspect-video"
            />
            <h1 className=" text-xl md:text-4xl font-bold text-primary">
              Dr. Vegas
            </h1>
          </Link>
        </h1>
        <nav className="hidden lg:flex items-center gap-6 text-primary text-bold text-xl ">
          {navLinks.map(({ name, to }) => (
            <Link
              key={name + to}
              href={to}
              className=" text-primary hover:text-light"
            >
              {name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center   text-white text-xl bg-light px-6 py-3 rounded-full hover:bg-orange hover:text-white focus:outline-none justify-center align-middle w-full">
            <a
              href="https://wa.me/237694673624?text=Bonjour+*Impact+co*+Jai+besoin+de+vos+service+impact.com"
              className="flex items-center gap-3 group"
              target="_blank"
            >
              <RiMailSendFill className=" text-white w-7 h-7 group-hover:text-primary" />
              <span className=" group-hover:text-primary">Hire Me</span>
            </a>
          </div>
          <div className="rounded"></div>
        </div>

        <div className=" pr-2 lg:hidden">
          {isOpen ? (
            <XMarkIcon
              className="text-light font-bold text-xl w-7"
              onClick={handleIsOpen}
            />
          ) : (
            <Bars3Icon
              className="text-light font-bold text-xl w-7"
              onClick={handleIsOpen}
            />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="bg-white p-4 z-40 absolute w-full lg:hidden  flex flex-col justify-center items-center">
          <ul className=" flex flex-col items-center gap-4 justify-center font-postreg">
            {navLinks.map(({ name, to }) => (
              <Link
                key={name + to}
                href={to}
                onClick={() => setIsOpen(false)}
                className="text-primary hover:text-orange text-center "
              >
                {name}
              </Link>
            ))}
          </ul>
          <div className="mt-4 md:hidden flex items-center justify-between gap-6 w-fit">
            <div className="flex items-center w-full   text-white text-xl bg-light px-6 py-3 rounded-full hover:bg-orange focus:outline-none justify-center align-middle">
              <a
                href="https://wa.me/237694673624?text=Bonjour+*Impact+co*+Jai+besoin+de+vos+service+impact.com"
                target="_blank"
                className=" flex items-center gap-3 group"
              >
                <RiMailSendFill className=" text-white w-7 h-7 group-hover:text-primary" />
                <span className=" group-hover:text-primary">Hire Me</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
