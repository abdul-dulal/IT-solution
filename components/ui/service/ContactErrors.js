import React from "react";

const ContactErrors = ({ errors, message }) => {
  return (
    <div className="w-full ml-[9px] mt-4 ">
      <div className="  ">
        {errors.name || errors.email || errors.message ? (
          <p className="bg-[#FFF3CD] py-4 text-[#856404] px-5 text-base font-normal leading-[30px]">
            <span className="text-xl font-bold">Opps!</span> Errpr found. Please
            fix those and re submit.
          </p>
        ) : (
          ""
        )}
        {message ? (
          <p className="bg-[#D4EDDA] py-4 text-[#157893] px-5 text-base font-normal leading-[30px]">
            <span className="text-xl font-bold">Congratulations!</span> Errpr
            found. Please fix those and re submit.
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ContactErrors;
