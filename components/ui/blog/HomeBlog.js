import React from "react";
import blog from "/public/Blog.json";
import Image from "next/image";
import Link from "next/link";
const HomeBlog = () => {
  const blogs = blog.slice(0, 3);
  return (
    <div className="grid  xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  gap-7">
      {blogs?.map((blog) => {
        return (
          <div key={blog.id}>
            <div
              style={{ boxShadow: "0px 0 20px 0px rgb(152 152 152 / 16%)" }}
              className="blogItem relative transition-all ease-out duration-400 mb-[30px] hover:-translate-y-[10px]"
            >
              <div className="biThumb relative  ">
                <Image
                  src={blog.img}
                  width={200}
                  height={50}
                  className="w-full"
                  alt="Blog"
                />
                <div className="biMeta absolute bottom-[25px] left-[25px] w-auto z-[2] bg-primary text-white text-sm leading-[30px] capitalize px-[15px] font-normal transition-all ease-out duration-300 hover:bg-[#081845]">
                  <Link href={`/blog/${blog.title}`} className="mr-6 relative ">
                    Mark Smith
                  </Link>
                  <Link href={`/blog/${blog.title}`} className="mr-6 relative ">
                    02 Apr, 2021
                  </Link>
                </div>
              </div>
              <div className="biDetails py-8 px-6">
                <h3 className="text-[22px] font-bold relative block leading-[30px] mb-[14px] text-[#191919]">
                  <Link
                    href={`/blog/${blog.title}`}
                    className="hover:text-primary  hover:transition-all hover:ease-in-out hover:duration-300"
                  >
                    {blog.title}
                  </Link>
                </h3>
                <p className="text-[17px] leading-[27px] mb-4 line-clamp-2">
                  {blog.subTitle}
                </p>
                <Link
                  href={`/blog/${blog.title}`}
                  className="group relative overflow-hidden inline-block text-lg  text-[#191919] font-medium tracking-[1px] leading-[24px] hover:text-primary"
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
                    className="absolute left-0 top-0 pointer-events-none opacity-[1] transform group-hover:translate-x-[calc(-66.6%)] group-hover:stroke-primary "
                  >
                    <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeBlog;
