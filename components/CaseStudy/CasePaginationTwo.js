"use client";
import Link from "next/link";
import React, { useState } from "react";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

const CasePagination = ({ path }) => {
  const [currentPath, setCurrentPath] = useState({ path });

  return (
    <div className="mb-20 flex gap-5 justify-center hover:transition-all hover:duration-300 hover:ease-in-out ">
      <Link
        href="/CaseStudyTwo"
        className={`h-[60px] w-[60px] rounded-full bg-[#f0f4f9] flex items-center text-[#222] hover:bg-primary justify-center text-xl hover:transition-all hover:duration-300 hover:ease-in-out hover:text-white ${
          currentPath.path == "/CaseStudyTwo" ? "hidden" : "block"
        }`}
      >
        <TfiAngleLeft />
      </Link>

      {currentPath.path === "/CaseStudyTwo" ? (
        <span
          className={`h-[60px] w-[60px] rounded-full bg-primary text-white flex items-center justify-center text-xl`}
        >
          1
        </span>
      ) : (
        <Link
          href="/CaseStudyTwo"
          className={`h-[60px] w-[60px] rounded-full bg-[#f0f4f9] flex items-center hover:bg-primary justify-center text-xl hover:transition-all hover:duration-300 hover:ease-in-out text-[rgb(34,34,34)] hover:text-white`}
        >
          1
        </Link>
      )}
      {currentPath.path === "/CaseStudyTwo/page2" ? (
        <span
          className={`h-[60px] w-[60px] rounded-full bg-primary text-white flex items-center justify-center text-xl`}
        >
          2
        </span>
      ) : (
        <Link
          href="/CaseStudyTwo/page2"
          className={`h-[60px] w-[60px] rounded-full bg-[#f0f4f9] flex items-center hover:bg-primary justify-center text-xl hover:transition-all hover:duration-300 hover:ease-in-out text-[rgb(34,34,34)] hover:text-white`}
        >
          2
        </Link>
      )}

      <Link
        href="/CaseStudyTwo/page2"
        className={`h-[60px] w-[60px] rounded-full bg-[#f0f4f9] flex items-center text-[#222] hover:bg-primary justify-center text-xl hover:transition-all hover:duration-300 hover:ease-in-out hover:text-white ${
          currentPath.path == "/CaseStudyTwo/page2" ? "hidden" : "block"
        }`}
      >
        <TfiAngleRight />
      </Link>
    </div>
  );
};

export default CasePagination;
