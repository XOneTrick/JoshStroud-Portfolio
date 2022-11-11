import React from "react";

const AboutCard = ({ item, local }) => {
  return (
    <div className="about-box bg-color-810 dark:bg-[#2f2e2e]">
      <img className="w-10 h-10 object-contain  block" src={item.icon} alt="" />

      <div className="space-y-2">
        <h3 className="dark:text-white text-2xl font-semibold">
          {item?.title}
        </h3>
        <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
          {item?.des}
        </p>
      </div>
    </div>
  );
};
export default AboutCard;
