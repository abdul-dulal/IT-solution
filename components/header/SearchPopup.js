"use client";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchPopup = ({ searchPopup, setSearchPopup }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div
        className={`fixed inset-0 bg-[rgba(0,0,0,0.6)] w-full h-full transition-all ease-in-out  ${
          searchPopup
            ? "translate-y-0 delay-100 duration-[.8s]"
            : "-translate-y-full  duration-500 delay-700 "
        }`}
        style={{ zIndex: 9, cursor: "url(/img/close-sider.png), auto" }}
        onClick={() => setSearchPopup(false)}
      >
        <div
          style={
            searchPopup
              ? {
                  transitionDuration: "0.7s",
                  transitionTimingFunction: "cubic-bezier(0.9, 0.03, 0, 0.96)",
                  transitionDelay: "0.7s",
                  zIndex: 9999,
                }
              : {
                  transitionDuration: "0.8s",
                  transitionTimingFunction: "cubic-bezier(0.9, 0.03, 0, 0.96)",
                  transitionDelay: "0.8s",
                }
          }
          className={`
          w-full h-[400px] inset-0 z-[9999] cursor-auto bg-black  text-white fixed  ${
            searchPopup
              ? "top-0 visible opacity-100"
              : "invisible opacity-0 left-0 -top-[100%]"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div class="middle_search   top-[43%] translate-y-[-50%] relative z-[2]">
            <div class="container mx-auto">
              <div class=" text-center">
                <div className="relative">
                  <form
                    onSubmit={handleSubmit}
                    className="flex justify-between items-center"
                  >
                    <div
                      style={{ animationDelay: "1s" }}
                      className={` absolute contenent-[''] h-[1px] bg-[rgba(255,255,255,0.25)] w-0 invisible opacity-0 left-0 bottom-0 ${
                        searchPopup ? "active" : "w-0"
                      } ${isFocused ? "opacity-0" : ""}`}
                    ></div>
                    <input
                      type="search"
                      name="s"
                      id="s"
                      placeholder="Type Words and Hit Enter"
                      className="w-full h-16 border-none bg-transparent text-xl outline-none leading-[64px] text-white font-medium placeholder:text-white"
                      onFocus={() => [setIsFocused(true)]}
                      onBlur={() => setIsFocused(false)}
                    />
                    <div
                      style={{
                        transition:
                          "width 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s",
                      }}
                      className={`absolute left-0 bottom-0 h-[1px] bg-primary  ${
                        isFocused ? "w-full" : "w-0"
                      }`}
                    ></div>
                    <button type="submit">
                      <IoSearchOutline size={24} />
                    </button>
                  </form>
                  <div className="relative w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
