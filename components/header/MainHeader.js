import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "/public/img/main-logo.png";
import { rubik } from "@/app/fonts";
import HeaderRight from "./HeaderRight";
import ResponsiveHeader from "./ResponsiveHeader";

const MainHeader = () => {
  return (
    <header className="bg-base  sticky top-0 z-[999] ">
      <div className="container mx-auto xl:px-1 xs:px-6 px-4 ">
        <nav className="h-[98px]">
          <div className="flex justify-between items-center w-full h-full">
            <Link href={"/"} className="">
              <Image src={logo} className="" alt="Main logo" />
            </Link>
            <ul
              className={`${rubik.className}   lg:flex hidden items-center gap-9 text-white text-lg font-medium `}
            >
              <li className="group relative w-16">
                <Link
                  href="#"
                  className="py-[38px] after:content-['+'] group-hover:after:content-['-'] hover:text-primary transition-all delay-400 ease-linear after:ml-1"
                >
                  Home
                </Link>
                <ul className="text-[16px] absolute bg-base -left-3 mt-[35px] space-y-2 opacity-0 invisible transform  transition-all duration-500 translate-y-4 group-hover:opacity-100  group-hover:visible group-hover:translate-y-0  pointer-events-none group-hover:pointer-events-auto">
                  <li className="">
                    <Link
                      href="/"
                      className=" w-[250px] block px-6 py-[6px]   border-t border-[#1E2843]  transform transition-all duration-300 translate-y-1 group-hover:translate-y-0 hover:text-primary"
                    >
                      Home One
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="/HomeTwo"
                      className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-[#1E2843]  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-primary"
                    >
                      Home Two
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="/HomeThree"
                      className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-[#1E2843]  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-primary"
                    >
                      Home Three
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="group relative w-20">
                <Link
                  href="#"
                  className="py-[38px] after:content-['+'] group-hover:after:content-['-'] hover:text-primary  after:ml-1"
                >
                  Services
                </Link>
                <ul className="text-[16px] absolute bg-base -left-3 mt-[35px] space-y-2 opacity-0 invisible transform  transition-all duration-500 translate-y-4 group-hover:opacity-100  group-hover:visible group-hover:translate-y-0  pointer-events-none group-hover:pointer-events-auto">
                  <li className="">
                    <Link
                      href="/ServiceOne"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-[#1E2843]  transform transition-all duration-300 translate-y-1 group-hover:translate-y-0 hover:text-primary"
                    >
                      Service 01
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="/ServiceTwo"
                      className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-[#1E2843]  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-primary"
                    >
                      Service 02
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="/Service-details"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-[#1E2843]  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-primary"
                    >
                      Service Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="group relative w-16">
                <Link
                  href="#"
                  className="py-[38px] after:content-['+'] group-hover:after:content-['-'] hover:text-primary  after:ml-1"
                >
                  Pages
                </Link>
                <ul className="text-[16px] absolute bg-base -left-3 mt-[35px] space-y-2 opacity-0 invisible transform transition-all duration-500 translate-y-4 group-hover:opacity-100  group-hover:visible group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                  <li className="">
                    <Link
                      href="/About"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-[#1E2843]  transform transition-all duration-300 translate-y-1 group-hover:translate-y-0 hover:text-primary"
                    >
                      About Page
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="/Pricing"
                      className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-[#1E2843]  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-primary"
                    >
                      Pricing Page
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="/Faq"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-[#1E2843]  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-primary"
                    >
                      Faq Page
                    </Link>
                  </li>
                  <li className="team">
                    <Link
                      href="#"
                      className="  w-[250px] after:content-['+'] hover:after:content-['-'] after:ml-40 block px-6 py-[10px]   border-t border-[#1E2843]  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-primary"
                    >
                      Team
                    </Link>
                    <ul className="text-[16px] absolute bg-base left-[280px] -mt-[51px] space-y-2 opacity-0  invisible transform transition-all duration-500 translate-y-4   group-hover:visible group-hover:translate-y-0 ">
                      <li className="">
                        <Link
                          href="/TeamMember"
                          className=" w-[250px] block px-6 py-[6px]   border-t border-[#1E2843]  transform transition-all duration-300 translate-y-1 group-hover:translate-y-0 hover:text-primary"
                        >
                          Team Member 01
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href="/TeamMemberTwo"
                          className=" w-[250px] block px-6 py-[6px]   border-t border-[#1E2843]  transform transition-all duration-300 translate-y-1 group-hover:translate-y-0 hover:text-primary"
                        >
                          Team Member 02
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href="/SingleTeam"
                          className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-[#1E2843]  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-primary"
                        >
                          Team Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="group relative w-[115px]">
                <Link
                  href="#"
                  className="py-[38px] after:content-['+'] group-hover:after:content-['-'] hover:text-primary transition-all delay-400 ease-linear after:ml-1"
                >
                  Case Study
                </Link>
                <ul className="text-[16px] absolute bg-base -left-3 mt-[35px] space-y-2 opacity-0 invisible transform transition-all duration-500 translate-y-4 group-hover:opacity-100  group-hover:visible group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                  <li className="">
                    <Link
                      href="/CaseStudyOne"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-[#1E2843]  transform transition-all duration-300 translate-y-1 group-hover:translate-y-0 hover:text-primary"
                    >
                      Case Study 01
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="/CaseStudyTwo"
                      className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-[#1E2843]  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-primary"
                    >
                      Case Study 02
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="/CaseStudyThree"
                      className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-[#1E2843]  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-primary"
                    >
                      Case Study 03
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="/CaseDetails"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-[#1E2843]  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-primary"
                    >
                      Case Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="group relative w-16">
                <Link
                  href="#"
                  className="py-[38px] after:content-['+'] group-hover:after:content-['-'] hover:text-primary transition-all delay-400 ease-linear after:ml-1"
                >
                  Blog
                </Link>
                <ul className="text-[16px] absolute bg-base -left-3 mt-[35px] space-y-2 opacity-0 invisible transform transition-all duration-500 translate-y-4 group-hover:opacity-100  group-hover:visible group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                  <li className="">
                    <Link
                      href="/BlogStandard"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-[#1E2843]  transform transition-all duration-300 translate-y-1 group-hover:translate-y-0 hover:text-primary"
                    >
                      Blog Stadard
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="/BlogGridOne"
                      className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-[#1E2843]  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-primary"
                    >
                      Blog Grid 01
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="/BlogGridTwo"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-[#1E2843]  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-primary"
                    >
                      Blog Grid 02
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="/SingleBlog"
                      className=" w-[250px] block px-6 py-[10px]   border-t border-[#1E2843]  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-primary"
                    >
                      Blog Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <div className="flex xl:gap-0 xs:gap-8 gap-4">
              <HeaderRight />
              <ResponsiveHeader bgColor="white" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
