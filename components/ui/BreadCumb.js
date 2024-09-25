import { rubik } from "@/app/fonts";
import Link from "next/link";
import React from "react";

const BreadCumb = ({ currentPage }) => {
  return (
    <section className=" relative bg-[url('/img/service-1/main-banner.jpg')] bg-center bg-cover bg-no-repeat bg-[#081845] min-w[350px] py-[125px] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[rgba(8,24,69,0.87)]">
      <div className="container mx-auto xs:px-6 px-4 relative z-[2]">
        <div className=" text-center">
          <h3 className=" md:text-[45px] text-[36px] md:leading-[55px] leading-10 capitalize text-white font-bold mb-4 ">
            {currentPage}
          </h3>
          <div
            className={`${rubik.className} text-lg leading-[30px] text-[rgba(255,255,255,0.7)]`}
          >
            <Link href="/HomeTwo" className="text-[#B9BBCA] hover:text-primary">
              Home
            </Link>
            / <span className="capitalize">{currentPage}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCumb;
