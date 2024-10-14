import React from "react";
import BreadCumb from "../../../../components/ui/BreadCumb";
import Quote from "../../../../components/ui/blog/Quote";
import BlogNavigation from "../../../../components/ui/blog/BlogNavigation";
import Comments from "../../../../components/ui/blog/Comments";
import BlogContact from "../../../../components/ui/blog/BlogContact";
import RecentPost from "../../../../components/ui/blog/RecentPost";
import Category from "../../../../components/ui/blog/Category";
import Call from "../../../../components/ui/blog/Call";
import Tag from "../../../../components/ui/blog/Tag";
import { rubik } from "@/app/fonts";
import blog from "/public/Blog.json";
import BlogTitle from "../../../../components/ui/blog/BlogTitle";
import FooterTwo from "../../../../components/ui/Footer/FooterTwo";

export async function generateMetadata({ params }) {
  const paramsTitle = params.title
    ?.replace(/%20/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
  return {
    title: paramsTitle + "-Graptor",
    description: "Technology & IT Solutions ",
  };
}
const SingleBlog = ({ params }) => {
  const title = params?.title?.replace(/%20/g, " ");

  const singleBlog = blog.find((item) => item.title === title);

  return (
    <div>
      <BreadCumb currentPage={title} />

      <section className="relative py-[120px]">
        <div className="container mx-auto xl:px-6 px-4">
          <div className="grid grid-cols-12 xs:gap-7 gap-0">
            <div className="lg:col-span-8 col-span-12 relative mb-[43px] transition-all ease-in-out duration-400">
              <div>
                <BlogTitle
                  title={singleBlog?.title}
                  subTitle={singleBlog?.subTitle}
                  img={singleBlog?.img}
                  category={singleBlog?.category}
                  readmore={false}
                  id={singleBlog.id}
                />
              </div>
              <Quote tags={singleBlog?.tag} />
              <div className=" relative border-t border-dashed border-[rgba(8,24,69,0.4)] py-10 mb-[60px] border-b  ">
                <div className="">
                  <BlogNavigation blogs={blog} currentBlogId={singleBlog?.id} />
                </div>
              </div>
              <Comments />
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
      {/* Footer */}
      <FooterTwo />
    </div>
  );
};

export default SingleBlog;
