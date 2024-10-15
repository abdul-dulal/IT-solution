"use client";
import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { rubik } from "@/app/fonts";
const AboutCounter = () => {
  const [counterOn, setCounteron] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setCounteron(true)}>
      {counterOn && (
        <CountUp start={0} end={25} duration={4} delay={0}>
          {({ countUpRef }) => (
            <div className="relative top-5">
              <h2
                className={`${rubik.className} text-[68px] text-primary  `}
                ref={countUpRef}
              ></h2>
            </div>
          )}
        </CountUp>
      )}
    </ScrollTrigger>
  );
};

export default AboutCounter;
