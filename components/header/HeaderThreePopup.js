"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoLogoWhatsapp, IoSearchOutline } from "react-icons/io5";
import { LuAlignRight } from "react-icons/lu";

import SearchPopup from "./SearchPopup";
import Sider from "./Sider";
const HeaderThreePopup = () => {
  const [hover, setHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [searchPopup, setSearchPopup] = useState(false);
  return (
    <div>
      <div className="flex gap-5">
        <Link
          href="javascript:void(0);"
          onClick={() => setSearchPopup(!searchPopup)}
          className={`transition-all duration-[5s] ease-in-out  py-10 border-l border-[rgba(255,255,255,0.1)] border-solid pl-6 text-white hover:text-black`}
        >
          <IoSearchOutline size={24} />
        </Link>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="transition-all duration-600 ease-linear border-l border-[rgba(255,255,255,0.1)] border-solid  block px-6 pr-5 py-10  cursor-pointer text-white hover:text-black"
        >
          {hover ? (
            <HiMiniBars3BottomRight
              size={28}
              onClick={() => setIsVisible(!isVisible)}
            />
          ) : (
            <LuAlignRight size={28} onClick={() => setIsVisible(!isVisible)} />
          )}
        </div>
      </div>
      <Sider isVisible={isVisible} setIsVisible={setIsVisible} />
      <SearchPopup searchPopup={searchPopup} setSearchPopup={setSearchPopup} />
    </div>
  );
};

export default HeaderThreePopup;
