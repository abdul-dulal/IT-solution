"use client";
import Image from "next/image";
import React, { useState } from "react";
import hero from "/public/img/home1/hero.png";
const CardImage = () => {
  const [transform, setTransform] = useState("");

  const handleMouseMove = (event) => {
    const e = -(window.innerWidth / 2 - event.pageX) / 40;
    const n = (window.innerHeight / 2 - event.pageY) / 50;
    const transformStyle = `rotateY(${e}deg) rotateX(${n}deg)`;

    setTransform(transformStyle);
  };

  return (
    <div className="" onMouseMove={handleMouseMove}>
      <div
        className=" relative text-right -mb-[50px] sm:block hidden"
        style={{ transform }}
      >
        <Image src={hero} alt="Hero" />
      </div>
    </div>
  );
};

export default CardImage;
