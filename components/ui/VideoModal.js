"use client";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { FaPlay } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
const VideoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = (e) => {
    e.stopPropagation();
  };
  return (
    <div>
      <button
        style={{ animationDelay: "2.4s" }}
        className="popup  w-20 h-20  leading-[85px]  relative -top-[22px] rounded-[50%] text-center inline-block text-xl bg-white text-primary z-[99] ml-11 before:absolute before:content-[''] before:border-2 before:border-solid before:border-white before:z-0 before:left-[50%] before:top-[50%] before:-translate-x-[50%] before:block before:w-[160px] before:h-[160px] before:rounded-[50%] after:absolute after:content-[''] after:border-2 after:border-solid after:border-white after:z-0 after:left-[50%] after:top-[50%] after:-translate-x-[50%] after:-translate-y-[50%] after:block after:w-[160px] after:h-[160px] after:rounded-[50%] "
        onClick={() => setIsOpen(true)}
      >
        <FaPlay className="m-auto" />
      </button>

      {isOpen && (
        <div
          onClick={togglePopup}
          className="fixed inset-0 z-[1001] flex items-center justify-center bg-black bg-opacity-75"
        >
          <button
            onClick={togglePopup}
            className="h-8 w-8 flex items-center justify-center p-[2px] rounded-full border border-solid border-gray-300 absolute top-2 right-2 text-2xl text-white"
          >
            <RxCross2 />
          </button>
          <div
            onClick={closePopup}
            className="relative w-[80%] h-[80%] bg-white rounded"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoModal;
