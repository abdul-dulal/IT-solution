"use client";
import { rubik } from "@/app/fonts";
import Image from "next/image";
import React, { useState } from "react";
import user from "/public/img/blog/user.png";
import CommentFrom from "./CommentFrom";
const Comments = () => {
  const [comments, setComment] = useState([
    {
      id: 1,
      comment:
        "Lorem available market standard dummy text available marketindustry Lorem Ipsum simply dummy text available market.Thereare many variations",
      author: "jhon shikon",
      img: "/img/blog/author2.jpg",
    },
    {
      id: 2,
      comment:
        "Lorem market standard dummy available market industry Lorem Ipsum simply dummy text",
      author: "Mark Smith",
      img: "/img/blog/author3.jpg",
    },
    {
      id: 3,
      comment:
        "Proin vitae dignissim enim, a iaculis sapien. nisi et dignissim efficitur, sapien lorem et tristique nulla lectus faucibus est Pellentesque dapibus",
      author: "Jhon Deo",
      img: "/img/blog/Author.jpg",
    },
  ]);

  return (
    <div class="">
      <h3
        class={`${rubik.className}  capitalize relative text-[36px] font-bold leading-[36px]  my-14 after:absolute after:w-[50px] after:h-[3px] after:bg-primary after:left-0 after:-bottom-4 after:content-['']`}
      >
        Comments
      </h3>
      <ol class="">
        <li>
          {comments.map((item) => {
            return (
              <div
                key={item.id}
                className={`p-2 ${
                  item.id % 2 == 0 ? "ml-10" : ""
                } flex gap-12 relative rounded-[10px] border border-solid border-[#d1d1d1] pt-10 px-10 pb-14 mb-7`}
              >
                <Image
                  class="  w-[97px] h-[97px] rounded-[50%]"
                  src={item.img}
                  width={70}
                  height={70}
                  alt="Author"
                />

                <div>
                  <h5
                    class={`${rubik.className} uppercase text-xl text-secondary font-medium mb-3`}
                  >
                    {item.author}
                  </h5>
                  <p className="text-sm my-2">02 December, 2021</p>
                  <div class="">
                    <p className="leading-[30px]">{item.comment}</p>
                  </div>
                  <button
                    onClick={() => handleReplay(item.id)}
                    class={`${rubik.className}  inline-block text-sm leading-[0.8] text-secondary font-medium uppercase hover:text-primary mt-4`}
                  >
                    Reply
                  </button>
                </div>
              </div>
            );
          })}
        </li>
      </ol>
      <div class="">
        <h3
          class={`${rubik.className}  capitalize relative text-[36px] font-bold leading-[36px] my-14 after:absolute after:w-[50px] after:h-[3px] after:bg-primary after:left-0 after:-bottom-2 after:content-['']`}
        >
          Leave a Comments
        </h3>
        <CommentFrom comments={comments} setComment={setComment} />
      </div>
    </div>
  );
};

export default Comments;
