"use client";
import { rubik } from "@/app/fonts";
import Image from "next/image";
import React, { useState } from "react";
import user from "/public/img/blog/user.png";
import CommentFrom from "./CommentFrom";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaCheckCircle,
  FaTwitter,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import author from "/public/img/blog/author2.jpg";
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
      <div class="post-author relative bg-[#f0f4f9] rounded-[10px] pt-10 pb-10 pr-[30px] pl-[200px]">
        <Image
          src={author}
          className="rounded-[50%] absolute left-[35px] top-0 bottom-0 m-auto"
          alt=""
        />
        <h4
          className={`${rubik.className} text-primary text-[24px] font-bold mb-1`}
        >
          <Link href="blog1.html">Admin Jesik</Link>
        </h4>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore.
        </p>
        <div class="relative">
          <Link
            href="https://www.facebook.com/"
            className="inline-block text-[rgba(8,24,69,0.4)] text-xl hover:text-primary"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="https://twitter.com/"
            className="inline-block text-[rgba(8,24,69,0.4)] text-xl ml-5 hover:text-primary"
          >
            <FaTwitter />
          </Link>
          <Link
            href="https://web.whatsapp.com/"
            className="inline-block text-[rgba(8,24,69,0.4)] text-xl ml-5 hover:text-primary"
          >
            <IoLogoWhatsapp />
          </Link>
          <Link
            href="http://instagram.com/"
            className="inline-block text-[rgba(8,24,69,0.4)] text-xl ml-5 hover:text-primary"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>

      <h3
        class={`${rubik.className}  capitalize relative text-[36px] font-bold leading-[36px]  my-14 after:absolute after:w-[50px] after:h-[3px] after:bg-primary after:left-0 after:-bottom-4 after:content-['']`}
      >
        Comments
      </h3>
      <ol class="">
        <li>
          {comments?.map((item) => {
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
