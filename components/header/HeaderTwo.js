"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "/public/img/secondary.png";
import { rubik } from "@/app/fonts";
import { IoClose } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { PiMapPinLineBold } from "react-icons/pi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { SlSocialPintarest } from "react-icons/sl";
import { IoLogoWhatsapp } from "react-icons/io5";

const HeaderTwo = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleOverlay = () => {
    setIsVisible(!isVisible);
  };
  return (
    <header class="bg-white  sticky top-0 z-[9999] ">
      <div class="container mx-auto px-6">
        <nav className="h-[98px]">
          <div className="flex justify-between items-center w-full h-full">
            <Link href={"/"} className="">
              <Image src={logo} className="" alt="Main logo" />
            </Link>
            <ul
              class={`${rubik.className}   flex items-center gap-9 text-base text-lg font-medium `}
            >
              <li class="group relative w-16">
                <Link
                  href="#"
                  className="py-[38px] after:content-['+'] hover:after:content-['-'] hover:text-primary transition-all delay-400 ease-linear after:ml-1"
                >
                  Home
                </Link>
                <ul className="text-[16px] absolute bg-white -left-3 mt-[35px] space-y-2 opacity-0 invisible transform transition-all duration-500 translate-y-4 group-hover:opacity-100  group-hover:visible group-hover:translate-y-0 ">
                  <li className="team">
                    <Link
                      href="#"
                      className=" w-[250px] after:content-['+'] hover:after:content-['-'] after:ml-[140px] block px-6 py-[10px]   border-t border-gray-200  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-primary"
                    >
                      Multiple
                    </Link>
                    <ul className="text-[16px] absolute bg-white left-[280px] -mt-[51px] space-y-2 opacity-0  invisible transform transition-all duration-500 translate-y-4   group-hover:visible group-hover:translate-y-0 ">
                      <li className="">
                        <Link
                          href="/HomeOne"
                          className=" w-[250px] block px-6 py-[6px]   border-t- border-gray-200  transform transition-all duration-300 translate-y-1 group-hover:translate-y-0 hover:text-primary"
                        >
                          Home One
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href="#"
                          className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-gray-200  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-primary"
                        >
                          Home Two
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href="#"
                          className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-gray-200  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-primary"
                        >
                          Home Three
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="team">
                    <Link
                      href="#"
                      className=" w-[250px] after:content-['+'] hover:after:content-['-'] after:ml-[123px] block px-6 py-[10px]   border-t border-gray-200  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-primary"
                    >
                      OnpePage
                    </Link>
                    <ul className="text-[16px] absolute bg-white left-[280px] -mt-[51px] space-y-2 opacity-0  invisible transform transition-all duration-500 translate-y-4    group-hover:translate-y-0 ">
                      <li className="">
                        <Link
                          href="#"
                          className=" w-[250px] block px-6 py-[6px]   border-t border-gray-200  transform transition-all duration-300 translate-y-1 group-hover:translate-y-0 hover:text-primary"
                        >
                          Home One
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href="#"
                          className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-gray-200  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-primary"
                        >
                          Home Two
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href="#"
                          className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-gray-200  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-primary"
                        >
                          Home Three
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="group relative w-20">
                <Link
                  href="#"
                  className="py-[38px] after:content-['+'] hover:after:content-['-'] hover:text-primary transition-all delay-400 ease-linear after:ml-1"
                >
                  Services
                </Link>
                <ul className="text-[16px] absolute bg-white -left-3 mt-[35px] space-y-2 opacity-0 invisible transform transition-all duration-500 translate-y-4 group-hover:opacity-100  group-hover:visible group-hover:translate-y-0 ">
                  <li className="">
                    <Link
                      href="/ServiceOne"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-gray-200  transform transition-all duration-300 translate-y-1 group-hover:translate-y-0 hover:text-primary"
                    >
                      Service 01
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="/ServiceTwo"
                      className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-gray-200  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-primary"
                    >
                      Service 02
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="/Service-details"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-gray-200  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-primary"
                    >
                      Service Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="group relative w-16">
                <Link
                  href="#"
                  className="py-[38px] after:content-['+'] hover:after:content-['-'] hover:text-primary transition-all delay-400 ease-linear after:ml-1"
                >
                  Pages
                </Link>
                <ul className="text-[16px] absolute bg-white -left-3 mt-[35px] space-y-2 opacity-0 invisible transform transition-all duration-500 translate-y-4 group-hover:opacity-100  group-hover:visible group-hover:translate-y-0 ">
                  <li className="">
                    <Link
                      href="/About"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-gray-200  transform transition-all duration-300 translate-y-1 group-hover:translate-y-0 hover:text-primary"
                    >
                      About Page
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="/Pricing"
                      className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-gray-200  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-primary"
                    >
                      Pricing Page
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="/Faq"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-gray-200  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-primary"
                    >
                      Faq Page
                    </Link>
                  </li>
                  <li className="team">
                    <Link
                      href="#"
                      className=" w-[250px] after:content-['+'] hover:after:content-['-'] after:ml-40 block px-6 py-[10px]   border-t border-gray-200  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-primary"
                    >
                      Team
                    </Link>
                    <ul className="text-[16px] absolute bg-white left-[280px] -mt-[51px] space-y-2 opacity-0  invisible transform transition-all duration-500 translate-y-4   group-hover:visible group-hover:translate-y-0 ">
                      <li className="">
                        <Link
                          href="/TeamMember"
                          className=" w-[250px] block px-6 py-[6px]   border-t border-gray-200  transform transition-all duration-300 translate-y-1 group-hover:translate-y-0 hover:text-primary"
                        >
                          Team Member
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href="/SingleTeam"
                          className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-gray-200  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-primary"
                        >
                          Team Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="group relative w-[115px]">
                <Link
                  href="#"
                  className="py-[38px] after:content-['+'] hover:after:content-['-'] hover:text-primary transition-all delay-400 ease-linear after:ml-1"
                >
                  Case Study
                </Link>
                <ul className="text-[16px] absolute bg-white -left-3 mt-[35px] space-y-2 opacity-0 invisible transform transition-all duration-500 translate-y-4 group-hover:opacity-100  group-hover:visible group-hover:translate-y-0 ">
                  <li className="">
                    <Link
                      href="#"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-gray-200  transform transition-all duration-300 translate-y-1 group-hover:translate-y-0 hover:text-primary"
                    >
                      Case Study 01
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="#"
                      className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-gray-200  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-primary"
                    >
                      Case Study 02
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="#"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-gray-200  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-primary"
                    >
                      Case Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="group relative w-16">
                <Link
                  href="#"
                  className="py-[38px] after:content-['+'] hover:after:content-['-'] hover:text-primary transition-all delay-400 ease-linear after:ml-1"
                >
                  Blog
                </Link>
                <ul className="text-[16px] absolute bg-white -left-3 mt-[35px] space-y-2 opacity-0 invisible transform transition-all duration-500 translate-y-4 group-hover:opacity-100  group-hover:visible group-hover:translate-y-0 ">
                  <li className="">
                    <Link
                      href="/BlogStandard"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-gray-200  transform transition-all duration-300 translate-y-1 group-hover:translate-y-0 hover:text-primary"
                    >
                      Blog Stadard
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="/BlogGridOne"
                      className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-gray-200  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-primary"
                    >
                      Blog Grid 01
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="#"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-gray-200  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-primary"
                    >
                      Blog Grid 02
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="#"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-gray-200  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-primary"
                    >
                      Blog Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="">Contact</Link>
              </li>
            </ul>
            <div className="flex gap-9">
              <div class="access-btn">
                <Link href="javascript:void(0);" class="btn-search">
                  <i class="nss-search2"></i>
                </Link>
                <Link
                  onClick={toggleOverlay}
                  href="javascript:void(0)"
                  class="navigator"
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
          </div>
        </nav>
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
        <div class="max-w-[360px] h-full z-[999] cursor-auto  bg-white pt-10 px-[30px] overflow-y-auto fixed right-0 top-0  ">
          <div
            className={`${
              isVisible
                ? "opacity-100 visible translate-y-0 transition-all duration-300 ease-in-out delay-[.9s]"
                : "translate-y-[25px] transition-all duration-300 ease-in-out invisible opacity-0  "
            }`}
          >
            <span
              onClick={() => setIsVisible(false)}
              class=" absolute right-0 -top-[20px] text-xl w-9 h-9 border border-solid border-[rgba(0,0,0,0.1)] rounded-[50%] z-[99] text-[#1e2843] leading-[38px]  flex justify-center items-center hover:text-primary hover:border-primary"
            >
              <IoClose />
            </span>
            <div class="center_align">
              <div class=" relative">
                <div class=" relative mb-12">
                  <Link href="">
                    <Image src={logo} alt="Logo" />
                  </Link>
                </div>
                <p className="mb-7">
                  Graptor quisque placerat vitae lacus ut scelerisque. Fusce
                  luctus odio ac nibh luctus, in porttitor theo lacus egestas
                  etiusto odio data center.
                </p>
                <div class=" mb-[30px]">
                  <div class=" relative pl-[60px] mb-7">
                    <div class="text-center absolute left-0 top-[7px] text-[30px] text-[#1E2843] leading-[60px]">
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
                <div class=" mb-[20px]">
                  <div class=" relative pl-[60px] mb-7">
                    <div class="text-center absolute left-0 top-[7px] text-[30px] text-[#1E2843] leading-[60px]">
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
                <div class=" mb-[30px]">
                  <div class=" relative pl-[60px] mb-7">
                    <div class="text-center absolute left-0 top-[7px] text-[30px] text-[#1E2843] leading-[60px]">
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

                <ul class=" p-0 mt-[54px] flex mb-12">
                  <li className="inline-block">
                    <Link
                      href="https://www.facebook.com/"
                      class="w-9 h-9 border border-solid border-[rgba(0,0,0,0.1)] rounded-[50%] text-[#1e2843] leading-[38px] flex justify-center items-center text-[16px]  mr-3 hover:bg-primary hover:border-primary hover:text-white"
                    >
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://twitter.com/"
                      class="w-9 h-9 border border-solid border-[rgba(0,0,0,0.1)] rounded-[50%] text-[#1e2843] leading-[38px] flex justify-center items-center text-[16px]  mr-3 hover:bg-primary hover:border-primary hover:text-white"
                    >
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://whatsapp.com/"
                      class="w-9 h-9 border border-solid border-[rgba(0,0,0,0.1)] rounded-[50%] text-[#1e2843] leading-[38px] flex justify-center items-center text-[16px]  mr-3 hover:bg-primary hover:border-primary hover:text-white"
                    >
                      <IoLogoWhatsapp />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://instagram.com/"
                      class="w-9 h-9 border border-solid border-[rgba(0,0,0,0.1)] rounded-[50%] text-[#1e2843] leading-[38px] flex justify-center items-center text-[16px]  mr-3 hover:bg-primary hover:border-primary hover:text-white"
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
    </header>
  );
};

export default HeaderTwo;
