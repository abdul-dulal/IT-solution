import React from "react";
import TopheaderTwo from "./TopheaderTwo";
import Link from "next/link";
import { rubik } from "@/app/fonts";

import { FaArrowRight } from "react-icons/fa6";
import HeaderThreePopup from "./HeaderThreePopup";
import ResponsiveHeader from "./ResponsiveHeader";

const HeaderThree = () => {
  return (
    <header class="sticky top-0 bg-primary z-[999]">
      <div class="container mx-auto  z-[999] ">
        <div className="container mx-auto xs:px-10 px-6">
          <nav className="h-[74px]">
            <div className="flex justify-between  items-center w-full h-full">
              <ul
                className={`${rubik.className}   lg:flex hidden items-center gap-10 text-base text-lg font-medium text-white `}
              >
                <li className="group relative w-16">
                  <Link
                    href="#"
                    className="py-[38px] after:content-['+'] hover:after:content-['-'] hover:text-[#191919] transition-all delay-400 ease-linear after:ml-1"
                  >
                    Home
                  </Link>
                  <ul className="text-[16px] absolute bg-primary -left-3 mt-[23px] space-y-2 opacity-0 invisible transform transition-all duration-500 translate-y-4 group-hover:opacity-100  group-hover:visible group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                    <li className="">
                      <Link
                        href="/"
                        className=" w-[250px] block px-6 py-[10px]   border-t border-[rgba(255,255,255,0.1)]  transform transition-all duration-300 translate-y-1 group-hover:translate-y-0 hover:text-[#191919]"
                      >
                        Home One
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href="/HomeTwo"
                        className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-[rgba(255,255,255,0.1)]  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-[#191919]"
                      >
                        Home Two
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href="/HomeThree"
                        className=" w-[250px] block px-6 py-[10px]   border-t border-[rgba(255,255,255,0.1)]  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-[#191919]"
                      >
                        Home Three
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="group relative w-20">
                  <Link
                    href="#"
                    className="py-[38px] after:content-['+'] hover:after:content-['-'] hover:text-[#191919] transition-all delay-400 ease-linear after:ml-1"
                  >
                    Services
                  </Link>
                  <ul className="text-[16px] absolute bg-primary -left-3 mt-[23px] space-y-2 opacity-0 invisible transform transition-all duration-500 translate-y-4 group-hover:opacity-100  group-hover:visible group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                    <li className="">
                      <Link
                        href="/ServiceOne"
                        className=" w-[250px] block px-6 py-[10px]   border-t border-[rgba(255,255,255,0.1)]  transform transition-all duration-300 translate-y-1 group-hover:translate-y-0 hover:text-[#191919]"
                      >
                        Service 01
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href="/ServiceTwo"
                        className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-[rgba(255,255,255,0.1)]  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-[#191919]"
                      >
                        Service 02
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href="/Service-details"
                        className=" w-[250px] block px-6 py-[10px]   border-t border-[rgba(255,255,255,0.1)]  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-[#191919]"
                      >
                        Service Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="group relative w-16">
                  <Link
                    href="#"
                    className="py-[38px] after:content-['+'] hover:after:content-['-'] hover:text-[#191919] transition-all delay-400 ease-linear after:ml-1"
                  >
                    Pages
                  </Link>
                  <ul className="text-[16px] absolute bg-primary -left-3 mt-[23px] space-y-2 opacity-0 invisible transform transition-all duration-500 translate-y-4 group-hover:opacity-100  group-hover:visible group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                    <li className="">
                      <Link
                        href="/About"
                        className=" w-[250px] block px-6 py-[10px]   border-t border-[rgba(255,255,255,0.1)]  transform transition-all duration-300 translate-y-1 group-hover:translate-y-0 hover:text-[#191919]"
                      >
                        About Page
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href="/Pricing"
                        className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-[rgba(255,255,255,0.1)]  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-[#191919]"
                      >
                        Pricing Page
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href="/Faq"
                        className=" w-[250px] block px-6 py-[10px]   border-t border-[rgba(255,255,255,0.1)]  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-[#191919]"
                      >
                        Faq Page
                      </Link>
                    </li>
                    <li className="team">
                      <Link
                        href="#"
                        className=" w-[250px] after:content-['+'] hover:after:content-['-'] after:ml-40 block px-6 py-[10px]   border-t border-[rgba(255,255,255,0.1)]  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-[#191919]"
                      >
                        Team
                      </Link>
                      <ul className="text-[16px] absolute bg-primary left-[280px] -mt-[51px] space-y-2 opacity-0  invisible transform transition-all duration-500 translate-y-4   group-hover:visible group-hover:translate-y-0 ">
                        <li className="">
                          <Link
                            href="/TeamMember"
                            className=" w-[250px] block px-6 py-[6px]   border-t border-[rgba(255,255,255,0.1)]  transform transition-all duration-300 translate-y-1 group-hover:translate-y-0 hover:text-[#191919]"
                          >
                            Team Member 01
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            href="/TeamMemberTwo"
                            className=" w-[250px] block px-6 py-[6px]   border-t border-[rgba(255,255,255,0.1)]  transform transition-all duration-300 translate-y-1 group-hover:translate-y-0 hover:text-[#191919]"
                          >
                            Team Member 02
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            href="/SingleTeam"
                            className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-[rgba(255,255,255,0.1)]  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-[#191919]"
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
                    className="py-[38px] after:content-['+'] hover:after:content-['-'] hover:text-[#191919] transition-all delay-400 ease-linear after:ml-1"
                  >
                    Case Study
                  </Link>
                  <ul className="text-[16px] absolute bg-primary -left-3 mt-[23px] space-y-2 opacity-0 invisible transform transition-all duration-500 translate-y-4 group-hover:opacity-100  group-hover:visible group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto ">
                    <li className="">
                      <Link
                        href="/CaseStudyOne"
                        className=" w-[250px] block px-6 py-[10px]   border-t border-[rgba(255,255,255,0.1)]  transform transition-all duration-300 translate-y-1 group-hover:translate-y-0 hover:text-[#191919]"
                      >
                        Case Study 01
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href="/CaseStudyTwo"
                        className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-[rgba(255,255,255,0.1)]  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-[#191919]"
                      >
                        Case Study 02
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href="/CaseStudyThree"
                        className=" w-[250px] block px-6 py-[10px]   border-t border-[rgba(255,255,255,0.1)]  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-[#191919]"
                      >
                        Case Study 03
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href="/CaseDetails"
                        className=" w-[250px] block px-6 py-[10px]   border-t border-[rgba(255,255,255,0.1)]  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-[#191919]"
                      >
                        Case Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="group relative w-16">
                  <Link
                    href="#"
                    className="py-[38px] after:content-['+'] hover:after:content-['-'] hover:text-[#191919] transition-all delay-400 ease-linear after:ml-1"
                  >
                    Blog
                  </Link>
                  <ul className="text-[16px] absolute bg-primary -left-3 mt-[23px] space-y-2 opacity-0 invisible transform transition-all duration-500 translate-y-4 group-hover:opacity-100  group-hover:visible group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                    <li className="">
                      <Link
                        href="/BlogStandard"
                        className=" w-[250px] block px-6 py-[10px]   border-t border-[rgba(255,255,255,0.1)]  transform transition-all duration-300 translate-y-1 group-hover:translate-y-0 hover:text-[#191919]"
                      >
                        Blog Stadard
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href="/BlogGridOne"
                        className=" w-[250px] block px-6 py-[10px]   border-t-[.5px] border-[rgba(255,255,255,0.1)]  transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-[#191919]"
                      >
                        Blog Grid 01
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href="/BlogGridTwo"
                        className=" w-[250px] block px-6 py-[10px]   border-t border-[rgba(255,255,255,0.1)]  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-[#191919]"
                      >
                        Blog Grid 02
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href="/SingleBlog"
                        className=" w-[250px] block px-6 py-[10px]   border-t border-[rgba(255,255,255,0.1)]  transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 hover:text-[#191919]"
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
              <ResponsiveHeader bgColor="white" />
              <div className="flex items-center">
                <HeaderThreePopup />
                <div class=" sm:block hidden">
                  <Link
                    href="/contact"
                    class={`${rubik.className} text-[15px] leading-[12px] font-bold text-white left flex relative items-center gap-3 h-[77px] py-[30px] px-[29px] bg-[rgba(255,255,255,0.2)] hover:bg-transparent before:content-[''] before:w-0 before:h-[95%] before:absolute before:left-0 before:right-auto before:-z-[1] before:top-[2px] before:bg-secondary before:hover:w-full before:hover:left-auto before:hover:right-0 before:hover:text-primary`}
                  >
                    Get A Quote
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderThree;
