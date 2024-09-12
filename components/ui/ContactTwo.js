"use client";
import { rubik } from "@/app/fonts";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdEdit } from "react-icons/md";
const ContactTwo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [time, setTime] = useState(false);

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: formData.name.trim() === "",
      email: formData.email.trim() === "",
      message: formData.message.trim() === "",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (!hasErrors) {
      //   console.log("Form submitted:", formData);
      setMessage(true);
    }
    setTime(true);
    const timer = setTimeout(() => {
      setTime(false);
    }, 4000);

    return () => clearTimeout(timer);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (value.trim() !== "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid xs:grid-cols-2 gap-8">
        <div className="flex relative  w-full ">
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="full name"
            className={`border-2 border-gray-300 w-full  h-[70px] px-3  my-2 text-lg  placeholder:text-[#191919] placeholder:text-lg placeholder:capitalize placeholder:font-normal bg-transparent rounded-[5px] mb-[18px]  focus:outline-none ${
              errors.name ? "border-red-500" : "border-gray-300"
            } `}
          />
          <FaRegUser
            size={16}
            color="#686EE2"
            className="absolute right-6 top-8 "
          />
        </div>
        <div className="flex relative  w-full ">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className={`border-2 border-gray-300 w-full  h-[70px] px-3  my-2 text-lg  placeholder:text-[#191919] placeholder:capitalize placeholder:text-lg placeholder:font-normal bg-transparent rounded-[5px] mb-[18px]  focus:outline-none ${
              errors.email ? "border-red-500" : "border-gray-300"
            } `}
          />
          <MdOutlineEmail
            size={16}
            color="#686EE2"
            className="absolute right-6 top-8 "
          />
        </div>
      </div>

      <div className="flex relative  w-full ">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="your website"
          className={`border-2 border-gray-300 w-full pt-3  h-[170px] px-3  my-2 text-lg  placeholder:text-[#191919] placeholder:capitalize placeholder:text-lg placeholder:font-normal bg-transparent rounded-[5px] mb-[18px]  focus:outline-none ${
            errors.message ? "border-red-500" : "border-gray-300"
          } `}
        />
        <MdEdit size={16} color="#686EE2" className="absolute right-6 top-8 " />
      </div>

      <button
        type="submit"
        className={`${rubik.className} inline-block m-auto w-[200px]  h-[65px]  mt-4 text-[16px] leading-[.8] text-white  overflow-hidden relative z-[1] text-center capitalize font-medium bg-primary py-[14px] px-[25px] cursor-pointer rounded-[5px] transform  transition-all duration-400 hover:text-white before:absolute before:content-[''] before:w-full before:h-0 before:left-0 before:top-0 before:-z-[1] before:bg-secondary before:transition-height before:duration-400 before:ease-custom-ease before:delay-0  grap-btn`}
      >
        Send Message
      </button>
      <div className="w-full ml-[9px] mt-4 ">
        <div className="  ">
          {time && (
            <div>
              {errors.name || errors.email || errors.message ? (
                <p className="bg-[#FFF3CD] py-4 text-[#856404] px-5 text-base font-normal leading-[30px]">
                  <span className="text-xl font-bold">Opps!</span> Errpr found.
                  Please fix those and re submit.
                </p>
              ) : (
                ""
              )}
              {message ? (
                <p className="bg-[#D4EDDA] py-4 text-[#157893] px-5 text-base font-normal leading-[30px] text-center">
                  <span className="text-xl font-bold mr-1">
                    Congratulations!
                  </span>
                  Your query successfully sent to site admin.
                </p>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default ContactTwo;
