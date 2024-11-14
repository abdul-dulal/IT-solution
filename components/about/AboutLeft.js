import Image from "next/image";
import React from "react";
import VideoModalTwo from "../VideoModal2";
import hero from "/public/img/about/About-hero.jpg";
const AboutLeft = () => {
  return (
    <div className="relative">
      <div className=" group relative pt-[27px] ">
        <Image
          src={hero}
          className="max-w-[426px] h-auto   w-full xs:m-0 mx-auto rounded-[29px]"
          alt="About"
        />
        <div className=" w-[298px]  h-[536px] xs:block hidden bg-primary rounded-[29px] absolute  xl:right-[13%] lg:right-0 md:-right-[5%]  right-[15%] top-0 -z-[1] "></div>

        <div className="">
          <VideoModalTwo />
        </div>
      </div>
    </div>
  );
};

export default AboutLeft;
