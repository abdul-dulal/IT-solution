"use client";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { HiOutlineMinus } from "react-icons/hi";

const Accrodian = () => {
  const [isOpen, setIsOpen] = useState([true, false, false, false]);

  const toggleOpen = (index) => {
    setIsOpen((prevState) =>
      prevState?.map((item, i) => (i === index ? !item : false))
    );
  };

  const detailsData = [
    {
      summary: "Where should I incorporate my business?",
      content:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Impress clients new and existing with elite.",
    },
    {
      summary: " Can I offer my items for free on a promotional basis?",
      content:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Impress clients new and existing with elite.",
    },
    {
      summary: "How can I safely use cleaning chemicals?",
      content:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Impress clients new and existing with elite.",
    },
    {
      summary: "What type of company is measured?",
      content:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Impress clients new and existing with elite.",
    },
  ];

  return (
    <div className="relative">
      <div className="relative p-0 rounded-[10px] bg-[#f0f4f9] bg-transparent mb-4">
        {detailsData?.map((detail, index) => (
          <div
            key={index}
            className=" mb-4 lg:p-[19px] p-2  rounded bg-[#f0f4f9]"
          >
            <summary
              onClick={() => toggleOpen(index)}
              className=" flex items-center gap-6 xs:text-xl text-lg cursor-pointer xs:leading-[28px] leading-[25px] text-[#222222] font-medium"
            >
              <div>
                <span className=" ml-2 h-12 w-12  flex  items-center justify-center bg-white text-black rounded-full lg:text-xl text-sm">
                  {isOpen[index] ? <HiOutlineMinus /> : <FiPlus />}
                </span>
              </div>
              <div>{detail.summary}</div>
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

export default Accrodian;
