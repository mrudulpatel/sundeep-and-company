import React from "react";

const KeyServicesCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col w-full p-12 border-2 border-[#90b2f2] rounded-xl transition ease-in duration-200 hover:bg-[#90b2f2]">
      <h3 className="text-2xl font-bold text-center py-5">{title}</h3>
      <p className="text-base text-left leading-6">{description}</p>
    </div>
  );
};

export default KeyServicesCard;
