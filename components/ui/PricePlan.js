import { rubik } from "@/app/fonts";
import Link from "next/link";
import React from "react";
import { IoScanCircleOutline } from "react-icons/io5";
const PricePlan = ({ icon, title, price }) => {
  return (
    <div className="group ">
      <div className="price  relative transition-all ease-linear duration-300 bg-[#f0f4f9] rounded-[10px] pt-11 px-5 mb-[60px] text-center after:absolute after:left-0 after:top-0 after:content-[''] after:w-full after:h-full after:rounded-[10px] after:bg-[url('/img/home1/price.jpg')] after:bg-no-repeat after:bg-center after:bg-cover after:z-[1] after:invisible after:opacity-0 after:transition-all after:duration-500 after:transform after:scale-[.98]   before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:rounded-[10px]  before:z-[2] before:transform before:scale-[.98] before:transition-all before:duration-500 before:bg-[rgba(8,24,69,0.9)] before:invisible before:opacity-0 group-hover:bg-[rgba(8,24,69,0.9)] group-hover:transition-all group-hover:duration-500 group-hover:after:opacity-100 group-hover:after:scale-[1] group-hover:after:visible  group-hover:before:opacity-100 group-hover:before:scale-[1] group-hover:before:visible">
        <div className=" w-24 h-24 leading-[90px] text-[40px] bg-primary rounded-[50%] text-center inline-block mb-10 relative p-[26px] z-[3]">
          <span className="leading-[96px] text-white">{icon}</span>
        </div>
        <h5
          className={`${rubik.className} text-base font-medium text-primary uppercase group-hover:text-white mb-2 relative z-[3] transition-all ease-linear duration-300`}
        >
          {title}
        </h5>
        <h2 className="text-5xl  font-medium mb-[18px] text-[#191919] group-hover:text-white relative z-[3] leading-[58px] transition-all ease-linear duration-300">
          ${price}
        </h2>
        <ul className="p-0 pb-20 ">
          <li
            className={`${rubik.className} block relative z-[3] text-base text-secondary leading-[36px]  before:relative  before:transition-all before:ease-linear before:duration-300  before:-left-[10px] before:-top-[1px] before:text-primary  transition-all ease-linear duration-300 group-hover:text-white`}
          >
            2x option 1
          </li>
          <li
            className={`${rubik.className}  block relative z-[3] text-base text-secondary leading-[36px] before:relative  before:transition-all before:ease-linear before:duration-300  before:-left-[10px] before:-top-[1px] before:text-primary transition-all ease-linear duration-300 group-hover:text-white`}
          >
            Free option 2
          </li>
          <li
            className={`${rubik.className} block relative z-[3] text-base text-secondary leading-[36px] before:relative  before:transition-all before:ease-linear before:duration-300  before:-left-[10px] before:-top-[1px] before:text-primary transition-all ease-linear duration-300 group-hover:text-white`}
          >
            limited option 3
          </li>
          <li
            className={`${rubik.className} block relative z-[3] text-base text-secondary leading-[36px] before:relative   before:transition-all before:ease-linear before:duration-300  before:-left-[10px] before:-top-[1px] before:text-primary transition-all ease-linear duration-300 group-hover:text-white`}
          >
            Unlimited option 4
          </li>
        </ul>
      </div>

      <div className="relative -mt-[105px] z-[99]">
        <Link
          href="/contact"
          className={`${rubik.className} h-[50px] m-auto   flex items-center text-[15px] leading-[.8] text-white overflow-hidden relative z-[1] text-center capitalize font-medium w-[170px]  bg-primary py-[30px] px-[24px] cursor-pointer rounded-full transform  transition-all duration-400 hover:text-white before:content-[''] before:w-full before:h-0 before:absolute before:left-0 before:bottom-0 before:touch-auto before:-z-[1] before:bg-secondary before:transition-height before:duration-400 before:ease-custom-ease before:delay-0   hover:before:h-full hover:before:top-0`}
        >
          buy now <IoScanCircleOutline size={20} className="ml-7" />
        </Link>
      </div>
    </div>
  );
};

export default PricePlan;
