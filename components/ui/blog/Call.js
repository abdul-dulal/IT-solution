import { rubik } from "@/app/fonts";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Call = () => {
  return (
    <div className="  pt-[60px] px-5 pb-[50px]  w-full min-h-[350px] text-center rounded-[10px] bg-center bg-cover bg-no-repeat relative bg-[url('/img/blog/blog2.jpg')] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:content-[''] after:bg-primary after:rounded-[10px] after:opacity-95">
      <div className="flex justify-center items-center">
        <span className=" call relative z-[2] w-[70px] h-[70px] flex items-center justify-center bg-white rounded-[50%] text-center  text-primary leading-[70px] text-[24px] mb-[35px]">
          <FaPhoneAlt className="" />
        </span>
      </div>
      <h4
        className={`${rubik.className} text-white leading-[40px] text-[25px] mb-7 relative z-[2]`}
      >
        Have any Questions? <br />
        Call us Today!
      </h4>
      <Link
        href="tel:+1245698909"
        className="text-white relative z-[2] leading-[40px] text-[25px] font-extrabold inline-block"
      >
        + 124 569 89 09
      </Link>
    </div>
  );
};

export default Call;
