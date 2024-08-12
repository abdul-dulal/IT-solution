import { rubik } from "@/app/fonts";
import React from "react";
import CountUp from "react-countup";

const CounterUp = ({ end, title, text }) => {
  return (
    <div className="lg:my-0 my-5 text-center -z-40">
      <CountUp start={0} end={end} duration={4} delay={0}>
        {({ countUpRef }) => (
          <div className="text-white ">
            <div className="flex justify-center">
              <h2
                className="text-5xl leading-[58px]  text-white font-normal mb-3 "
                ref={countUpRef}
              ></h2>
              <h2 className="text-5xl leading-[58px] text-white font-normal capitalize ">
                {text}
              </h2>
            </div>
            <p
              className={`${rubik.className} text-[18px] font-normal capitalize text-white`}
            >
              {title}
            </p>
          </div>
        )}
      </CountUp>
    </div>
  );
};

export default CounterUp;
