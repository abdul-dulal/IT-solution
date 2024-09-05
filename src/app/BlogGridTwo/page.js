"use client";
import React, { useState } from "react";
import BreadCumb from "../../../components/ui/BreadCumb";
import Image from "next/image";
import m1 from "/public/img/blog/blog12.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";

import { BiMessageRounded } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import blogs from "/public/Blog.json";
import Pagination from "../../../components/ui/blog/Pagination";
const BlogGridTwo = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const blogsPerPage = 6;
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  const offset = currentPage * blogsPerPage;
  const currentBlogs = blogs?.slice(offset, offset + blogsPerPage);
  return (
    <div>
      <BreadCumb currentPage="Grid Blog" />
      <section className=" relative py-[120px]">
        <div className="container mx-auto xl:px-6 px-4">
          <div className="grid  xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  gap-7">
            {currentBlogs?.map((blog) => {
              return (
                <div key={blog.id}>
                  <div className=" relative mb-8   ">
                    <div className=" group mb-[18px] w-full  overflow-hidden">
                      <div className="relative  ">
                        <Image
                          src={blog.img}
                          width={360}
                          height={360}
                          alt="Description"
                          className="w-full h-[350px] transition-all duration-300 ease-in-out group-hover:scale-[1.1] group-hover:rotate-[1.2deg] group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out"
                        />

                        <div className="absolute inset-0 bg-[rgba(8,24,69,0.7)] transition-all duration-300 ease-in-out h-[350px] "></div>
                      </div>
                      <Link
                        className=" w-[60px] h-[60px] flex items-center justify-center rounded-[50%] text-white leading-[65px] text-center  bg-[rgba(255,255,255,0.5)] absolute left-0 right-0 bottom-[40%] m-auto z-[3] transition-all duration-300 ease-in-out hover:bg-primary hover:text-white"
                        href={`/blog/${blog.title}`}
                      >
                        <FaArrowRight />
                      </Link>
                      <div className="biMeta2 absolute left-0 right-0 m-auto bottom-[25%] z-[3] flex justify-center">
                        <Link
                          href={`/blog/${blog.title}`}
                          className="leading-[24px] text-[16px] text-white hover:text-primary mr-[30px]"
                        >
                          <MdOutlineWatchLater className="inline-block mr-[6px] relative -top-[2px]" />
                          02 Apr, 2021
                        </Link>
                        <Link
                          href={`/blog/${blog.title}`}
                          className="leading-[24px] text-[16px] text-white hover:text-primary mr-[30px]"
                        >
                          <FaUser className="  inline-block mr-[6px] relative -top-[2px]" />
                          Mark Smith
                        </Link>
                        <Link
                          href={`/blog/${blog.title}`}
                          className="leading-[24px] text-[16px] text-white hover:text-primary mr-[30px]"
                        >
                          <BiMessageRounded className="  inline-block mr-[6px] relative -top-[2px]" />
                          3
                        </Link>
                      </div>
                    </div>
                    <h3 className="text-[22px]  block leading-[32px] m-0 text-[#191919] font-bold hover:text-primary">
                      <Link href={`/blog/${blog.title}`}>{blog.title}</Link>
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="my-[60px] flex  justify-center hover:transition-all hover:duration-300 hover:ease-in-out ">
            <Pagination
              currentPage={currentPage}
              blogs={blogs}
              blogsPerPage={blogsPerPage}
              handlePageClick={handlePageClick}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogGridTwo;
