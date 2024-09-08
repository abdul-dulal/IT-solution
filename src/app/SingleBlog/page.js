import Link from "next/link";
import React from "react";
import BreadCumb from "../../../components/ui/BreadCumb";
import BlogTitle from "../../../components/ui/blog/BlogTitle";
import blog1 from "/public/img/blog/blog1.jpg";

import RecentPost from "../../../components/ui/blog/RecentPost";

import blog from "/public/Blog.json";
import Call from "../../../components/ui/blog/Call";
import Category from "../../../components/ui/blog/Category";
import { rubik } from "../fonts";
import Tag from "../../../components/ui/blog/Tag";
import BlogContact from "../../../components/ui/blog/BlogContact";
import Quote from "../../../components/ui/blog/Quote";
import FooterTwo from "../../../components/ui/Footer/FooterTwo";
const SingleBlog = () => {
  const recentPost = blog.slice(0, 5);
  const uniqueCategories = [...new Set(blog?.map((item) => item.category))];
  const tag = [...new Set(blog?.map((item) => item.tag))];
  return (
    <div>
      <BreadCumb currentPage="Committed Printing Available Text Available." />
      <section className="relative py-[120px]">
        <div className="container mx-auto xl:px-6 px-4">
          <div className="grid grid-cols-12 gap-7">
            <div className="lg:col-span-8 col-span-12 relative mb-[43px] transition-all ease-in-out duration-400">
              <div>
                <BlogTitle
                  title="Committed Printing Available Text Available."
                  subTitle="Lorem available market standard dummy text available market industry Lorem Ipsum simply dummy text of free available market.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,"
                  img={blog1}
                  category="graphics design"
                  readmore={false}
                  slug="/category"
                />
              </div>
              <Quote />
            </div>
            <div className="lg:col-span-4 col-span-12">
              <div className=" relative pl-[10px]">
                <aside className="">
                  <BlogContact />
                </aside>
                <aside className=" relative p-0 my-[42px]">
                  <h3
                    className={`${rubik.className}  capitalize relative md:text-[28px] text-[23px] font-bold md:leading-[36px] leading-8 mb-11 after:absolute after:w-[50px] after:h-[3px] after:bg-primary after:left-0 after:-bottom-2 after:content-['']`}
                  >
                    Recent Post
                  </h3>
                  <RecentPost recentPost={recentPost} slug="/blog" />
                </aside>
                <aside className=" ">
                  <h3
                    className={`${rubik.className}  capitalize relative md:text-[28px] text-[23px] font-bold md:leading-[36px] leading-8 mb-11 after:absolute after:w-[50px] after:h-[3px] after:bg-primary after:left-0 after:-bottom-2 after:content-['']`}
                  >
                    Categories
                  </h3>
                  <Category category={uniqueCategories} slug="/category" />
                </aside>
                <aside className="">
                  <Call />
                </aside>
                <aside className=" capitalize font-normal  ">
                  <h3
                    className={`${rubik.className}  capitalize relative md:text-[28px] text-[23px] font-bold md:leading-[36px] leading-8 mb-11 mt-9 after:absolute after:w-[50px] after:h-[3px] after:bg-primary after:left-0 after:-bottom-2 after:content-['']`}
                  >
                    popular tags
                  </h3>
                  <div className=" relative">
                    <Tag tag={tag} slug="/tag" />
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}

      <FooterTwo />
    </div>
  );
};

export default SingleBlog;
