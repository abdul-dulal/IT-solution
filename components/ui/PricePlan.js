import { rubik } from "@/app/fonts";
import Link from "next/link";
import React from "react";
import { IoScanCircleOutline } from "react-icons/io5";
const PricePlan = ({ icon, title, price }) => {
  return (
    <div
      style={{ transition: "all ease 0.3s" }}
      className="pricintable-01 group relative bg-[#f0f4f9] rounded-[10px] pt-11 px-5 mb-[60px] text-center after:absolute after:left-0 after:top-0 after:content-[''] after:w-full after:h-full after:rounded-[10px] after:bg-[url('/img/home1/price.jpg')] after:bg-no-repeat after:bg-center after:bg-cover after:z-[1] after:invisible after:opacity-0   before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:rounded-[10px]  before:z-[2] before:invisible before:opacity-0"
    >
      <div class="ib-icon w-24 h-24 leading-[90px] text-[40px] bg-primary rounded-[50%] text-center inline-block mb-10 relative p-[26px] z-[3]">
        <span className="leading-[96px] text-white">{icon}</span>
      </div>
      <h5
        className={`${rubik.class} text-base font-medium text-primary uppercase group-hover:text-white mb-2 relative z-[3]`}
      >
        {title}
      </h5>
      <h2 className="text-5xl  font-medium mb-[18px] text-[#191919] group-hover:text-white relative z-[3] leading-[58px] ">
        ${price}
      </h2>
      <ul className="p-0 mb-2">
        <li
          className={`${rubik.className} block relative z-[3] text-base text-secondary leading-[36px]  before:relative  before:-left-[10px] before:-top-[1px] before:text-primary `}
        >
          2x option 1
        </li>
        <li
          className={`${rubik.className}  block relative z-[3] text-base text-secondary leading-[36px] before:relative  before:-left-[10px] before:-top-[1px] before:text-primary`}
        >
          Free option 2
        </li>
        <li
          className={`${rubik.className} block relative z-[3] text-base text-secondary leading-[36px] before:relative  before:-left-[10px] before:-top-[1px] before:text-primary`}
        >
          limited option 3
        </li>
        <li
          className={`${rubik.className} block relative z-[3] text-base text-secondary leading-[36px] before:relative  before:-left-[10px] before:-top-[1px] before:text-primary`}
        >
          Unlimited option 4
        </li>
      </ul>
      <Link
        href=""
        className={`${rubik.className} h-[50px]  flex items-center text-[15px] leading-[.8] text-white overflow-hidden relative z-[1] text-center capitalize font-medium w-[170px] mt-10 bg-primary py-[14px] px-[25px] cursor-pointer rounded-[5px] transform  transition-all duration-400 hover:text-white before:content-[''] before:w-full before:h-0 before:absolute before:left-0 before:bottom-0 before:touch-auto before:-z-[1] before:bg-secondary before:transition-height before:duration-400 before:ease-custom-ease before:delay-0   to_bottom`}
      >
        about us <IoScanCircleOutline size={20} className="ml-7" />
      </Link>
    </div>
  );
};

export default PricePlan;
