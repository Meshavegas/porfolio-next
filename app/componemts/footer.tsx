import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./Navbar";

export const Footer = () => {
  return (
    <div className="bg-gray flex md:flex-row flex-col md:px-20 px-4  align-bottom md:justify-between justify-center items-center -mt-2 -mb-2">
      <div className=" ">
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
      <nav className="flex items-center gap-6 text-white text-bold text-2xl mx-10 md:flex-row flex-col">
        {navLinks.map(({ name, to }) => (
          <Link key={name + to} href={to} className="text-white">
            {name}
          </Link>
        ))}
      </nav>
    </div>
  );
};
