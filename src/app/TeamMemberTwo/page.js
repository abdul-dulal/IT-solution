import React from "react";
import BreadCumb from "../../../components/ui/BreadCumb";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaShareAlt,
  FaTwitter,
} from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import Link from "next/link";
import team from "/public/Team.json";
import { rubik } from "../fonts";

import FooterTwo from "../../../components/ui/Footer/FooterTwo";

export const metadata = {
  title: "TeamMember 02-Graptor",
  description: "Technology & IT Solutions ",
};

const TeamMemberTwo = () => {
  return (
    <div>
      <BreadCumb currentPage="Team Member 02" />

      <section className="py-[120px] relative">
        <div className="container mx-auto xl:px-6 px-4">
          <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-9">
            {team?.map((item) => {
              return (
                <div key={item.id} className="">
                  <div
                    style={{ boxShadow: "0px 10px 30px 0px rgb(0 0 0 / 5%)" }}
                    className=" relative bg-white mb-[30px] rounded-[10px]"
                  >
                    <div className=" relative">
                      <Image
                        src={item.img}
                        width={500}
                        height={400}
                        className="w-full"
                        alt="Team Member"
                      />
                      <div className=" group absolute left-[25px] -bottom-[22px] after:absolute after:left-0 after:bottom-0 after:w-11 after:h-11 after:content-[''] after:bg-primary after:rounded-[5px] after:transition-all after:ease-in-out after:duration-400 hover:after:w-full">
                        <a
                          className=" visible opacity-100 scale-[1] group-hover:scale-[1] group-hover:delay-300  inline-block w-[38px] h-11 text-lg text-white rounded-none leading-[50px] text-center relative top-[18px] left-2 z-[3]  hover:text-white group-hover:visible group-hover:opacity-100  group-hover:duration-400"
                          href="#"
                        >
                          <FaShareAlt className="" />
                        </a>
                        <a
                          href="https://www.facebook.com/"
                          className="  inline-block w-[38px] h-11 text-lg text-white rounded-none leading-[50px] text-center relative top-[18px] left-2 z-[3] invisible opacity-0 scale-[.8] hover:text-white group-hover:visible group-hover:opacity-100 group-hover:scale-[1] group-hover:delay-300 group-hover:duration-400 "
                        >
                          <FaFacebookF />
                        </a>
                        <a
                          href="https://twitter.com/"
                          className="  inline-block w-[38px] h-11 text-lg text-white rounded-none leading-[50px] text-center relative top-[18px] left-2 z-[3] invisible opacity-0 scale-[.8] hover:text-white group-hover:visible group-hover:opacity-100 group-hover:scale-[1] group-hover:delay-300 group-hover:duration-400 "
                        >
                          <FaTwitter />
                        </a>
                        <a
                          href="instagram.com"
                          className="  inline-block w-[38px] h-11 text-lg text-white rounded-none leading-[50px] text-center relative top-[18px] left-2 z-[3] invisible opacity-0 scale-[.8] hover:text-white group-hover:visible group-hover:opacity-100 group-hover:scale-[1] group-hover:delay-300 group-hover:duration-400 "
                        >
                          <IoLogoInstagram />
                        </a>
                        <a
                          href="https://www.linkedin.com/"
                          className="  inline-block w-[38px] h-11 text-lg text-white rounded-none leading-[50px] text-center relative top-[18px] left-2 z-[3] invisible opacity-0 scale-[.8] hover:text-white group-hover:visible group-hover:opacity-100 group-hover:scale-[1] group-hover:delay-300 group-hover:duration-400 "
                        >
                          <FaLinkedinIn />
                        </a>
                      </div>
                    </div>
                    <div className=" relative pt-10 px-[25px] pb-5">
                      <h5
                        className={`${rubik.className} text-xl font-medium mb-[2px] text-[#081845] transition-all ease-linear duration-400`}
                      >
                        <Link
                          href={`team/${item.name}`}
                          className="hover:text-primary"
                        >
                          {item.name}
                        </Link>
                      </h5>
                      <p className="text-[17px] font-normal text-[rgb(86,88,114)] ">
                        {item.design}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Footer */}
      <FooterTwo />
    </div>
  );
};

export default TeamMemberTwo;
