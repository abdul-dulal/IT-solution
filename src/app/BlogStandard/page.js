import React from "react";
import BreadCumb from "../../../components/ui/BreadCumb";
import { rubik } from "../fonts";
import blog from "/public/Blog.json";
import BlogTitle from "../../../components/ui/blog/BlogTitle";
import RecentPost from "../../../components/ui/blog/RecentPost";
import Category from "../../../components/ui/blog/Category";
import Tag from "../../../components/ui/blog/Tag";
import Call from "../../../components/ui/blog/Call";
import BlogContact from "../../../components/ui/blog/BlogContact";

export const metadata = {
  title: "Blog Standard-Graptor",
  description: "Technology & IT Solutions ",
};
import Blogs from "../../../components/ui/Blogs";
const BlogStandard = () => {
  return (
    <div>
      <BreadCumb currentPage="Blog Standard" />
      <section className="relative py-[120px]">
        <div className="container mx-auto xl:px-6 px-4">
          <div className="grid grid-cols-12 gap-7">
            <div className="col-span-8 relative mb-[43px] transition-all ease-in-out duration-400">
              <Blogs blogs={blog} />
            </div>
            <div className="col-span-4">
              <div className=" relative pl-[10px]">
                <aside className="">
                  <BlogContact />
                </aside>
                <aside className=" relative p-0 my-[42px]">
                  <h3
                    className={`${rubik.className}  capitalize relative text-[28px] font-bold leading-[36px] mb-11 after:absolute after:w-[50px] after:h-[3px] after:bg-primary after:left-0 after:-bottom-2 after:content-['']`}
                  >
                    Recent Post
                  </h3>
                  <RecentPost slug="/blog" />
                </aside>
                <aside className=" ">
                  <h3
                    className={`${rubik.className}  capitalize relative text-[28px] font-bold leading-[36px] mb-11 after:absolute after:w-[50px] after:h-[3px] after:bg-primary after:left-0 after:-bottom-2 after:content-['']`}
                  >
                    Categories
                  </h3>
                  <Category slug="/category" />
                </aside>
                <aside className="">
                  <Call />
                </aside>
                <aside className=" capitalize font-normal  ">
                  <h3
                    className={`${rubik.className} capitalize relative text-[28px] font-bold my-11 leading-[36px]  after:absolute after:w-[50px] after:h-[3px] after:bg-primary after:left-0 after:-bottom-2 after:content-['']`}
                  >
                    popular tags
                  </h3>
                  <div className=" relative">
                    <Tag />
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogStandard;
