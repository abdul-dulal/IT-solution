"use client";
import { useState, useEffect } from "react";
import { BiArrowToTop } from "react-icons/bi";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`moveTop flex items-center  justify-center fixed bottom-8 right-6 p-3 leading-[42px] h-10 w-10 bg-primary text-white z-[999] rounded-[50%] cursor-pointer transform transition-all duration-500 ease-in-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <BiArrowToTop size={24} />
    </button>
  );
};

export default ScrollToTopButton;
