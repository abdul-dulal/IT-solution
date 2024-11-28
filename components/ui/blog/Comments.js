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
  const [replay, setReplay] = useState("");
  const [comments, setComment] = useState([
    {
      id: 1,
      comment:
        "Lorem available market standard dummy text available marketindustry Lorem Ipsum simply dummy text available market.Thereare many variations",
      author: "abdul dulal",
      replay: [],
      img: "/img/blog/author2.jpg",
    },
    {
      id: 2,
      comment:
        "Lorem market standard dummy available market industry Lorem Ipsum simply dummy text",
      author: "Mark Smith",
      replay: [],
      img: "/img/blog/author3.jpg",
    },
    {
      id: 3,
      comment:
        "Proin vitae dignissim enim, a iaculis sapien. nisi et dignissim efficitur, sapien lorem et tristique nulla lectus faucibus est Pellentesque dapibus",
      author: "Jhon Deo",
      replay: [],
      img: "/img/blog/Author.jpg",
    },
  ]);

  const handleReplay = (author) => {
    setReplay(author);
  };

  return (
    <div className="">
      <div className=" relative bg-[#f0f4f9] rounded-[10px] pt-10 pb-10 pr-[30px] xs:pl-[200px] pl-6 ">
        <Image
          src={author}
          className="rounded-[50%] xs:absolute xs:left-[35px]  top-0 bottom-0 xs:m-auto "
          alt={author}
        />
        <h4
          className={`${rubik.className} text-primary text-[24px] font-bold mb-1 xs:mt-0 mt-4`}
        >
          Admin Jesik
        </h4>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore.
        </p>
        <div className="relative">
          <Link
            href="https://www.facebook.com/"
            target="blank"
            className="inline-block text-[rgba(8,24,69,0.4)] text-xl hover:text-primary"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="https://twitter.com/"
            target="blank"
            className="inline-block text-[rgba(8,24,69,0.4)] text-xl ml-5 hover:text-primary"
          >
            <FaTwitter />
          </Link>
          <Link
            href="https://web.whatsapp.com/"
            target="blank"
            className="inline-block text-[rgba(8,24,69,0.4)] text-xl ml-5 hover:text-primary"
          >
            <IoLogoWhatsapp />
          </Link>
          <Link
            href="http://instagram.com/"
            target="blank"
            className="inline-block text-[rgba(8,24,69,0.4)] text-xl ml-5 hover:text-primary"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>

      <h3
        className={`${rubik.className}  capitalize relative text-[36px] font-bold leading-[36px]  my-14 after:absolute after:w-[50px] after:h-[3px] after:bg-primary after:left-0 after:-bottom-4 after:content-['']`}
      >
        Comments
      </h3>
      <ol className="">
        <li>
          {comments?.map((item) => {
            return (
              <div
                key={item.id}
                className={`${item.id % 2 == 0 ? "xs:ml-10 ml-4" : ""}`}
              >
                <div
                  className={`p-2  xs:flex xs:gap-12 relative rounded-[10px] border border-solid border-[#d1d1d1] pt-10 px-10 pb-14 mb-7`}
                >
                  <Image
                    className="  w-[97px] h-[97px] rounded-[50%]"
                    src={item.img}
                    width={70}
                    height={70}
                    alt={item.author}
                  />

                  <div>
                    <h5
                      className={`${rubik.className} uppercase text-xl text-secondary font-medium mb-3 xs:mt-0 mt-3`}
                    >
                      {item.author}
                    </h5>
                    <p className="text-sm my-2">02 December, 2021</p>
                    <div className="">
                      <p className="leading-[30px]">{item.comment}</p>
                    </div>
                    <button
                      onClick={() => handleReplay(item.author)}
                      className={`${rubik.className}  inline-block text-sm leading-[0.8] text-secondary font-medium uppercase hover:text-primary mt-4`}
                    >
                      Reply
                    </button>
                  </div>
                </div>
                <div>
                  {item.replay && (
                    <div>
                      {item.replay.map((item) => {
                        return (
                          <div
                            key={item.comment}
                            className={`p-2  flex gap-12 relative rounded-[10px] border border-solid border-[#d1d1d1] pt-10 px-10 pb-14 mb-7`}
                          >
                            <Image
                              className="  w-[97px] h-[97px] rounded-[50%]"
                              src={item.img}
                              width={70}
                              height={70}
                              alt={item.author}
                            />

                            <div>
                              <h5
                                className={`${rubik.className} uppercase text-xl text-secondary font-medium mb-3`}
                              >
                                {item.author}
                              </h5>
                              <p className="text-sm my-2">02 December, 2021</p>
                              <div className="">
                                <p className="leading-[30px]">{item.comment}</p>
                              </div>
                              <button
                                onClick={() => handleReplay(item.author)}
                                className={`${rubik.className}  inline-block text-sm leading-[0.8] text-secondary font-medium uppercase hover:text-primary mt-4`}
                              >
                                Reply
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                <div className={`mb-14 ${item.id % 2 == 0 ? "ml-10" : ""}`}>
                  {replay == item.author && (
                    <div className="">
                      <div className="flex justify-between items-center">
                        <h3
                          className={`${rubik.className}  capitalize relative text-[36px] font-bold leading-[36px] my-14 after:absolute after:w-[50px] after:h-[3px] after:bg-primary after:left-0 after:-bottom-2 after:content-['']`}
                        >
                          Leave a Replay
                        </h3>
                        <button
                          onClick={() => setReplay("")}
                          className={`${rubik.className} text-sm leading-[11px] text-primary uppercase font-medium `}
                        >
                          cancel replay
                        </button>
                      </div>
                      <CommentFrom
                        comments={comments}
                        setComment={setComment}
                        isReplay={false}
                        replay={replay}
                        setReplay={setReplay}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </li>
      </ol>
      {replay == "" && (
        <div className="">
          <h3
            className={`${rubik.className}  capitalize relative text-[36px] font-bold leading-[36px] my-14 after:absolute after:w-[50px] after:h-[3px] after:bg-primary after:left-0 after:-bottom-2 after:content-['']`}
          >
            Leave a Replay
          </h3>
          <CommentFrom
            comments={comments}
            setComment={setComment}
            isReplay={true}
          />
        </div>
      )}
    </div>
  );
};

export default Comments;
