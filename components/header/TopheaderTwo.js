import React from "react";
import logo from "/public/img/secondary.png";
import Image from "next/image";
import { IoCall } from "react-icons/io5";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { MdWatchLater } from "react-icons/md";
const TopheaderTwo = () => {
  return (
    <section class=" relative bg-white ">
      <div class="container mx-auto xl:px-8 px-4">
        <div class="grid grid-cols-12 items-center ">
          <div class="lg:col-span-3 sm:col-span-4 col-span-12 sm:mx-0 mx-auto ">
            <Link class="relative px-1 text-left" href="/HomeThree">
              <Image src={logo} alt="Logo" />
            </Link>
          </div>
          <div class="lg:col-span-9 col-span-8 sm:block hidden">
            <div class=" flex items-center xl:justify-between relative">
              <div class=" flex gap-5    border-r border-solid border-[#f0f4f9] xl:ml-[35px] ml-4  xl:pr-[46px] pr-4">
                <div class=" flex items-center justify-center    w-12 h-12 border-[2px] border-solid border-[rgba(8,24,69,0.2)] rounded-[50%] text-center text-[24px]  text-primary leading-[48px]">
                  <IoCall />
                </div>
                <div>
                  <p
                    style={{ margin: "0 0 -6px" }}
                    className="text-lg text-primary"
                  >
                    Call Us
                  </p>
                  <h5 className="text-[15px] leading-[30px] text-[#222222] hover:text-primary m-0">
                    <Link href="tel:360-779-2228">360-779-2228</Link>
                  </h5>
                </div>
              </div>
              <div class="relative flex gap-4  border-r border-solid border-[#f0f4f9] xl:ml-[35px] ml-4 xl:pr-[46px] pr-4">
                <div class="flex items-center justify-center   w-12 h-12 border-[2px] border-solid border-[rgba(8,24,69,0.2)] rounded-[50%] text-center text-[24px]  text-primary leading-[48px]">
                  <HiOutlineMail />
                </div>
                <div>
                  <p
                    style={{ margin: "0 0 -6px" }}
                    className="text-lg text-primary"
                  >
                    Our Mail
                  </p>
                  <h5 className="text-base leading-[26px] text-[#222222] hover:text-primary m-0">
                    <Link href="mailto:yourname@mail.com">
                      yourname@mail.com
                    </Link>
                  </h5>
                </div>
              </div>
              <div class=" relative  lg:flex hidden gap-4 xl:ml-[35px] ml-4  ">
                <div class="flex items-center justify-center w-12 h-12 border-[2px] border-solid border-[rgba(8,24,69,0.2)] rounded-[50%] text-center text-[24px]  text-primary leading-[48px]">
                  <MdWatchLater />
                </div>
                <div>
                  <p className="text-lg text-primary">Working Hours</p>
                  <h5 className="text-base leading-[26px] text-[#222222] hover:text-primary m-0">
                    Mon - Sat 9.00 to 17.00
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopheaderTwo;
