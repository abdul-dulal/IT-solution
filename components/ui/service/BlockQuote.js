import React from "react";
import { LuQuote } from "react-icons/lu";

const BlockQuote = () => {
  return (
    <blockquote className="relative py-[50px] md:px-[100px] sm:px-[70px] xs:px-[35px] px-6 bg-[#f0f4f9] rounded-[10px] text-center mt-[30px]">
      <LuQuote className="text-[54px] text-primary w-full block mx-auto mb-7" />
      <p className=" text-[#222] text-xl  relative leading-[30px]  font-medium italic mb-[22px] ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        <br className="md:block hidden" /> Quis ipsum suspendisse ultrices
      </p>
      <div className=" relative">
        <span className="block text-primary leading-[.8] text-lg font-normal mb-[10px]">
          David Martin
        </span>
        <p className="text-sm leading-[.8]">Ceo - nsstheme</p>
      </div>
    </blockquote>
  );
};

export default BlockQuote;
