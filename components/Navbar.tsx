import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 bg-transparent z-[20] w-full flex gap-5 md:justify-between px-60 p-5">
      <h1 className="text-white text-[45px]">
        Ivan <span className="font-thin">Darganov</span>
        <span className="text-red-500">.</span>
      </h1>
      <div className="flex flex-row gap-5">
        {Socials.map((social) => (
          <Link href={social.href || "#"} passHref>
            <Image
              key={social.name}
              src={social.src}
              alt={social.name}
              width={24}
              height={24}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;