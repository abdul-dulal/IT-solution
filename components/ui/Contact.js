"use client";
import React, { useState } from "react";
import Address from "./Address";
import { IoLocationOutline } from "react-icons/io5";
import { SiFigma } from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhoneEnabled } from "react-icons/md";

import { PiNotePencilDuotone } from "react-icons/pi";
import { BiPencil } from "react-icons/bi";
import { rubik } from "@/app/fonts";
const Contact = () => {
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
    <section className="relative bg-[#f0f4f9] py-[110px]">
      <div className="container mx-auto xs:px-6 px-4">
        <div className="grid grid-cols-12">
          <div className="md:col-span-4 col-span-12">
            <h2 className="mb-[50px] xl:text-5xl xl:leading-[58px] leading-[40px] font-bold   xs:text-[40px] text-[36px]  ">
              Let&apos;s Work together
            </h2>
            <Address
              title="Our Address"
              address="PSD Building, 2 AlBahr St, Loskia sripur, jamukara."
              icon={<IoLocationOutline />}
            />
            <Address
              title="Our Phone"
              address="Telephone : 0029129102320 Mobile : 000 2324 39493"
              icon={<SiFigma />}
            />
            <Address
              title="Our Email"
              address=" Main Email : name@website.com Inquiries : Info@orex.com"
              icon={<TfiEmail />}
            />
          </div>
          <div className="md:col-span-8 col-span-12">
            <div
              style={{ boxShadow: " 0px 0 20px 0px rgb(152 152 152 / 16%)" }}
              className="relative bg-white rounded-[10px] py-[40px] sm:px-[60px] xs:px-[40px] px-5"
            >
              <form onSubmit={handleSubmit}>
                <div className="grid lg:grid-cols-2 gap-7">
                  <div className="flex relative w-full ">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="full name"
                      className={`border-2 border-gray-300 w-full  h-[70px] px-4   text-lg  placeholder:text-[rgba(8,24,69,0.8)] placeholder:text-lg placeholder:capitalize placeholder:font-normal bg-transparent rounded-[5px]   focus:outline-none ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } `}
                    />
                    <FaRegUser
                      size={16}
                      color="#686EE2"
                      className="absolute right-5 top-7 "
                    />
                  </div>
                  <div className="flex relative   w-full ">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="phone number"
                      className={`border-2 border-gray-300 w-full  h-[70px] px-4   text-lg  placeholder:text-[rgba(8,24,69,0.8)] placeholder:capitalize placeholder:text-lg placeholder:font-normal bg-transparent rounded-[5px]   focus:outline-none  `}
                    />
                    <MdOutlinePhoneEnabled
                      size={16}
                      color="#686EE2"
                      className="absolute right-5 top-7 "
                    />
                  </div>
                  <div className="flex relative w-full ">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className={`border-2 border-gray-300 w-full  h-[70px] px-4   text-lg  placeholder:text-[rgba(8,24,69,0.8)] placeholder:capitalize placeholder:text-lg placeholder:font-normal bg-transparent rounded-[5px]   focus:outline-none ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } `}
                    />
                    <MdOutlineEmail
                      size={16}
                      color="#686EE2"
                      className="absolute right-5 top-7 "
                    />
                  </div>
                  <div>
                    <div className="flex relative   w-full ">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="subject"
                        className={`border-2 border-gray-300 w-full  h-[70px] px-4   text-lg  placeholder:text-[rgba(8,24,69,0.8)] placeholder:capitalize placeholder:text-lg placeholder:font-normal bg-transparent rounded-[5px]   focus:outline-none  `}
                      />
                      <PiNotePencilDuotone
                        size={16}
                        color="#686EE2"
                        className="absolute right-5 top-7 "
                      />
                    </div>
                  </div>
                </div>

                <div className="flex relative   w-full my-7">
                  <textarea
                    type=""
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message"
                    className={`border-2 border-gray-300 w-full pt-3  h-[120px] px-4   text-lg  placeholder:text-[rgba(8,24,69,0.8)] placeholder:capitalize placeholder:text-lg placeholder:font-normal  bg-transparent rounded-[5px]   focus:outline-none ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } `}
                  />
                  <BiPencil
                    size={16}
                    color="#686EE2"
                    className="absolute right-5 top-7 "
                  />
                </div>

                <button
                  type="submit"
                  className={`${rubik.className} inline-block m-auto  w-full h-[64px]  text-lg  leading-[.8] text-white  overflow-hidden relative z-[1] text-center capitalize font-medium bg-primary py-[14px] px-[25px] cursor-pointer rounded-[5px] transform  transition-all duration-400 hover:text-white before:absolute before:content-[''] before:w-full before:h-0 before:left-0 before:top-0 before:-z-[1] before:bg-secondary before:transition-height before:duration-400 before:ease-custom-ease before:delay-0  hover:before:h-full hover:before:top-auto hover:before:bottom-0`}
                >
                  send message
                </button>
                <div className="w-full ml-[9px] mt-4 ">
                  <div className="  ">
                    {time && (
                      <div>
                        {errors.name || errors.email || errors.message ? (
                          <p className="bg-[#FFF3CD] py-4 text-[#856404] px-5 text-base font-normal leading-[30px]">
                            <span className="text-xl font-bold">Opps!</span>{" "}
                            Errpr found. Please fix those and re submit.
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
