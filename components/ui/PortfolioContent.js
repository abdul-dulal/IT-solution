import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const PortfolioContent = ({ tech, title }) => {
  return (
    <div
      style={{ width: "calc(100% - 30px)" }}
      class=" relative shadow-sm -top-11 left-4 bg-white rounded-[5px] pt-[23px] pr-[70px] pb-4 pl-5 "
    >
      <p class="relative text-primary text-lg font-normal hover:text-[#191919] mb-[2px]">
        <Link href="">{tech}</Link>
      </p>
      <h5 class="inline-block text-[#191919] hover:text-primary capitalize text-lg font-bold">
        <Link href="">{title}</Link>
      </h5>
      <Link
        href=""
        className="inline-block w-11 h-11 bg-[rgba(104,110,226,0.1)] text-primary text-base rounded-[3px] leading-[47px] text-center absolute top-0 bottom-0 right-5 m-auto hover:bg-primary hover:text-white"
      >
        <FaArrowRight className="inline-block m-auto" />
      </Link>
    </div>
  );
};

export default PortfolioContent;
