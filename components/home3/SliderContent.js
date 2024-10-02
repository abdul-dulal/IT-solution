import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
const SliderContent = ({ img, name, title }) => {
  return (
    <div>
      <div
        style={{ boxShadow: "0px 10px 30px 0px rgb(0 0 0 / 5%)" }}
        className="flex gap-6 items-center xs:w-[70%] w-[95%] py-5 pl-5 z-[88] relative top-4  bg-[#f0f4f9] rounded-[5px] m-auto "
      >
        <div>
          <Image
            src={img}
            className="w-20 h-20 rounded-[50%] inline-block mb-[25px]"
            alt=""
          />
        </div>
        <div>
          <h5 className="text-xl">{name}</h5>
          <span className="block text-[#6E7087]">{title}</span>
        </div>
      </div>
      <div className="  -mt-14 relative bg-[#f0f4f9]  overflow-hidden rounded-[10px] pt-[100px] px-[30px] pb-[60px] text-center after:w-[160px] after:h-[160px] after:rounded-[50%] after:bg-primary after:-right-20 after:-bottom-20 after:content-[''] after:absolute">
        <FaQuoteLeft className="text-[24px] text-white leading-[22px] absolute right-[22px] bottom-[22px] z-[1]" />
        <p className="mb-[21px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est
          id leo luctus gravida a in ipsum.
        </p>
      </div>
    </div>
  );
};

export default SliderContent;
