"use client";
import React, { useState } from "react";
import CounterUp from "./CounterUp";
import ScrollTrigger from "react-scroll-trigger";
const Counter = () => {
  const [counterOn, setCounteron] = useState(false);
  return (
    <div className="my-14">
      <ScrollTrigger onEnter={() => setCounteron(true)}>
        {counterOn && (
          <div className="sm:flex  items-center xs:gap-0  justify-around ">
            <CounterUp end="3500" title="happy customer" text="" />
            <CounterUp end="541" title="project done" text="+" />
            <CounterUp end="40" title="award wins" text="+" />
            <CounterUp end="678" title="client works" text="" />
          </div>
        )}
      </ScrollTrigger>
    </div>
  );
};

export default Counter;
