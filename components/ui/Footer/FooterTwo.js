import React from "react";
import FooterSocial from "./FooterSocial";
import { IoLocation } from "react-icons/io5";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import FooterBottom from "./FooterBottom";
import { rubik } from "@/app/fonts";
import FooterContact from "./FooterContact";

const FooterTwo = () => {
  return (
    <footer className="footer bg-[url('/img/bg/footer-bg.png')] bg-center bg-auto bg-no-repeat relative bg-[#081845] pt-[60px]">
      <div className="container mx-auto xs:px-6 px-4">
        <div className="grid grid-cols-12 ">
          <div className="lg:col-span-4 xs:col-span-6 col-span-12">
            <FooterSocial />
          </div>
          <div className="lg:col-span-3 xs:col-span-6 col-span-12">
            <aside className=" mt-[60px] mb-[45px]">
              <h3 className=" text-xl leading-[0.8] uppercase relative mt-[13px] mb-[37px] border-none text-white pl-[18px] font-bold after:absolute after:-bottom-[6px] after:left-0 after:h-7 after:w-1 after:bg-primary after:content-['']">
                Contact us
              </h3>
              <div className=" relative pl-7 mb-6">
                <IoLocation className="text-lg text-white absolute left-0 top-[5px]" />

                <p className="text-[rgba(255,255,255,0.8)]">
                  <Link
                    href="https://www.google.com/maps"
                    className="hover:text-primary"
                  >
                    2072 Pinnickinick Street, WA 98370
                  </Link>
                </p>
              </div>
              <div className=" relative pl-7 mb-6">
                <FaPhone className="text-lg text-white absolute left-0 top-[5px]" />

                <p className="text-[rgba(255,255,255,0.8)]">
                  <Link href="tel:1245698909" className="hover:text-primary">
                    + 124 569 89 09
                  </Link>
                </p>
              </div>
              <div className=" relative pl-7 mb-6">
                <TfiEmail className="text-lg text-white absolute left-0 top-[5px]" />

                <p className="text-[rgba(255,255,255,0.8)]">
                  <Link
                    href="mailto:yourname@mail.com"
                    className="hover:text-primary"
                  >
                    Yourname@mail.com
                  </Link>
                </p>
              </div>
            </aside>
          </div>
          <div className="lg:col-span-4 col-span-12 lg:ml-24">
            <aside className=" mt-[60px] mb-[45px]">
              <h3 className=" text-xl leading-[0.8] uppercase relative mt-[13px] mb-[37px] border-none text-white pl-[18px] font-bold after:absolute after:-bottom-[6px] after:left-0 after:h-7 after:w-1 after:bg-primary after:content-['']">
                Newsletters
              </h3>
              <p className="text-white ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                est
              </p>
              <FooterContact />
            </aside>
          </div>
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
};

export default FooterTwo;
