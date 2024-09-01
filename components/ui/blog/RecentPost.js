import { rubik } from "@/app/fonts";
import Link from "next/link";
import React from "react";
import { FaCaretRight } from "react-icons/fa";
import blog from "/public/Blog.json";
const RecentPost = ({slug}) => {
  const recentPost = blog.slice(0, 5);
  return (
    <div>
      <ul className="m-0 p-0">
        {recentPost.map((item) => {
          return (
            <div key={item.id}>
              <Link
                href={`${slug}/${item.title}`}
                className={`${rubik.className} group block relative text-base text-secondary leading-[28px] font-medium pl-[30px] border-b border-dashed border-secondary pb-6 mb-5 hover:text-primary`}
              >
                <FaCaretRight className="absolute -left-2 top-2 text-[22px] transition-all text-gray-300 ease-in-out duration-300 group-hover:text-primary  group-hover:pl-[8px]" />
                {item.title}
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default RecentPost;
