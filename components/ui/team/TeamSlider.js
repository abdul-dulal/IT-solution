"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef } from "react";

import Image from "next/image";

import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaShareAlt,
  FaTwitter,
} from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

import { rubik } from "@/app/fonts";
import teams from "/public/Team.json";
const TeamSlider = () => {
  const swiperRef = useRef(null);

  return (
    <section className="relative px-[50px] bg-transparent -mt-20">
      <Swiper
        spaceBetween={23}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation]}
        className="relative "
        breakpoints={{
          620: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          880: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1536: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        <div className="relative">
          {teams?.map((team) => {
            return (
              <SwiperSlide key={team.id}>
                <div className="">
                  <div
                    style={{ boxShadow: "0px 10px 30px 0px rgb(0 0 0 / 5%)" }}
                    className=" relative bg-white mb-[30px] rounded-[10px]"
                  >
                    <div className=" relative">
                      <Image
                        src={team.img}
                        width={500}
                        height={400}
                        className="w-full"
                        alt="Team Member"
                      />
                      <div className=" group absolute left-[25px] -bottom-[22px] after:absolute after:left-0 after:bottom-0 after:w-11 after:h-11 after:content-[''] after:bg-primary after:rounded-[5px] after:transition-all after:ease-in-out after:duration-400 hover:after:w-full">
                        <Link
                          className=" visible opacity-100 scale-[1] group-hover:scale-[1] group-hover:delay-300  inline-block w-[38px] h-11 text-lg text-white rounded-none leading-[50px] text-center relative top-[18px] left-2 z-[3]  hover:text-white group-hover:visible group-hover:opacity-100  group-hover:duration-400"
                          href="#"
                        >
                          <FaShareAlt className="" />
                        </Link>
                        <Link
                          href="https://www.facebook.com/"
                          target="blank"
                          className="  inline-block w-[38px] h-11 text-lg text-white rounded-none leading-[50px] text-center relative top-[18px] left-2 z-[3] invisible opacity-0 scale-[.8] hover:text-white group-hover:visible group-hover:opacity-100 group-hover:scale-[1] group-hover:delay-300 group-hover:duration-400 "
                        >
                          <FaFacebookF />
                        </Link>
                        <Link
                          href="https://twitter.com/"
                          target="blank"
                          className="  inline-block w-[38px] h-11 text-lg text-white rounded-none leading-[50px] text-center relative top-[18px] left-2 z-[3] invisible opacity-0 scale-[.8] hover:text-white group-hover:visible group-hover:opacity-100 group-hover:scale-[1] group-hover:delay-300 group-hover:duration-400 "
                        >
                          <FaTwitter />
                        </Link>
                        <Link
                          href="instagram.com"
                          target="blank"
                          className="  inline-block w-[38px] h-11 text-lg text-white rounded-none leading-[50px] text-center relative top-[18px] left-2 z-[3] invisible opacity-0 scale-[.8] hover:text-white group-hover:visible group-hover:opacity-100 group-hover:scale-[1] group-hover:delay-300 group-hover:duration-400 "
                        >
                          <IoLogoInstagram />
                        </Link>
                        <Link
                          href="https://www.linkedin.com/"
                          target="blank"
                          className="  inline-block w-[38px] h-11 text-lg text-white rounded-none leading-[50px] text-center relative top-[18px] left-2 z-[3] invisible opacity-0 scale-[.8] hover:text-white group-hover:visible group-hover:opacity-100 group-hover:scale-[1] group-hover:delay-300 group-hover:duration-400 "
                        >
                          <FaLinkedinIn />
                        </Link>
                      </div>
                    </div>
                    <div className=" relative pt-10 px-[25px] pb-5">
                      <h5
                        className={`${rubik.className} text-xl font-medium mb-[2px] text-[#081845] transition-all ease-linear duration-400`}
                      >
                        <Link
                          href={`team/${team.name}`}
                          className="hover:text-primary"
                        >
                          {team.name}
                        </Link>
                      </h5>
                      <p className="text-[17px] font-normal text-[rgb(86,88,114)] ">
                        {team.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>

      {/* Custom Previous Button */}
    </section>
  );
};

export default TeamSlider;
