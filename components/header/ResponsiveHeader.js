"use client";
import React, { useEffect, useState } from "react";
import { TiArrowDown } from "react-icons/ti";
import { rubik } from "@/app/fonts";
import Hamburger from "hamburger-react";
import List from "./list";
const ResponsiveHeader = ({ bgColor }) => {
  const [isOpen, setOpen] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [service, setServcie] = useState(false);
  const [page, setPage] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [team, setTeam] = useState(false);
  const [caseStudy, setCaseStudy] = useState(false);
  const [blog, setBlog] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <section>
        <div
          className={`rounded-md lg:hidden block ${
            bgColor == "white" ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <Hamburger toggled={isOpen} size={24} toggle={setOpen} />
        </div>
        {isOpen && (
          <div
            className={`container xs:px-2 px-0 mx-auto shadow-lg fixed inset-0 bg-white h-[265px] lg:hidden overflow-y-scroll ${
              isScrolled ? "top-[12%]" : "xs:top-[12%] top-[30%]"
            }`}
          >
            <div className="p-4">
              <header>
                <ul>
                  <li
                    onClick={() => setShowParagraph(!showParagraph)}
                    className={`${rubik.className} border-b  border-solid border-gray-300 text-lg leading-[48px] font-normal flex items-center justify-between`}
                  >
                    Home
                    <span className="h-7 w-7 rounded-sm bg-[#F6F6F6] flex items-center justify-center">
                      <TiArrowDown size={20} />
                    </span>
                  </li>
                  <ul
                    className={`transition-all duration-500 bg-[#F6F6F6]  ease-in-out overflow-hidden px-3   ${
                      showParagraph ? "max-h-40" : "max-h-0"
                    } `}
                  >
                    <List title="Home One" path="/" />
                    <List title="Home Two" path="/HomeTwo" />
                    <List title="Home Three" path="/HomeThree" />
                  </ul>
                  <li
                    onClick={() => setServcie(!service)}
                    className={`${rubik.className} border-b  border-solid border-gray-300 text-lg leading-[48px] font-normal flex items-center justify-between`}
                  >
                    Service
                    <span className="h-7 w-7 rounded-sm bg-[#F6F6F6] flex items-center justify-center">
                      <TiArrowDown size={20} />
                    </span>
                  </li>
                  <ul
                    className={`transition-all duration-500 bg-[#F6F6F6]  ease-in-out overflow-hidden px-3   ${
                      service ? "max-h-40" : "max-h-0"
                    } `}
                  >
                    <List title="Service One" path="/ServiceOne" />
                    <List title="Service Two" path="/ServiceTwo" />
                    <List title="Servcie Details" path="/Service-details" />
                  </ul>
                  <li
                    onClick={() => setPage(!page)}
                    className={`${rubik.className} border-b  border-solid border-gray-300 text-lg leading-[48px] font-normal flex items-center justify-between`}
                  >
                    Pages
                    <span className="h-7 w-7 rounded-sm bg-[#F6F6F6] flex items-center justify-center">
                      <TiArrowDown size={20} />
                    </span>
                  </li>
                  <ul
                    className={`transition-all duration-500 bg-[#F6F6F6]  ease-in-out overflow-hidden px-3   ${
                      page ? "max-h-80" : "max-h-0"
                    } `}
                  >
                    <List title="About Page" path="/About" />
                    <List title="Pricing Page" path="/Pricing" />
                    <List title="Faq Page" path="/Faq" />
                    <li
                      onClick={() => setTeam(!team)}
                      className={`${rubik.className} border-b  border-solid border-gray-300 text-lg leading-[48px] font-normal flex items-center justify-between`}
                    >
                      Team
                      <span className="h-7 w-7 rounded-sm bg-white flex items-center justify-center">
                        <TiArrowDown size={20} />
                      </span>
                    </li>
                    <ul
                      className={`transition-all duration-500 bg-[#F6F6F6]  ease-in-out overflow-hidden px-3   ${
                        team ? "max-h-40" : "max-h-0"
                      } `}
                    >
                      <List title="Team Member" path="/TeamMember" />
                      <List title="Team Details" path="/TeamDetails" />
                    </ul>
                  </ul>

                  {/* Case Study */}

                  <li
                    onClick={() => setCaseStudy(!caseStudy)}
                    className={`${rubik.className} border-b  border-solid border-gray-300 text-lg leading-[48px] font-normal flex items-center justify-between`}
                  >
                    Case Study
                    <span className="h-7 w-7 rounded-sm bg-white flex items-center justify-center">
                      <TiArrowDown size={20} />
                    </span>
                  </li>
                  <ul
                    className={`transition-all duration-500 bg-[#F6F6F6]  ease-in-out overflow-hidden px-3   ${
                      caseStudy ? "max-h-40" : "max-h-0"
                    } `}
                  >
                    <List title="Case Study 01" path="/CaseStudyOne" />
                    <List title="Case Study 01" path="/CaseStudyTwo" />
                    <List title="Case Study 03" path="/CaseStudyThree" />
                    <List title="Case Details" path="/CaseDetails" />
                  </ul>

                  {/* Blog */}

                  <li
                    onClick={() => setBlog(!blog)}
                    className={`${rubik.className} border-b  border-solid border-gray-300 text-lg leading-[48px] font-normal flex items-center justify-between`}
                  >
                    Blog
                    <span className="h-7 w-7 rounded-sm bg-white flex items-center justify-center">
                      <TiArrowDown size={20} />
                    </span>
                  </li>
                  <ul
                    className={`transition-all duration-500 bg-[#F6F6F6]  ease-in-out overflow-hidden px-3   ${
                      blog ? "max-h-40" : "max-h-0"
                    } `}
                  >
                    <List title="Blog Stadard" path="/BlogStandard" />
                    <List title="Blog Grid 01" path="/BlogGridOne" />
                    <List title="Blog Grid 02" path="/BlogGridTwo" />
                    <List title="Blog Details" path="/BlogGridTwo" />
                  </ul>
                  <List title="Contact" path="/contact" />
                </ul>
              </header>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ResponsiveHeader;
