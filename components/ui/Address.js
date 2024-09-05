import React from "react";

const Address = ({ title, address, icon }) => {
  return (
    <div className=" relative pl-20 pr-[30px] mb-8">
      <div className=" w-[60px] h-[60px] bg-primary rounded-[10px] text-center absolute left-0 top-[7px] text-[26px] leading-[60px]">
        <span className="text-white inline-block m-auto">{icon}</span>
      </div>
      <h5 className="mb-[6px]">{title}</h5>
      <p>{address}</p>
    </div>
  );
};

export default Address;
