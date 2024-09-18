import React from "react";

const Address = ({ title, address, icon }) => {
  return (
    <div className=" relative pl-20 pr-[30px] mb-8">
      <div className=" w-[60px] h-[60px] bg-transparent rounded-[10px] text-center absolute left-0 top-[7px] text-[26px] leading-[60px] border border-solid border-white shadow">
        <span className="text-white inline-block m-auto">{icon}</span>
      </div>
      <h5 className="mb-[6px] text-white">{title}</h5>
      <p className="text-white">{address}</p>
    </div>
  );
};

export default Address;
