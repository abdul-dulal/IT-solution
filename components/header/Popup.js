"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import ResponsiveHeader from "./ResponsiveHeader";
import SearchPopup from "./SearchPopup";
import { IoSearchOutline } from "react-icons/io5";
import Sider from "./Sider";
const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchPopup, setSearchPopup] = useState(false);

  return (
    <div className="flex xs:gap-0 gap-1.5  items-center">
      <div className="">
        <div className="flex items-center xs:gap-8 gap-4 lg:mr-0 xs:mr-8 mr-0">
          <Link
            href="javascript:void(0);"
            onClick={() => setSearchPopup(!searchPopup)}
            className={`transition-all duration-300 ease-in-out  py-10 `}
          >
            <IoSearchOutline size={24} />
          </Link>

          <Link
            onClick={() => setIsVisible(!isVisible)}
            href="javascript:void(0);"
            className="xs:block hidden"
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
      <Sider isVisible={isVisible} setIsVisible={setIsVisible} />
      <SearchPopup searchPopup={searchPopup} setSearchPopup={setSearchPopup} />
      <ResponsiveHeader bgColor="black" />
    </div>
  );
};

export default Popup;
