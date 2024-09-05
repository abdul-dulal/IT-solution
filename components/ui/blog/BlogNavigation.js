"use client";
import { rubik } from "@/app/fonts";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const BlogNavigation = ({ blogs, currentBlogId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const index = blogs.findIndex((blog) => blog.id === currentBlogId);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  }, [currentBlogId, blogs]);

  const handleNext = () => {
    if (currentIndex < blogs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="grid xs:grid-cols-2 gap-10">
      <div className="text-left">
        {currentIndex > 0 && (
          <div>
            <button
              onClick={handlePrevious}
              className={`${rubik.className} flex  items-center  prev text-[17px] font-semibold tracking-[0.6px] mb-4  text-secondary  hover:text-primary leading-[26px]`}
            >
              <FaAngleLeft className="text-[20px] mr-4 relative " />
              Previous
            </button>

            <Link
              href="single-blog.html"
              className=" text-[18px] leading-[26px]  hover:text-primary block"
            >
              Necessity may give us your best Virtual court system
              {blogs[currentIndex - 1].title}
            </Link>
          </div>
        )}
      </div>

      <div className="text-right">
        {currentIndex < blogs.length - 1 && (
          <div>
            <button
              onClick={handleNext}
              className={`${rubik.className}  flex justify-end w-full   gap-2 items-center text-[17px] font-semibold tracking-[0.6px] mb-4  text-secondary hover:text-primary leading-[26px]`}
            >
              Next <FaAngleRight className="text-[20px] mr-4 relative " />
            </button>
            <Link
              href="single-blog.html"
              className=" text-[18px] leading-[26px]  hover:text-primary block"
            >
              {blogs[currentIndex + 1].title}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogNavigation;
