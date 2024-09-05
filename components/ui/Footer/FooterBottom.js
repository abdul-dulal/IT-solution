import Link from "next/link";
import React from "react";

const FooterBottom = () => {
  return (
    <div className="">
      <div className="grid grid-cols-12  relative pt-[22px] pb-7 border-t border-solid border-[rgba(255,255,255,0.1)]">
        <div className="xs:col-span-7 col-span-12 xs:text-left text-center ">
          <p className="text-[rgba(255,255,255,0.5)] text-lg font-normal leading-[30px]">
            &copy;{" "}
            <Link
              href="https://psdtowpwork.com/"
              className="hover:text-primary"
            >
              Nsstheme
            </Link>
            2021 | All Rights Reserved.
          </p>
        </div>
        <div className="xs:col-span-5 col-span-12">
          <ul className="m-0 p-0 xs:text-right text-center xs:my-0 my-5">
            <li className="relative mb-5 inline-block after:absolute after:-right-4 after:top-[6px] after:h-3 after:w-[2px] after:content-[''] after:bg-[rgba(255,255,255,0.5)] after:mr-1">
              <Link
                href=""
                className="text-[rgba(255,255,255,0.5)] hover:text-primary"
              >
                About
              </Link>
            </li>
            <li className="relative px-6 mb-5 inline-block after:absolute after:-right-[6px] after:top-[6px] after:h-3 after:w-[2px] after:content-[''] after:bg-[rgba(255,255,255,0.5)] after:mr-4">
              <Link
                href="https://www.google.com/maps"
                className="text-[rgba(255,255,255,0.5)] hover:text-primary"
              >
                Sitemap
              </Link>
            </li>
            <li className="relative mb-5 inline-block ">
              <Link
                href=""
                className="text-[rgba(255,255,255,0.5)] hover:text-primary"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
