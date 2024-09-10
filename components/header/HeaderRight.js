"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import SearchPopup from "./SearchPopup";
import { rubik } from "@/app/fonts";

const HeaderRight = () => {
  const [searchPopup, setSearchPopup] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-center xs:gap-9 gap-5">
        <Link
          href="javascript:void(0);"
          onClick={() => setSearchPopup(!searchPopup)}
        >
          <IoSearchOutline size={24} color="white" className="xs:mt-0 mt-3" />
        </Link>
        <Link
          href=""
          className={`${rubik.className}   h-[50px] xl:flex lg:hidden xs:flex hidden  items-center text-[16px]  leading-[.8] text-white overflow-hidden relative z-[1] text-center capitalize font-medium bg-primary py-[14px] px-[25px]  cursor-pointer rounded-[5px] transform  transition-all duration-400 hover:text-white before:absolute before:content-[''] before:w-full before:h-0 before:left-0 before:top-0 before:-z-[1] before:bg-secondary before:transition-height before:duration-400 before:ease-custom-ease before:delay-0  grap-btn`}
        >
          Get A Quote
        </Link>
      </div>
      <SearchPopup searchPopup={searchPopup} setSearchPopup={setSearchPopup} />
    </div>
  );
};

export default HeaderRight;
