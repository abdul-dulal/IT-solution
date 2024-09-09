import { rubik } from "@/app/fonts";
import Link from "next/link";
import React from "react";

const List = ({ title, path }) => {
  return (
    <div>
      <Link
        href={path}
        className={`${rubik.className} text-[16px] leading-[50px] font-normal text-black  border-b  border-solid border-gray-200  flex items-center justify-between`}
      >
        {title}
      </Link>
    </div>
  );
};

export default List;
