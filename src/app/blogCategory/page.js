import React from "react";
import blog from "/public/Blog.json";
import BlogTitle from "../../../components/ui/blog/BlogTitle";
import Tag from "../../../components/ui/blog/Tag";
import Call from "../../../components/ui/blog/Call";
import Category from "../../../components/ui/blog/Category";
import RecentPost from "../../../components/ui/blog/RecentPost";
import BlogContact from "../../../components/ui/blog/BlogContact";

import BreadCumb from "../../../components/ui/BreadCumb";
import { rubik } from "../fonts";
const BlogCategory = ({ title }) => {
  const categories = blog.filter((item) => item.category == title);

  return (
    <div>
      <BreadCumb currentPage={title} />
      <section className="relative py-[120px]">
        <div className="container mx-auto xl:px-6 px-4">
          <div className="grid grid-cols-12 gap-7">
            <div class="lg:col-span-8 col-span-12 relative mb-[43px] transition-all ease-in-out duration-400">
              <div>
                {categories.map((category) => {
                  return (
                    <div key={categories.id}>
                      <BlogTitle
                        title={category.title}
                        subTitle={category.subTitle}
                        img={category?.img}
                        category={category?.category}
                        readmore={true}
                        slug="/blog"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div class="lg:col-span-4 col-span-12">
              <div class=" relative pl-[10px]">
                <aside class="">
                  <BlogContact />
                </aside>
                <aside class=" relative p-0 my-[42px]">
                  <h3
                    class={`${rubik.className}  capitalize relative md:text-[28px] text-[23px] font-bold md:leading-[36px] leading-8 mb-11 after:absolute after:w-[50px] after:h-[3px] after:bg-primary after:left-0 after:-bottom-2 after:content-['']`}
                  >
                    Recent Post
                  </h3>
                  <RecentPost slug="/blog" />
                </aside>
                <aside class=" ">
                  <h3
                    class={`${rubik.className}  capitalize relative md:text-[28px] text-[23px] font-bold md:leading-[36px] leading-8 mb-11 after:absolute after:w-[50px] after:h-[3px] after:bg-primary after:left-0 after:-bottom-2 after:content-['']`}
                  >
                    Categories
                  </h3>
                  <Category slug="/category" />
                </aside>
                <aside class="">
                  <Call />
                </aside>
                <aside class=" capitalize font-normal  ">
                  <h3
                    class={`${rubik.className}  capitalize relative md:text-[28px] text-[23px] font-bold md:leading-[36px] leading-8 mb-11 mt-9 after:absolute after:w-[50px] after:h-[3px] after:bg-primary after:left-0 after:-bottom-2 after:content-['']`}
                  >
                    popular tags
                  </h3>
                  <div class=" relative">
                    <Tag slug="/tag" />
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

export default BlogCategory;
