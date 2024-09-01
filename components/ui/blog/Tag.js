import { rubik } from "@/app/fonts";
import Link from "next/link";
import React from "react";
import blog from "/public/Blog.json";
const Tag = ({ slug }) => {
  const allTags = blog.flatMap((blog) => blog.tag);
  const uniqueTags = [...new Set(allTags)];

  return (
    <div>
      {uniqueTags.map((item) => {
        return (
          <Link
            key={item}
            href={`${slug}/${item}`}
            style={{
              margin: "0 8px 12px 0",
              boxShadow: "0px 0 20px 0px rgba(130,130,13,0.09)",
            }}
            className={`${rubik.className} relative text-center inline-block text-lg text-secondary lowercase h-10 rounded-[30px] bg-white leading-[40px] px-[22px] hover:transition-all hover:ease-linear hover:duration-300  hover:bg-primary hover:text-white`}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
};

export default Tag;
