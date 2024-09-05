import Link from "next/link";
import React from "react";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";

const Services = ({ title, icon }) => {
  return (
    <div className="">
      <Link
        href=""
        className="service-item-02 w-full inline-block relative z-[2] bg-[#223058] rounded-[10px] py-9 px-4 mb-[30px] text-center after:absolute after:content-[''] after:left-0 after:bottom-0 after:w-full after:-z-[1] after:h-0 after:opacity-0 after:rounded-[10px] after:invisible after:transform after:transition-all after:ease-linear after:delay-[.1s] after:bg-primary hover:after:h-full hover:after:opacity-1 hover:after:visible"
      >
        <div className=" w-24 h-24 m-auto leading-[90px] text-5xl bg-primary rounded-[50%] text-white text-center flex justify-center items-center mb-[22px] ">
          {icon}
        </div>
        <span className="block text-white text-xl font-medium m-0">
          {title}
        </span>
      </Link>
    </div>
  );
};

export default Services;
