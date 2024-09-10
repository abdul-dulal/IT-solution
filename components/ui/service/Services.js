import Link from "next/link";
import React from "react";
import { GiMaterialsScience } from "react-icons/gi";

import { FiSettings } from "react-icons/fi";
import { TbBrandWebflow } from "react-icons/tb";
import { BiLogoSlack } from "react-icons/bi";
import { GoProjectSymlink } from "react-icons/go";
import { PiShootingStarThin } from "react-icons/pi";
import AllSerive from "/public/AllService.json";
const Services = () => {
  const services = AllSerive.slice(0, 5);
  const allIcons = {
    FiSettings,
    TbBrandWebflow,
    BiLogoSlack,
    GiMaterialsScience,
    GoProjectSymlink,
    PiShootingStarThin,
  };

  return (
    <div className="grid xl:grid-cols-5 sm:grid-cols-3 xs:grid-cols-2  gap-8 px-4">
      {services.map((item) => {
        const IconComponent = allIcons[item.icon];
        return (
          <div key={item.id}>
            <div className="">
              <Link
                href={`service/${item.title}`}
                className="service-item-02 w-full inline-block relative z-[2] bg-[#223058] rounded-[10px] py-9 px-4 mb-[30px] text-center after:absolute after:content-[''] after:left-0 after:bottom-0 after:w-full after:-z-[1] after:h-0 after:opacity-0 after:rounded-[10px] after:invisible after:transform after:transition-all after:ease-linear after:delay-[.1s] after:bg-primary hover:after:h-full hover:after:opacity-1 hover:after:visible"
              >
                <div className=" w-24 h-24 m-auto leading-[90px] text-5xl bg-primary rounded-[50%] text-white text-center flex justify-center items-center mb-[22px] ">
                  <IconComponent />
                </div>
                <span className="block text-white text-xl font-medium m-0">
                  {item.title}
                </span>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
