import React from "react";

const IconBox = ({ icon, title }) => {
  return (
    <div className="  border-r border-solid border-[rgba(255,255,255,0.2)] pt-7 px-[15px]  text-center ">
      <div className=" flex justify-center  mb-[52px] text-[62px] leading-[62px] text-white transition-all duration-300 ease-in-out">
        {icon}
      </div>
      <h5
        style={{ boxShadow: "0px 10px 30px 0px rgba(0, 0, 0, 0.05)" }}
        className="bg-white w-[calc(100%-48px)] text-lg leading-[30px] mx-auto mt-0 xl:mb-[-45px] mb-6 rounded-[5px] p-[15px] "
      >
        {title}
      </h5>
    </div>
  );
};

export default IconBox;
