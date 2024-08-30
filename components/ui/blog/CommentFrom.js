import { rubik } from "@/app/fonts";
import React, { useState } from "react";

const CommentFrom = ({ comments, setComment }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [replay, setReplay] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = comments.length + 1;
    setComment((prevComments) => [
      ...prevComments,

      {
        id: id,
        comment: message,
        author: name,
        img: "/img/blog/user.png",
      },
      ,
    ]);
    setName("");
    setMessage("");
    setEmail("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} class="row comment-form relative mt-[50px]">
        <div className="grid xs:grid-cols-2 gap-8">
          <div class=" ">
            <label
              className={`${rubik.className}  cursor-pointer text-lg text-secondary  font-normal`}
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={({ target }) => setName(target.value)}
              required
              className=" w-full  h-14 my-4 border border-solid border-[#ebebeb] outline-none px-4 bg-[#fbfbfb]"
            />
          </div>
          <div class="">
            <label
              className={`${rubik.className} block cursor-pointer text-lg text-secondary  font-normal `}
            >
              Email
            </label>
            <input
              className=" w-full  h-14 my-4 block border  border-solid outline-none px-4 border-[#ebebeb] bg-[#fbfbfb]"
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>
        <div class="">
          <label
            className={`${rubik.className} block cursor-pointer text-lg text-secondary  font-normal`}
          >
            Comment
          </label>
          <textarea
            id="comment"
            name="message"
            value={message}
            required
            onChange={({ target }) => setMessage(target.value)}
            className="w-full  border my-4 border-solid border-[#ebebeb] bg-[#fbfbfb] px-4 pt-6 text-lg text-[rgba(8,24,69,0.8)] pb-5 mb-5 outline-none h-[215px]"
          ></textarea>
        </div>
        <div class="col-lg-12 col-md-12">
          <button
            type="submit"
            className={`${rubik.className} inline-block m-auto w-[200px] md:ml-4   h-[60px]  text-[18px] font-bold leading-[.8] text-white  overflow-hidden relative z-[1] text-center capitalize  bg-primary py-[14px] px-[25px] cursor-pointer rounded-[5px] transform  transition-all duration-400 hover:text-white before:absolute before:content-[''] before:w-full before:h-0 before:left-0 before:top-0 before:-z-[1] before:bg-secondary before:transition-height before:duration-400 before:ease-custom-ease before:delay-0  grap-btn`}
          >
            Post comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentFrom;
