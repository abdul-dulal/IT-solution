"use client";
import Image from "next/image";
import { useRef } from "react";
import hero from "/public/img/home1/hero.png";
const MoveImage = () => {
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const { offsetWidth: width, offsetHeight: height } = imageRef.current;
    const { offsetX: x, offsetY: y } = e.nativeEvent;

    const rotateX = ((y / height) * -1 + 0.5) * 17.38; // 2 * 8.69
    const rotateY = ((x / width) * 1 - 0.5) * 1.775; // 2 * 0.8875

    imageRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    imageRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div className="w-64 h-64 overflow-hidden">
      <Image
        ref={imageRef}
        src={hero}
        alt="Transform Image"
        className="w-full h-full object-cover transition-transform duration-300 ease-out"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default MoveImage;
