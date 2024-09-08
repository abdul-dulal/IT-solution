"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneVolume,
  FaTwitter,
} from "react-icons/fa";
import { IoClose, IoLogoWhatsapp, IoSearchOutline } from "react-icons/io5";
import { PiMapPinLineBold } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import logo from "/public/img/secondary.png";

import ResponsiveHeader from "./ResponsiveHeader";
const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchPopup, setSearchPopup] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section className="flex gap-6 items-center">
      <div className="">
        <div className="flex items-center gap-8">
          <Link
            href="javascript:void(0);"
            onClick={() => setSearchPopup(!searchPopup)}
          >
            <IoSearchOutline size={24} />
          </Link>
          <Link
            onClick={() => setIsVisible(!isVisible)}
            href="javascript:void(0);"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
            >
              <path
                d="M2,0A2,2,0,1,0,4,2,2,2,0,0,0,2,0Zm9,0a2,2,0,1,0,2,2A2,2,0,0,0,11,0Zm9,4a2,2,0,1,0-2-2A2,2,0,0,0,20,4ZM2,9a2,2,0,1,0,2,2A2,2,0,0,0,2,9Zm9,0a2,2,0,1,0,2,2A2,2,0,0,0,11,9Zm9,0a2,2,0,1,0,2,2A2,2,0,0,0,20,9ZM2,18a2,2,0,1,0,2,2,2,2,0,0,0-2-2Zm9,0a2,2,0,1,0,2,2A2,2,0,0,0,11,18Zm9,0a2,2,0,1,0,2,2A2,2,0,0,0,20,18Z"
                fill="#1E2843"
                fill-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-[rgba(0,0,0,0.6)] w-full h-full  transition-transform duration-[.8s]   ${
          isVisible
            ? "translate-x-0 delay-100"
            : "translate-x-full   delay-500 "
        }`}
        style={{ zIndex: 999, cursor: "url(/img/close-sider.png), auto" }}
        onClick={() => setIsVisible(false)}
      >
        <div className="max-w-[360px] h-full z-[999] cursor-auto  bg-white pt-10 px-[30px] overflow-y-auto fixed right-0 top-0  ">
          <div
            className={`${
              isVisible
                ? "opacity-100 visible translate-y-0 transition-all duration-300 ease-in-out delay-[.9s]"
                : "translate-y-[25px] transition-all duration-300 ease-in-out invisible opacity-0  "
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <span
              onClick={() => setIsVisible(false)}
              className=" absolute right-0 -top-[20px] text-xl w-9 h-9 border border-solid border-[rgba(0,0,0,0.1)] rounded-[50%] z-[99] text-[#1e2843] leading-[38px]  flex justify-center items-center hover:text-primary hover:border-primary"
            >
              <IoClose />
            </span>
            <div className="center_align">
              <div className=" relative">
                <div className=" relative mb-12">
                  <Link href="">
                    <Image src={logo} alt="Logo" />
                  </Link>
                </div>
                <p className="mb-7">
                  Graptor quisque placerat vitae lacus ut scelerisque. Fusce
                  luctus odio ac nibh luctus, in porttitor theo lacus egestas
                  etiusto odio data center.
                </p>
                <div className=" mb-[30px]">
                  <div className=" relative pl-[60px] mb-7">
                    <div className="text-center absolute left-0 top-[7px] text-[30px] text-[#1E2843] leading-[60px]">
                      <span className=" inline-block">
                        <FaPhoneVolume />
                      </span>
                    </div>
                    <h5 className="mb-[6px] text-[#191919]">Call Us</h5>
                    <Link href="tel:1.800.321.9876">
                      <p className="hover:text-primary">1.800.321.9876</p>
                    </Link>
                  </div>
                </div>
                <div className=" mb-[20px]">
                  <div className=" relative pl-[60px] mb-7">
                    <div className="text-center absolute left-0 top-[7px] text-[30px] text-[#1E2843] leading-[60px]">
                      <span className=" inline-block">
                        <TfiEmail />
                      </span>
                    </div>
                    <h5 className="mb-[6px] text-[#191919]">Write us</h5>
                    <Link href="mailto:contact@website.com">
                      <p className="hover:text-primary">contact@website.com</p>
                    </Link>
                  </div>
                </div>
                <div className=" mb-[30px]">
                  <div className=" relative pl-[60px] mb-7">
                    <div className="text-center absolute left-0 top-[7px] text-[30px] text-[#1E2843] leading-[60px]">
                      <span className=" inline-block">
                        <PiMapPinLineBold />
                      </span>
                    </div>
                    <h5 className="mb-[6px] text-[#191919]"> Address</h5>

                    <p className="hover:text-primary">
                      2416 Mapleview Drive Tampa, FL 33634
                    </p>
                  </div>
                </div>

                <ul className=" p-0 mt-[54px] flex mb-12">
                  <li className="inline-block">
                    <Link
                      href="https://www.facebook.com/"
                      className="w-9 h-9 border border-solid border-[rgba(0,0,0,0.1)] rounded-[50%] text-[#1e2843] leading-[38px] flex justify-center items-center text-[16px]  mr-3 hover:bg-primary hover:border-primary hover:text-white"
                    >
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://twitter.com/"
                      className="w-9 h-9 border border-solid border-[rgba(0,0,0,0.1)] rounded-[50%] text-[#1e2843] leading-[38px] flex justify-center items-center text-[16px]  mr-3 hover:bg-primary hover:border-primary hover:text-white"
                    >
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://whatsapp.com/"
                      className="w-9 h-9 border border-solid border-[rgba(0,0,0,0.1)] rounded-[50%] text-[#1e2843] leading-[38px] flex justify-center items-center text-[16px]  mr-3 hover:bg-primary hover:border-primary hover:text-white"
                    >
                      <IoLogoWhatsapp />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://instagram.com/"
                      className="w-9 h-9 border border-solid border-[rgba(0,0,0,0.1)] rounded-[50%] text-[#1e2843] leading-[38px] flex justify-center items-center text-[16px]  mr-3 hover:bg-primary hover:border-primary hover:text-white"
                    >
                      <FaInstagram />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-[rgba(0,0,0,0.6)] w-full h-full transition-all ease-in-out  ${
          searchPopup
            ? "translate-y-0 delay-100 duration-[.8s]"
            : "-translate-y-full  duration-500 delay-700 "
        }`}
        style={{ zIndex: 9, cursor: "url(/img/close-sider.png), auto" }}
        onClick={() => setSearchPopup(false)}
      >
        <div
          style={
            searchPopup
              ? {
                  transitionDuration: "0.7s",
                  transitionTimingFunction: "cubic-bezier(0.9, 0.03, 0, 0.96)",
                  transitionDelay: "0.7s",
                  zIndex: 9999,
                }
              : {
                  transitionDuration: "0.8s",
                  transitionTimingFunction: "cubic-bezier(0.9, 0.03, 0, 0.96)",
                  transitionDelay: "0.8s",
                }
          }
          className={`
          w-full h-[400px] inset-0 z-[9999] cursor-auto bg-black  text-white fixed  ${
            searchPopup
              ? "top-0 visible opacity-100"
              : "invisible opacity-0 left-0 -top-[100%]"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div class="middle_search   top-[43%] translate-y-[-50%] relative z-[2]">
            <div class="container mx-auto">
              <div class=" text-center">
                <div className="relative">
                  <form
                    method="get"
                    action="#"
                    className="flex justify-between items-center"
                  >
                    <div
                      style={{ animationDelay: "1s" }}
                      className={` absolute contenent-[''] h-[1px] bg-[rgba(255,255,255,0.25)] w-0 invisible opacity-0 left-0 bottom-0 ${
                        searchPopup ? "active" : "w-0"
                      } ${isFocused ? "opacity-0" : ""}`}
                    ></div>
                    <input
                      type="search"
                      name="s"
                      id="s"
                      placeholder="Type Words and Hit Enter"
                      className="w-full h-16 border-none bg-transparent text-xl outline-none leading-[64px] text-white font-medium placeholder:text-white"
                      onFocus={() => [setIsFocused(true)]}
                      onBlur={() => setIsFocused(false)}
                    />
                    <div
                      style={{
                        transition:
                          "width 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s",
                      }}
                      className={`absolute left-0 bottom-0 h-[1px] bg-primary  ${
                        isFocused ? "w-full" : "w-0"
                      }`}
                    ></div>
                    <button type="submit">
                      <IoSearchOutline size={24} />
                    </button>
                  </form>
                  <div className="relative w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveHeader />
    </section>
  );
};

export default Popup;
