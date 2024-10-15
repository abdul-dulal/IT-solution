import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ClientContent = ({ name, title, img }) => {
  return (
    <div className=" relative bg-[#f0f4f9] overflow-hidden rounded-[10px] pt-[55px] px-[30px] pb-[33px] text-center after:-right-20 after:-top-20 after:content-[''] after:absolute after:w-[160px] after:h-[160px] after:rounded-[50%] after:bg-primary ">
      <FaQuoteLeft className="text-[22px] text-white leading-[22px] absolute right-[22px] top-[22px] z-[1]" />
      <Image
        src={img}
        className="w-20 h-20 rounded-[50%] inline-block mb-[25px]"
        alt={title}
      />
      <p className="mb-[21px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id
        leo luctus gravida a in ipsum.
      </p>
      <h5 className="text-xl">{name}</h5>
      <span className="block">{title}</span>
    </div>
  );
};

export default ClientContent;
