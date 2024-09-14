"use client";
import { useState } from "react";
import VideoModal from "../../components/ui/VideoModal";
import VideoModalTwo from "../../components/VideoModal2";
const VideoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = (e) => {
    // Prevent closing when clicking inside the video container
    e.stopPropagation();
  };

  return (
    <div>
      <button
        onClick={togglePopup}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Vide
      </button>
      <VideoModalTwo />

      {isOpen && (
        <div
          onClick={togglePopup} // Closes popup if clicked on the overlay
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-75"
        >
          <div
            onClick={closePopup} // Stops propagation to prevent closing when clicking inside the popup
            className="relative w-[95%] h-[95%] bg-white"
          >
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-2xl text-black"
            >
              &times;
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPopup;
