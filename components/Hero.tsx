"use client";

import Navbar from "./Navbar";

const Hero = () => {
  

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
      {/* Background Image for mobile */}
      <div
        className="md:hidden h-screen absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpeg')" }}
      ></div>
      {/* Background Gradient (visible on mobile) */}

      <div className="absolute h-screen inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative text-white w-full h-full flex flex-col">
        <Navbar />

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
