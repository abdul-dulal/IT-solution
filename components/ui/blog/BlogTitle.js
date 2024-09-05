import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCaretRight } from "react-icons/fa";
import author from "/public/img/blog/Author.jpg";
import { rubik } from "@/app/fonts";

const BlogTitle = ({ title, subTitle, img, category, readmore, slug }) => {
  return (
    <div>
      <div className=" relative mb-9">
        <Image
          src={img}
          width={750}
          height={200}
          className="rounded-[5px] h-[400px] mt-10 mx-auto"
          alt="Blog"
        />
      </div>
      <div className=" relative">
        <div className=" inline-block relative mr-3">
          <Link
            href={`/category/${category}`}
            className={`${rubik.className} inline-block h-[42px] bg-primary text-center rounded-[5px] text-[12px] leading-[42px] text-white mr-[10px] mb-[10px] tracking-[1.2px] uppercase px-[14px] hover:bg-black hover:text-white`}
          >
            {category}
          </Link>
        </div>
        <div
          className={`${rubik.className}  relative top-5 inline-block pl-[58px]  pt-[8px]`}
        >
          <Image
            src={author}
            className="rounded-[50%] absolute top-0 left-0 w-11 h-11"
            alt="Author"
          />
          <Link
            href=""
            className="uppercase block text-[15px] leading-[17px] text-secondary font-medium mb-[7px] hover:text-primary"
          >
            Mark Smith
          </Link>
          <span className="block text-secondary text-sm leading-3[17px] font-normal">
            02 Apr, 2021
          </span>
        </div>
        {readmore ? (
          <h3
            className={` text-[34px] leading-[38px] mt-[19px] mb-[15px] font-bold`}
          >
            <Link href={`${slug}/${title}`}>{title}</Link>
          </h3>
        ) : (
          ""
        )}
        <p className={`${readmore ? "line-clamp-2" : ""} mb-[22px] mt-10`}>
          {subTitle}
        </p>
        {readmore ? (
          <Link
            className={` ${rubik.className} group  flex items-center text-base text-secondary font-bold uppercase hover:text-primary`}
            href={`${slug}/${title}`}
          >
            Read More
            <span className="text-[22px] relative text-primary pl-[15px] transition-all ease-in-out duration-400 group-hover:pl-5">
              <FaCaretRight />
            </span>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BlogTitle;
