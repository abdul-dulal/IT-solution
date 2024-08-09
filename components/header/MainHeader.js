import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "/public/img/main-logo.png";
import { rubik } from "@/app/fonts";

const MainHeader = () => {
  return (
    <header class="bg-base  sticky top-0 z-[9999] ">
      <div class="container mx-auto">
        <nav className="h-[98px]">
          <div className="flex justify-between items-center w-full h-full">
            <Link href={"/"} className="">
              <Image src={logo} className="" alt="Main logo" />
            </Link>
            <ul
              class={`${rubik.className}   flex items-center gap-9 text-white text-lg font-medium `}
            >
              <li class="group relative w-16">
                <a
                  href="#"
                  className="py-[38px] after:content-['+'] hover:after:content-['-'] hover:text-primary transition-all delay-400 ease-linear after:ml-1"
                >
                  Home
                </a>
                <ul className="text-[16px] absolute bg-base -left-3 mt-[35px] space-y-2 opacity-0 invisible transform transition-all duration-500 translate-y-4 group-hover:opacity-100  group-hover:visible group-hover:translate-y-0 ">
                  <li className="">
                    <a
                      href="#"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-[#1E2843]  transform transition-all duration-300 translate-y-1 group-hover:translate-y-0 hover:text-primary"
                    >
                      Home One
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-[#1E2843]  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-primary"
                    >
                      Home Two
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-[#1E2843]  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-primary"
                    >
                      Home Three
                    </a>
                  </li>
                </ul>
              </li>
              <li class="group relative w-20">
                <a
                  href="#"
                  className="py-[38px] after:content-['+'] hover:after:content-['-'] hover:text-primary transition-all delay-400 ease-linear after:ml-1"
                >
                  Services
                </a>
                <ul className="text-[16px] absolute bg-base -left-3 mt-[35px] space-y-2 opacity-0 invisible transform transition-all duration-500 translate-y-4 group-hover:opacity-100  group-hover:visible group-hover:translate-y-0 ">
                  <li className="">
                    <a
                      href="#"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-[#1E2843]  transform transition-all duration-300 translate-y-1 group-hover:translate-y-0 hover:text-primary"
                    >
                      Service 01
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-[#1E2843]  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-primary"
                    >
                      Service 02
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-[#1E2843]  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-primary"
                    >
                      Service Details
                    </a>
                  </li>
                </ul>
              </li>
              <li class="group relative w-16">
                <a
                  href="#"
                  className="py-[38px] after:content-['+'] hover:after:content-['-'] hover:text-primary transition-all delay-400 ease-linear after:ml-1"
                >
                  Pages
                </a>
                <ul className="text-[16px] absolute bg-base -left-3 mt-[35px] space-y-2 opacity-0 invisible transform transition-all duration-500 translate-y-4 group-hover:opacity-100  group-hover:visible group-hover:translate-y-0 ">
                  <li className="">
                    <a
                      href="#"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-[#1E2843]  transform transition-all duration-300 translate-y-1 group-hover:translate-y-0 hover:text-primary"
                    >
                      About Page
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-[#1E2843]  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-primary"
                    >
                      Pricing Page
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-[#1E2843]  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-primary"
                    >
                      Faq Page
                    </a>
                  </li>
                  <li className="flex">
                    <a
                      href="#"
                      className=" w-[250px] after:content-['+'] hover:after:content-['-'] after:ml-40 block px-6 py-[10px]   border-t border-[#1E2843]  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-primary"
                    >
                      Team
                    </a>
                  </li>
                </ul>
              </li>
              <li class="group relative w-[115px]">
                <a
                  href="#"
                  className="py-[38px] after:content-['+'] hover:after:content-['-'] hover:text-primary transition-all delay-400 ease-linear after:ml-1"
                >
                  Case Study
                </a>
                <ul className="text-[16px] absolute bg-base -left-3 mt-[35px] space-y-2 opacity-0 invisible transform transition-all duration-500 translate-y-4 group-hover:opacity-100  group-hover:visible group-hover:translate-y-0 ">
                  <li className="">
                    <a
                      href="#"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-[#1E2843]  transform transition-all duration-300 translate-y-1 group-hover:translate-y-0 hover:text-primary"
                    >
                      Case Study 01
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-[#1E2843]  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-primary"
                    >
                      Case Study 02
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-[#1E2843]  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-primary"
                    >
                      Case Details
                    </a>
                  </li>
                </ul>
              </li>
              <li class="group relative w-16">
                <a
                  href="#"
                  className="py-[38px] after:content-['+'] hover:after:content-['-'] hover:text-primary transition-all delay-400 ease-linear after:ml-1"
                >
                  Blog
                </a>
                <ul className="text-[16px] absolute bg-base -left-3 mt-[35px] space-y-2 opacity-0 invisible transform transition-all duration-500 translate-y-4 group-hover:opacity-100  group-hover:visible group-hover:translate-y-0 ">
                  <li className="">
                    <a
                      href="#"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-[#1E2843]  transform transition-all duration-300 translate-y-1 group-hover:translate-y-0 hover:text-primary"
                    >
                      Blog Stadard
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-[#1E2843]  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-primary"
                    >
                      Blog Grid 01
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-[#1E2843]  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-primary"
                    >
                      Blog Grid 02
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-[#1E2843]  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-primary"
                    >
                      Blog Details
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
            <div className="flex gap-9">
              <Link href="" className="text-white text-lg font-medium ">
                hello
              </Link>
              <Link
                href=""
                className={`${rubik.className} h-[50px]  flex items-center text-[15px] leading-[.8] text-white overflow-hidden relative z-[1] text-center capitalize font-medium bg-primary py-[14px] px-[25px] cursor-pointer rounded-[5px] transform  transition-all duration-400 hover:text-primary before:absolute before:content-[''] before:w-full before:h-0 before:left-0 before:top-0 before:-z-[1] before:bg-white   grap-btn`}
              >
                Get A Quote
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
