import Image from "next/image";
import Link from "next/link";
import React from "react";

const Client = ({ logo }) => {
  return (
    <div className="client ">
      <Link
        href="javascript:void(0);"
        className="group  overflow-hidden inline-block relative transition-all duration-300 ease-in-out  "
      >
        <Image
          className="hover inline-block max-w-full w-auto transition-all duration-300 ease-in-out absolute top-0 left-0 z-[1] invisible "
          src={logo}
          alt="Client Hover"
        />
        <Image
          className="normal inline-block max-w-full w-auto transition-all duration-300 ease-in-out   "
          src={logo}
          alt="Client Main"
        />
      </Link>
    </div>
  );
};

export default Client;
