import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsCart3, BsSuitHeart, BsSearch } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
export const navLinks = [
  { name: "Home", to: "/" },
  { name: "Services", to: "/#services" },
  { name: "Partenaires", to: "/#partenaires" },
  { name: "About Me", to: "/#apropos" },
  { name: "Flow", to: "/#flow" },
  { name: "Temoignage", to: "/#testimony" },
  { name: "PortFolio", to: "/#portfolio" },
  { name: "Talk Me", to: "/#task" },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const handleNavigate = () => {
    setIsOpen(false);
  };
  return (
    <div className={`top-0 w-full  h-[90px] z-40 sticky bg-base`}>
      {/* <ScrollToHashElement /> */}
      <div className="flex justify-between items-center h-full px-4">
        <h1 className="flex items-center text-lg font-bold underline underline-offset-8 text-white">
          <Link href="/">
            <Image
              src="/logo4.png"
              alt="logo"
              width={1080}
              height={1080}
              className=" md:w-40 w-20"
            />
          </Link>
        </h1>
        <nav className="hidden md:flex items-center gap-6 text-white text-bold text-lg ">
          {navLinks.map(({ name, to }) => (
            <Link
              key={name + to}
              href={to}
              className="text-white hover:text-light"
            >
              {name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center   text-white text-xl bg-light p-3 rounded-full border-light hover:bg-base border-2 hover:border-light focus:outline-none justify-center align-middle">
            <a
              href="https://wa.me/237681415723?text=Bonjour+*Dr.+Vegas*+depuis+votre+site"
              className="flex items-center"
              target="_blank"
            >
              Contacter
              <BsCart3 className="ml-2" />
            </a>
          </div>
          {/* <div className="rounded"></div> */}
        </div>

        <div className=" pr-2 md:hidden">
          {isOpen ? (
            <MdOutlineClose
              className="text-white font-bold text-xl w-7"
              onClick={handleIsOpen}
            />
          ) : (
            <FiMenu
              className="text-white font-bold text-xl w-7"
              onClick={handleIsOpen}
            />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="bg-base p-4 z-40 absolute w-full md:hidden  ">
          <ul className=" flex flex-col items-start gap-4 text-white text-lg">
            {navLinks.map(({ name, to }) => (
              <Link key={name + to} href={to}>
                <span onClick={handleNavigate}>{name}</span>
              </Link>
            ))}
          </ul>
          <div className="mt-4 md:hidden flex items-center justify-between gap-6">
            <div className="flex items-center   text-white text-xl bg-light p-3 rounded-full hover:bg-base hover:text-black focus:outline-none justify-center align-middle">
              <a
                href="https://wa.me/237677899380?text=Bonjour+*max+Design*+depuis+votre+site"
                target="_blank"
                className="flex"
              >
                Contacter
                <BsCart3 />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
