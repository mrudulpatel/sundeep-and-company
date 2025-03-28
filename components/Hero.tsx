"use client";
import { navItems } from "@/constant";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative w-full h-full">
      {/* Video for larger screens */}
      <div className="hidden md:block absolute w-full h-screen overflow-hidden">
        <video
          width="100%"
          height="100%"
          className="h-screen w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Background Gradient (visible on mobile) */}
      <div className="md:hidden w-full h-full bg-gradient-to-b from-[#0b3c9e] to-[#032E61] absolute top-0 left-0" />
      <div className="absolute h-screen inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative text-white w-full h-full flex flex-col">
        {/* Navbar */}
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
          <button className="bg-[#0b3d9e] transition duration-100 ease-in rounded px-6 py-2 md:px-10 md:py-[10px] hover:bg-[#032E61]">
            Contact Us
          </button>
        </div>

        {/* Hero Text */}
        <div className="flex flex-col items-center justify-center text-center px-4 md:px-0 min-h-[550px] h-auto">
          <p className="text-sm md:text-base text-[#ffffffcc] mb-4">
            Building better, together.
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
            Your reliable partner in
            <br /> construction.
          </h1>
          <button className="bg-[#0b3d9e] transition duration-100 ease-in rounded px-8 py-2 md:px-12 md:py-[10px] hover:bg-[#032E61]">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
