"use client";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { HiOutlineMinus } from "react-icons/hi";

const AccrodianTwo = () => {
  const [isOpen, setIsOpen] = useState([true, false, false, false]);

  const toggleOpen = (index) => {
    setIsOpen((prevState) =>
      prevState.map((item, i) => (i === index ? !item : false))
    );
  };

  const detailsData = [
    {
      summary: " Do I need a business plan? ",
      content:
        "Continue building numerous of at relation in margaret. Lasted engage roused mother an am at. Other early while if by do to. Missed living excuse as be.",
    },
    {
      summary: "How long do you take to finish?",
      content:
        "Continue building numerous of at relation in margaret. Lasted engage roused mother an am at. Other early while if by do to. Missed living excuse as be.",
    },
    {
      summary: "How long should a business plan be?",
      content:
        "Continue building numerous of at relation in margaret. Lasted engage roused mother an am at. Other early while if by do to. Missed living excuse as be.",
    },
    {
      summary: " Where do I start?",
      content:
        "Continue building numerous of at relation in margaret. Lasted engage roused mother an am at. Other early while if by do to. Missed living excuse as be.",
    },
  ];

  return (
    <div className="relative">
      <div className="relative p-0 rounded-[10px] bg-[#f0f4f9] bg-transparent mb-4">
        {detailsData.map((detail, index) => (
          <div
            key={index}
            className="mb-4 lg:p-[19px] p-2  rounded bg-[#f0f4f9]"
          >
            <summary
              onClick={() => toggleOpen(index)}
              className="flex items-center gap-6 lg:text-xl cursor-pointer leading-[28px] text-[#222222] font-medium"
            >
              <span className=" ml-2 h-12 w-12 flex  items-center justify-center bg-white text-black rounded-full lg:text-xl text-base">
                {isOpen[index] ? <HiOutlineMinus /> : <FiPlus />}
              </span>
              {detail.summary}
            </summary>
            {isOpen[index] && (
              <div className="lg:p-2 bg-[#f0f4f9] my-1  lg:ml-4 text-lg  leading-[30px] font-normal text-[#85879B] ">
                {detail.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccrodianTwo;
