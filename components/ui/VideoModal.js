"use client";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { FaPlay } from "react-icons/fa6";
const VideoModal = () => {
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
        style={{ animationDelay: "2.4s" }}
        className="popup  w-20 h-20  leading-[85px]  relative -top-[22px] rounded-[50%] text-center inline-block text-xl bg-white text-primary z-[2] ml-11 before:absolute before:content-[''] before:border-2 before:border-solid before:border-white before:z-0 before:left-[50%] before:top-[50%] before:-translate-x-[50%] before:block before:w-[160px] before:h-[160px] before:rounded-[50%] after:absolute after:content-[''] after:border-2 after:border-solid after:border-white after:z-0 after:left-[50%] after:top-[50%] after:-translate-x-[50%] after:-translate-y-[50%] after:block after:w-[160px] after:h-[160px] after:rounded-[50%] "
        onClick={() => setOpen(true)}
      >
        <FaPlay className="m-auto" />
      </button>
    </div>
  );
};

export default VideoModal;
