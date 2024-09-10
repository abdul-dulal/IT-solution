import Link from "next/link";
import React from "react";
import { FiSettings } from "react-icons/fi";
import { TbBrandWebflow } from "react-icons/tb";
import { BiLogoSlack } from "react-icons/bi";
import { GiMaterialsScience } from "react-icons/gi";
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
    <div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8">
        {AllSerive?.map((item) => {
          const IconComponent = allIcons[item.icon];

          return (
            <div
              key={item.id}
              className=" group relative   bg-[#081845] hover:bg-primary  pt-8  pb-[50px] transition-all duration-300 ease-in text-center"
            >
              <div className=" flex justify-center gap-5 mb-10">
                <span className="inline-block text-[rgba(104,110,226,0.1)] text-[80px] -tracking-[2] leading-[80px] font-medium transition-all duration-300 ease-in group-hover:text-[rgba(255,255,255,0.1)]">
                  {item.serial}
                </span>
                <div className="   h-[5px] bg-[rgba(104,110,226,0.1)] mt-10 px-[12px] rounded-[5px] transition-all duration-300 ease-in group-hover:bg-[rgba(255,255,255,0.1)]"></div>
                <span className="inline-block text-primary text-[80px] leading-[80px] transition-all duration-300 ease-in group-hover:text-white">
                  <IconComponent />
                </span>
              </div>
              <div className=" absolute flex justify-center w-full  bottom-3 text-[180px] text-[rgba(255,255,255,0.05)] z-[1] transition-all duration-300 ease-in">
                <IconComponent />
              </div>
              <h4 className="text-[22px] font-bold leading-[32px] text-white relative z-[2] uppercase mb-5 transition-all duration-400 ease-in-out">
                <Link
                  href={`service/${item.title}`}
                  className="hover:text-[#191919] hover:transition-all hover:duration-400 hover:ease-in-out"
                >
                  {item.title}
                </Link>
              </h4>
              <p className="text-[rgba(255,255,255,0.8)] relative m-0 z-[2] transition-all duration-300 ease-in">
                At vero eos et accusamus etiusto odio praesentium accusamus
                etiusto odio data center database.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
