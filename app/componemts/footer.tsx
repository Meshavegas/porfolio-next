import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./Navbar";

export const Footer = () => {
  return (
    <div className="bg-gray flex flex-col md:px-20 px-4 md:flex-row align-bottom justify-between w-full">
      <div className="bg-gray mx-10 ">
        <Link href="/">
          <Image
            src="/logo4.png"
            alt="logo"
            width={150}
            height={70}
            className=" rounded-sm"
          />
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-white text-bold text-2xl mx-10  md:flex-row flex-col ">
        {navLinks.map(({ name, to }) => (
          <Link key={name + to} href={to} className="text-white">
            {name}
          </Link>
        ))}
      </nav>
    </div>
  );
};
