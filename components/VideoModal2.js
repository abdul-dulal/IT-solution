"use client";
import { useState } from "react";
import Image from "next/image";
import { RiPlayLargeLine } from "react-icons/ri";
import rounded from "/public/img/about/rounded.png";
import { RxCross2 } from "react-icons/rx";
const VideoModalTwo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="relative">
      <button
        style={{
          boxShadow: "0px 10px 30px 0px rgba(0, 0, 0, 0.07)",
        }}
        onClick={togglePopup}
        className="video-popup hover:text-primary hover:transition-all hover:ease-linear duration-400 w-[200px] h-[200px] border-[11px] border-solid border-white rounded-[50%] text-center text-[42px] text-white absolute right-0 xs:bottom-[120px] -bottom-32 z-[2] after:absolute after:right-0 after:top-0 after:w-full after:h-full after:rounded-[50%] after:content-[''] after:bg-[rgba(8,24,69,0.7)]"
      >
        <Image src={rounded} className="rounded-[50%]" alt="Video Image" />
        <RiPlayLargeLine className="inline-block absolute left-0 leading-[206px] z-[2] right-2 top-0 bottom-0 m-auto" />
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
            className="relative w-[90%] h-[90%] bg-white rounded"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/SZEflIVnhH8?si=BH39mJbQuwQ-VpmA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoModalTwo;
