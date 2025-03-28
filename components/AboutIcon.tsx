import Image from "next/image";
import React from "react";

const AboutIcon = () => {
  return (
    <div className="w-[110px] h-[110px]">
      <div className="size-full">
        <Image src={"/logo.png"} width={110} height={110} alt="logo" />
      </div>
    </div>
  );
};

export default AboutIcon;
