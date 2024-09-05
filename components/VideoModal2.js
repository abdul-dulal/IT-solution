"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RiPlayLargeLine } from "react-icons/ri";
import ModalVideo from "react-modal-video";
import rounded from "/public/img/about/rounded.png";

const VideoModalTwo = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="SZEflIVnhH8"
        onClose={() => setOpen(false)}
      />
      <button
        onClick={() => setOpen(true)}
        style={{
          boxShadow: " 0px 10px 30px 0px rgba(0, 0, 0, 0.07)",
        }}
        className="video-popup hover:text-primary hover:transition-all hover:ease-linear duration-400 w-[229px] h-[229px] border-[11px] border-solid border-white rounded-[50%] text-center  text-[42px] text-white absolute right-0 xs:bottom-[120px] bottom-0 z-[2] after:absolute after:right-0 after:top-0 after:w-full after:h-full after:rounded-[50%] after:content-[''] after:bg-[rgba(8,24,69,0.7)]"
      >
        <Image src={rounded} className="rounded-[50%] " alt="Video Image" />
        <RiPlayLargeLine className="inline-block  absolute left-0 leading-[206px] z-[2] right-0 top-0  bottom-0 m-auto " />
      </button>
    </div>
  );
};

export default VideoModalTwo;
