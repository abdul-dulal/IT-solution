import React from "react";
const WorkProcess = ({ title, serial, icon }) => {
  return (
    <div className=" group relative mt-10 bg-[#081845] hover:bg-primary rounded-[10px] pt-8 px-5 pb-[50px] transition-all duration-300 ease-in text-center">
      <span className="text-left block text-[rgba(210,210,210,0.25)] text-[80px] -tracking-[2] leading-[80px] font-medium transition-all duration-300 ease-in">
        {serial}
      </span>
      <div className=" text-xl text-primary leading-[120px] -mt-6 mb-[53px] inline-block m-auto">
        <span className="text-primary text-[126px] leading-[126px] group-hover:text-white transition-all duration-300 ease-in">
          {icon}
        </span>
      </div>
      <h5 className="text-white text-xl leading-[30px] m-0 font-bold">
        {title}
      </h5>
    </div>
  );
};

export default WorkProcess;
