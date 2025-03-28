import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-400 text-white p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold">
              Your Partner in Building Excellence Today
            </h2>
            <p className="text-base mt-4">
              We adapt a uniquely personalized perspective to each project to
              deliver stunning spaces of optimal function. Renowned for our
              architectural understanding and mastery of craftsmanship.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center mt-6 md:mt-0">
            <input
              type="text"
              placeholder="Enter your email address"
              className="px-4 py-3 w-72 rounded-full border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-3 bg-blue-900 rounded-full text-white font-semibold hover:bg-blue-700 transition">
              Enquire
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex flex-row items-center">
            <Image src={"/logo.png"} width={40} height={40} alt="logo" />
            <h3 className="text-lg font-bold ml-3">Sundeep & Company</h3>
          </div>
          <div>
            <h4 className="font-bold">Company</h4>
            <ul className="mt-2 space-y-1">
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Products</h4>
            <ul className="mt-2 space-y-1">
              <li>Coatings</li>
              <li>Admixtures</li>
              <li>Waterproofing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Contact</h4>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="mailto:ncpatel25@gmail.com">
                  ncpatel25@gmail.com
                </Link>
              </li>
              <li>
                <Link href="tel:+919423529900">+91 9423529900</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4 text-sm">
          <p>&copy; {new Date().getFullYear()+1} Sundeep & Company. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
