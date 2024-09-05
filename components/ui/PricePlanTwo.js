import { rubik } from "@/app/fonts";
import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoScanCircleOutline } from "react-icons/io5";
import { MdAutoMode } from "react-icons/md";

const PricePlanTwo = ({ title, icon, price }) => {
  return (
    <div className=" group relative rounded-[20px] pt-[41px] px-[45px] pb-9 border-[3px] border-dashed border-primary mb-[30px] transition-all ease-in-out duration-400">
      <div className="w-24 h-24 leading-[110px] text-[40px] bg-primary text-white flex justify-center items-center mb-10 relative z-[3] transition-all ease-in-out duration-400 rounded-[70%_30%_30%_70%/_70%_70%_30%_30%] group-hover:rounded-[30%_70%_70%_30%/_30%_30%_70%_70%]">
        {icon}
      </div>
      <h3
        className={`${rubik.className} text-4xl leading-[40px] mb-5 font-bold`}
      >
        {title}
      </h3>
      <h2
        className={`${rubik.className} text-5xl leading-[.8] font-medium text-[#191919] mb-[30px] relative z-[3] transition-all ease-in-out duration-400`}
      >
        <sup className="currency text-[14px] mr-[10px] -top-6 left-0">US$</sup>
        {price}
        <sup className="m-0 text-lg left-[6px] -top-[21px]">.99</sup>
      </h2>
      <ul className="mb-[23px]">
        <li className="flex items-center gap-[10px] text-lg text-[#191919] font-normal leading-[38px]">
          <FaCheckCircle className="text-primary" />
          Strategy &amp; Research
        </li>
        <li className="flex items-center gap-[10px] text-lg text-[#191919] font-normal leading-[38px]">
          <FaCheckCircle className="text-primary" />
          Small social media package
        </li>
        <li className="flex items-center gap-[10px] text-lg text-[#191919] font-normal leading-[38px]">
          <FaCheckCircle className="text-primary" /> Unlimited Fonts
        </li>
        <li className="flex items-center gap-[10px] text-lg text-[#191919] font-normal leading-[38px]">
          <FaCheckCircle className="text-primary" /> Free Fixes &amp; Updates
        </li>
        <li className="flex items-center gap-[10px] text-lg text-[#191919] font-normal leading-[38px]">
          <FaCheckCircle className="text-primary" /> Unlimited Fonts
        </li>
      </ul>
      <div className="relative mt-10 ">
        <Link
          href=""
          className={`${rubik.className} h-[50px]    flex items-center text-[15px] leading-[.8] text-white overflow-hidden relative z-[1] text-center capitalize font-medium w-[170px]  bg-primary py-[30px] px-[24px] cursor-pointer rounded-full transform  transition-all duration-400 hover:text-white before:content-[''] before:w-0 before:h-full before:absolute before:right-0  before:left-auto before:top-0  before:-z-[1] before:bg-secondary before:transition-width before:duration-400 before:ease-custom-ease before:delay-0  hover:before:w-full hover:before:left-0 hover:before:right-auto to_left`}
        >
          buy now <IoScanCircleOutline size={20} className="ml-7" />
        </Link>
      </div>
    </div>
  );
};

export default PricePlanTwo;
