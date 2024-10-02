import React from "react";

const Address = ({ title, address, icon }) => {
  return (
    <div className=" relative xs:pl-20  xs:pr-[30px] pr-0 mb-8">
      <div className=" w-[75px] h-[75px]  bg-transparent rounded-[10px] text-center xs:absolute left-0 top-[7px] text-[26px] leading-[60px] border border-solid border-white shadow xs:mb-0 mb-4">
        <span className="w-full h-full flex items-center justify-center text-white text-[33px]  m-auto">
          {icon}
        </span>
      </div>
      <div className=" xs:ml-6 ml-0">
        <h5 className="mb-[6px] text-white ">{title}</h5>
        <p className="text-white ">{address}</p>
      </div>
    </div>
  );
};

export default Address;
