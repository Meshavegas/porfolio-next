import React from "react";
import Link from "next/link";
const navLinks = [
  { name: "About Me", to: "/#about-us" },
  { name: "Project", to: "/#projects" },
  { name: "Clients", to: "/#clients" },
  { name: "Blog", to: "/#blog" },
  { name: "Contacts", to: "/#contacts" },
];
const Footer = () => {
  return (
    <div className=" text-2xl justify-center flex gap-4 md:gap-10 py-5 bg-primary2 flex-col md:flex-row items-center">
      {navLinks.map(({ name, to }) => (
        <Link
          key={name + to}
          href={to}
          className=" text-white hover:text-light"
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default Footer;
