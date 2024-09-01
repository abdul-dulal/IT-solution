"use client";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import BlogTitle from "./blog/BlogTitle";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

const Pagination = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const blogsPerPage = 6;

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * blogsPerPage;
  console.log(offset);
  const currentBlogs = blogs?.slice(offset, offset + blogsPerPage);

  return (
    <div>
      <div>
        {currentBlogs?.map((item) => (
          <div key={item.id}>
            <BlogTitle
              title={item.title}
              subTitle={item.subTitle}
              img={item.img}
              category={item.category}
              readmore={true}
              slug="/blog"
            />
          </div>
        ))}
      </div>

      <div className="my-[60px] flex  justify-center hover:transition-all hover:duration-300 hover:ease-in-out ">
        <ReactPaginate
          previousLabel={
            currentPage > 0 ? (
              <span className="h-[60px] w-[60px] rounded-full bg-[#f0f4f9] flex items-center text-[#222] hover:bg-primary justify-center text-xl hover:transition-all hover:duration-300 hover:ease-in-out hover:text-white">
                <TfiAngleLeft />
              </span>
            ) : (
              ""
            )
          }
          nextLabel={
            <span className="h-[60px] w-[60px] rounded-full bg-[#f0f4f9] flex  items-center text-[#222] hover:bg-primary  justify-center text-xl hover:transition-all hover:duration-300 hover:ease-in-out hover:text-white">
              <TfiAngleRight />
            </span>
          }
          pageCount={Math.ceil(blogs?.length / blogsPerPage)}
          onPageChange={handlePageClick}
          previousClassName={"text-2xl font-bold"}
          nextClassName={"text-2xl font-bold"}
          containerClassName={"flex justify-center items-center gap-4"}
          pageClassName={
            "h-[60px] w-[60px] rounded-full bg-[#f0f4f9] flex flex items-center text-[#222] hover:bg-primary  justify-center text-xl hover:transition-all hover:duration-300 hover:ease-in-out hover:text-white"
          }
          activeClassName={
            "h-[60px] w-[60px] rounded-full  bg-primary -pt-6 text-white text-xl flex items-center justify-center"
          }
        />
      </div>
    </div>
  );
};

export default Pagination;
