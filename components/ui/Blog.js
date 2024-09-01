import Image from "next/image";
import React from "react";
import Link from "next/link";
const Blog = ({ img, title, subTitle }) => {
  return (
    <div
      style={{ boxShadow: "0px 0 20px 0px rgb(152 152 152 / 16%)" }}
      class="blogItem relative transition-all ease-out duration-400 mb-[30px] hover:-translate-y-[10px]"
    >
      <div class="biThumb relative  ">
        <Image
          src={img}
          width={200}
          height={50}
          className="w-full"
          alt="Blog"
        />
        <div class="biMeta absolute bottom-[25px] left-[25px] w-auto z-[2] bg-primary text-white text-sm leading-[30px] capitalize px-[15px] font-normal transition-all ease-out duration-300 hover:bg-[#081845]">
          <Link href="" className="mr-6 relative ">
            Mark Smith
          </Link>
          <Link href="" className="mr-6 relative ">
            02 Apr, 2021
          </Link>
        </div>
      </div>
      <div class="biDetails py-8 px-6">
        <h3 className="text-[22px] font-bold relative block leading-[30px] mb-[14px] text-[#191919]">
          <Link
            href={`/blog/${title}`}
            className="hover:text-primary  hover:transition-all hover:ease-in-out hover:duration-300"
          >
            {title}
          </Link>
        </h3>
        <p className="text-[17px] leading-[27px] mb-4 line-clamp-2">
          {subTitle}
        </p>
        <Link
          href={`/blog/${title}`}
          class="blog_more relative overflow-hidden inline-block text-base  text-[#191919] font-normal tracking-[1px] leading-[24px] hover:text-primary"
        >
          Learn More
          <svg
            style={{
              fill: "none",
              stroke: "#191919",
              strokeWidth: "2px",
              transition: "transform 0.7s",
            }}
            width="300%"
            height="100%"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            className="absolute left-0 top-0 pointer-events-none opacity-[1] "
          >
            <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
