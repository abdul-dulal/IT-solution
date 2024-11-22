"use client";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import cLogo1 from "/public/img/client/techlogo1.png";
import cLogo2 from "/public/img/client/brandname1.png";
import cLogo3 from "/public/img/client/brandname2.png";
import cLogo4 from "/public/img/client/techlogo2.png";

import Link from "next/link";
import Image from "next/image";
const Client = () => {
  const logo = [
    { id: 1, logo: cLogo1 },
    { id: 2, logo: cLogo2 },
    { id: 3, logo: cLogo3 },
    { id: 4, logo: cLogo4 },
    { id: 5, logo: cLogo1 },
    { id: 6, logo: cLogo3 },
  ];
  return (
    <div className="relative">
      <div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          modules={[Navigation, Autoplay]}
          speed={1000}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="relative"
          breakpoints={{
            620: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1536: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {logo?.map(({ id, logo }) => {
            return (
              <SwiperSlide key={id}>
                <div className="client ">
                  <Link
                    href="/"
                    className="group  overflow-hidden inline-block relative transition-all duration-300 ease-in-out  "
                  >
                    <Image
                      src={logo}
                      alt="Client logo"
                      className="hover inline-block max-w-[255px]   transition-all duration-300 ease-in-out absolute top-0 left-0 z-[1] invisible "
                    />
                    <Image
                      src={logo}
                      alt="Client logo"
                      className="normal inline-block max-w-[255px]  transition-all duration-300 ease-in-out   "
                    />
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Client;
