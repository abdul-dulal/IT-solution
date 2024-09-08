"use client";
import React, { useEffect, useState } from "react";
import { TiArrowDown } from "react-icons/ti";
import { rubik } from "@/app/fonts";
import Hamburger from "hamburger-react";
const ResponsiveHeader = () => {
  const [isOpen, setOpen] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
        <div className="bg-black  rounded-md lg:hidden block">
          <Hamburger
            toggled={isOpen}
            color="white"
            size={24}
            toggle={setOpen}
          />
        </div>
        {isOpen && (
          <div
            className={`container xs:px-2 px-0 mx-auto shadow-lg fixed inset-0 bg-white h-[265px] lg:hidden    ${
              isScrolled ? "top-[22%]" : "xs:top-[35%] top-[60%]"
            }`}
          >
            <div className="p-4">
              <header>
                <ul>
                  <li
                    onClick={() => setShowParagraph(!showParagraph)}
                    className={`${rubik.className} border-b pr-3 border-solid border-gray-300 text-lg leading-[40px] font-normal flex items-center justify-between`}
                  >
                    Home
                    <span className="h-7 w-7 rounded-sm bg-gray-200 flex items-center justify-center">
                      <TiArrowDown size={20} />
                    </span>
                  </li>
                  <ul
                    className={`transition-all duration-500 bg-gray-200 ease-in-out overflow-hidden ${
                      showParagraph ? "max-h-40" : "max-h-0"
                    } mt-4`}
                  >
                    <li
                      onClick={() => setShowParagraph(!showParagraph)}
                      className={`${rubik.className} px-3 border-b border-solid border-gray-300 text-lg leading-[40px] font-normal flex items-center justify-between`}
                    >
                      Home
                      <span className="h-7 w-7 rounded-sm bg-white  flex items-center justify-center">
                        <TiArrowDown size={20} />
                      </span>
                    </li>
                  </ul>
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
