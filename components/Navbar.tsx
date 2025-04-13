"use client";
import { navItems } from "@/constant";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="w-full mx-auto flex justify-between items-center px-6 py-4 md:p-7 max-w-7xl">
      <div className="flex items-center space-x-4">
        <Image src="/logo.png" width={40} height={40} alt="logo" />
        <h1 className="text-xl md:text-2xl font-bold hover:text-[#0b3c9e]">
          <Link href="/">Sundeep & Company</Link>
        </h1>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden mx-3 bg-gray-500 rounded-full p-2"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {!menuOpen ? (
          <Menu className="text-2xl size-5" />
        ) : (
          <X className="text-2xl size-5" />
        )}
      </button>

      {/* Dropdown Menu for Mobile */}
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-white text-black rounded-md shadow-lg w-48 flex flex-col p-4 md:hidden">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="py-2 hover:text-[#0b3c9e]"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="uppercase text-sm hover:text-[#0b3c9e]"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Contact Us Button */}
      <button className="bg-[#0b3d9e] text-white transition duration-100 ease-in rounded px-6 py-2 md:px-10 md:py-[10px] hover:bg-[#032E61]">
        Contact Us
      </button>
    </div>
  );
};

export default Navbar;
