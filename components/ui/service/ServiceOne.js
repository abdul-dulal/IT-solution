import Link from "next/link";
import React from "react";
import { GiMaterialsScience } from "react-icons/gi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { TbBrandWebflow } from "react-icons/tb";
import { BiLogoSlack } from "react-icons/bi";
import { GoProjectSymlink } from "react-icons/go";
import { PiShootingStarThin } from "react-icons/pi";
import AllSerive from "/public/AllService.json";
const Services = () => {
  const allIcons = {
    FiSettings,
    TbBrandWebflow,
    BiLogoSlack,
    GiMaterialsScience,
    GoProjectSymlink,
    PiShootingStarThin,
  };
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8">
      {AllSerive?.map((item) => {
        const IconComponent = allIcons[item.icon];
        return (
          <div className="group" key={item.id}>
            <div className=" relative mb-[30px] border-[5px] border-solid border-transparent rounded-[10px] py-10 px-7   text-center transition-all duration-400 ease-in-out hover:border-primary">
              <div className=" text-[70px] leading-[70px]  inline-block text-center mb-[27px] transition-all duration-400 ease-in-out">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="97.356"
                  height="103.797"
                  viewBox="0 0 97.356 103.797"
                  className="max-w-[103px] h-[103px] transition-all duration-400 ease-in-out fill-[rgba(104,110,226,0.1)] group-hover:fill-primary group-hover:transition-all group-hover:ease-in-out group-hover:duration-400"
                >
                  <path
                    data-name="blob (25)"
                    d="M55.4-36.7C60.4-23.3,45.2-3,32.6,13.2,20,29.5,10,41.6-1.5,42.5c-11.6.9-24.6-9.5-34.2-23.9-9.5-14.5-15.5-33.1-9-47.3,6.6-14.2,25.6-24.1,47.8-25.8C25.2-56.3,50.4-50,55.4-36.7Z"
                    transform="translate(54.802 56.377) rotate(-90)"
                    fill=""
                  />
                </svg>

                <span className="group-hover:text-white group-hover:transition-all group-hover:ease-in-out group-hover:duration-400  text-primary  absolute right-[40%] m-auto text-center top-[22%] -translate-y-[50%] z-[5]   ">
                  <IconComponent />
                </span>
              </div>
              <h3 className="text-[23px] leading-[32px] mb-[14px] font-bold">
                <Link
                  href={`service/${item.title}`}
                  className="hover:text-primary"
                >
                  {item.title}
                </Link>
              </h3>
              <p className=" mb-[23px]">
                Lorem ipsum dolor sit amet, conset etur sadipscing elitr, sed
                diam noket numy eirmod tempor
              </p>
              <Link
                className=" h-[45px] bg-[rgba(104,110,226,0.1)]  rounded-[30px] text-center inline-block text-[22px] text-primary leading-[50px] pb-[30px] w-[80px] hover:bg-primary hover:text-white transition-all duration-400 ease-in-out"
                href={`service/${item.title}`}
              >
                <FaLongArrowAltRight className="w-full mt-3" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
