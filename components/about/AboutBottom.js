import React from "react";
import { IoCallSharp } from "react-icons/io5";
import AboutCounter from "../ui/AboutCounter";
import { rubik } from "@/app/fonts";

const AboutBottom = () => {
  return (
    <div className="grid grid-cols-12 xs:gap-3">
      <div className="lg:col-span-7 sm:col-span-12 xs:col-span-7 col-span-12">
        <div
          style={{
            boxShadow: "0px 6px 50px 0px rgba(37,37,37,0.05)",
          }}
          className={`${rubik.className}  relative bg-white flex items-center    py-[5px] xl:px-[40px] px-5 border-l-[5px] border-solid border-primary `}
        >
          <div className="w-[150px]">
            <AboutCounter />
          </div>

          <h3
            className={`${rubik.className} text-[16px] text-[rgb(8,24,69)] leading-[25px] font-bold `}
          >
            Years of Experience
          </h3>
        </div>
      </div>

      <div className="lg:col-span-5 sm:col-span-12 xs:col-span-5 col-span-12 relative">
        <div className="   flex gap-3  after:bg-transparent pb-[60px] mt-8 shadow-none">
          <div className=" w-12 h-12 min-w-12 min-h-12 leading-[48px] text-[22px] text-primary hover:bg-primary hover:text-white transition-all ease-in-out duration-400 cursor-pointer  text-center  border-2 border-solid border-[rgba(25,25,25,0.1)] rounded-[50%] flex items-center justify-center ">
            <IoCallSharp className="" />
          </div>
          <div>
            <h5 className="text-lg  text-[#565872] leading-[.8] font-normal mb-1">
              Call Us
            </h5>
            <p
              className={`${rubik.className} text-base text-[#081845] m-0 font-bold`}
            >
              360-779-2228
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBottom;
