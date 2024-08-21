"use client";
import { useEffect, useState, useRef } from "react";

const ProgressBar = ({ datacount, title }) => {
  const [width, setWidth] = useState(0);
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef(null);
  const counterRef = useRef(counter);

  useEffect(() => {
    const handleScroll = () => {
      if (barRef.current) {
        const elementTop = barRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      loadSkills();
    }
  }, [isVisible]);

  const loadSkills = () => {
    setWidth(datacount);

    if (counterRef.current === 0) {
      let start = 0;
      const duration = 3000;
      const stepTime = Math.abs(Math.floor(duration / datacount));

      const timer = setInterval(() => {
        start += 1;
        setCounter(start);
        counterRef.current = start;

        if (start === datacount) {
          clearInterval(timer);
        }
      }, stepTime);
    }
  };

  return (
    <div ref={barRef} className="mb-4">
      <div className="flex justify-between">
        <h4 className="text-[16px] text-[rgb(25,25,25)] leading-[24px] font-semibold mb-[13px] capitalize">
          {title}
        </h4>
        <span className="text-[#191919] font-semibold">{counter}%</span>
      </div>
      <div className="relative w-full bg-gray-300  h-2 overflow-hidden mb-8">
        <div
          className={` absolute top-0 h-full bg-primary  transition-transform  ease-in-out`}
          style={{
            transitionDuration: "3s",
            width: `${width}%`,
            transform: isVisible ? `translateX(0)` : `translateX(-100%)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
