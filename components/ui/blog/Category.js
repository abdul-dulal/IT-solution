import { rubik } from "@/app/fonts";
import Link from "next/link";
import React from "react";
import { FaCaretRight } from "react-icons/fa";
import blog from "/public/Blog.json";
const Category = ({ slug }) => {
  const uniqueCategories = [...new Set(blog.map((item) => item.category))];

  return (
    <div>
      <ul>
        {uniqueCategories.map((item) => {
          return (
            <li key={item}>
              <Link
                href={`${slug}/${item}`}
                key={item}
                className={`${rubik.className} group block relative text-base text-secondary leading-[28px] font-nomal capitalize pl-[30px] border-b border-solid border-[rgba(8,24,69,0.16)] pb-6 mb-5 hover:text-primary`}
              >
                <FaCaretRight className="absolute -left-2 top-1 text-[22px] transition-all text-gray-300 ease-in-out duration-300 group-hover:text-primary  group-hover:pl-[8px]" />
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
