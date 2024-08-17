import Link from "next/link";
import React from "react";
import { FiSettings } from "react-icons/fi";

const Services = ({ title, icon, serial }) => {
  return (
    <div class=" group relative   bg-[#081845] hover:bg-primary  pt-8  pb-[50px] transition-all duration-300 ease-in text-center">
      <div class=" flex justify-center gap-5 mb-10">
        <span className="inline-block text-[rgba(104,110,226,0.1)] text-[80px] -tracking-[2] leading-[80px] font-medium transition-all duration-300 ease-in group-hover:text-[rgba(255,255,255,0.1)]">
          {serial}
        </span>
        <div class="   h-[5px] bg-[rgba(104,110,226,0.1)] mt-10 px-[12px] rounded-[5px] transition-all duration-300 ease-in group-hover:bg-[rgba(255,255,255,0.1)]"></div>
        <span class="inline-block text-primary text-[80px] leading-[80px] transition-all duration-300 ease-in group-hover:text-white">
          {icon}
        </span>
      </div>
      <div class=" absolute flex justify-center w-full  bottom-3 text-[180px] text-[rgba(255,255,255,0.05)] z-[1] transition-all duration-300 ease-in">
        {icon}
      </div>
      <h4 className="text-[22px] font-bold leading-[32px] text-white relative z-[2] uppercase mb-5 transition-all duration-400 ease-in-out">
        <Link
          href="single-service.html"
          className="hover:text-[#191919] hover:transition-all hover:duration-400 hover:ease-in-out"
        >
          {title}
        </Link>
      </h4>
      <p className="text-[rgba(255,255,255,0.8)] relative m-0 z-[2] transition-all duration-300 ease-in">
        At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio
        data center database.
      </p>
    </div>
  );
};

export default Services;
