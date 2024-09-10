"use client";
import React, { useState } from "react";
import BreadCumb from "../../../components/ui/BreadCumb";
import Blog from "../../../components/ui/Blog";
import blogs from "/public/Blog.json";

import FooterTwo from "../../../components/ui/Footer/FooterTwo";
import Pagination from "../../../components/ui/blog/Pagination";
export const metadata = {
  title: "Blog Grid 01-Graptor",
  description: "Technology & IT Solutions ",
};
const BlogGridOne = () => {
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
      <section
        style={{ padding: "116px 0 90px" }}
        className="relative pt-[116px]"
      >
        <div className="container mx-auto xs:px-6 px-3">
          <div className="grid  xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  gap-7">
            {currentBlogs?.map((blog) => {
              return (
                <div key={blog.id}>
                  <Blog
                    img={blog.img}
                    title={blog.title}
                    subTitle={blog.subTitle}
                  />
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
      {/* Footer */}
      <FooterTwo />
    </div>
  );
};

export default BlogGridOne;
