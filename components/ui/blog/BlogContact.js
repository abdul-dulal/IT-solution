import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const BlogContact = () => {
  return (
    <div>
      <form class="search-form relative -mt-3" action="#" method="post">
        <input
          type="search"
          name="s"
          placeholder="Search and enter keywords"
          className="w-full h-11 text-base leading-[17px] bg-transparent  text-[#565872]  border-b-[1px] border-solid border-[rgba(8,24,69,0.2)] pb-5 outline-none placeholder:text-[#565872] placeholder:opacity-100"
        />
        <button
          type="submit"
          className="text-xl border-none outline-none h-full p-0 bg-transparent text-[#717171] hover:text-primary leading-[35px] absolute right-0 -top-[2px] transition-all ease-in-out duration-300"
        >
          <IoSearchOutline />
        </button>
      </form>
    </div>
  );
};

export default BlogContact;
