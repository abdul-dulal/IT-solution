import Link from "next/link";
import React from "react";
import { BsFileEarmarkPdf } from "react-icons/bs";

const DownloadBtn = () => {
  return (
    <aside className=" bg-[#f0f4f9] rounded-[5px] p-[25px]">
      <h3 className=" text-[28px] text-[rgb(25,25,25)] font-bold leading-[30px] mb-6">
        Brochures
      </h3>
      <p style={{ margin: "-7px 0 30px" }}>
        Existence its certainly explained how improving household pretended.
      </p>
      <Link
        className=" flex gap-2 text-lg font-medium text-[#191919] mt-5 hover:text-primary"
        href="javascript:void(0)"
      >
        <BsFileEarmarkPdf className="text-5xl  -mt-[5px] text-primary " />
        Download Service
      </Link>
      <Link
        className=" flex gap-2 text-lg font-medium text-[#191919] mt-5 hover:text-primary"
        href="javascript:void(0)"
      >
        <BsFileEarmarkPdf className="text-5xl  -mt-[5px] text-primary " />
        Download Feature
      </Link>
    </aside>
  );
};

export default DownloadBtn;
