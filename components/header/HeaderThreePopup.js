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
      <div className="flex gap-5 relative">
        <Link
          href=""
          onClick={() => setSearchPopup(!searchPopup)}
          className={`relative transition-all duration-500 ease-in-out  after:absolute after:top-0 after:left-0 after:w-[1px] after:h-[85%] after:bg-[rgba(255,255,255,0.1)] before:absolute before:top-0 before:-right-5 before:w-[1px] before:h-[85%] before:bg-[rgba(255,255,255,0.1)] py-10   pl-6 text-white hover:text-black`}
        >
          <IoSearchOutline size={24} />
        </Link>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="transition-all duration-500 ease-linear    block px-6 pr-5 py-10  cursor-pointer text-white hover:text-black"
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
