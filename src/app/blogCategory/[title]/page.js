import React from "react";
import BreadCumb from "../../../../components/ui/BreadCumb";
import BlogTitle from "../../../../components/ui/blog/BlogTitle";
import BlogContact from "../../../../components/ui/blog/BlogContact";
import RecentPost from "../../../../components/ui/blog/RecentPost";
import Category from "../../../../components/ui/blog/Category";
import Call from "../../../../components/ui/blog/Call";
import Tag from "../../../../components/ui/blog/Tag";
import blog from "/public/Blog.json";
import { rubik } from "@/app/fonts";

export async function generateMetadata({ params }) {
  const paramsTitle = params.title
    ?.replace(/%20/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
  return {
    title: paramsTitle + "-Graptor",
    description: "Technology & IT Solutions ",
  };
}
const BlogCategory = ({ params }) => {
  const title = params.title?.replace(/%20/g, " ");
  const categories = blog.filter((item) => item.category == title);

  return (
    <div>
      <BreadCumb currentPage={title} />
      <section className="relative py-[120px]">
        <div className="container mx-auto xl:px-6 px-4">
          <div className="grid grid-cols-12 gap-7">
            <div className="lg:col-span-8 col-span-12 relative mb-[43px] transition-all ease-in-out duration-400">
              <div>
                {categories?.map((category) => {
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
                  <RecentPost slug="/blog" />
                </aside>
                <aside className=" ">
                  <h3
                    className={`${rubik.className}  capitalize relative md:text-[28px] text-[23px] font-bold md:leading-[36px] leading-8 mb-11 after:absolute after:w-[50px] after:h-[3px] after:bg-primary after:left-0 after:-bottom-2 after:content-['']`}
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
                    className={`${rubik.className}  capitalize relative md:text-[28px] text-[23px] font-bold md:leading-[36px] leading-8 mb-11 mt-9 after:absolute after:w-[50px] after:h-[3px] after:bg-primary after:left-0 after:-bottom-2 after:content-['']`}
                  >
                    popular tags
                  </h3>
                  <div className=" relative">
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