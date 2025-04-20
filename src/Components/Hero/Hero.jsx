import React, { useState } from "react";

const Hero = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="text-center mt-24">
      <img src="/images/banner.png" alt="" className=" mx-auto max-w-md" />
      <h1 className="text-7xl font-light text-black">
        Browse, Search, View, Buy
      </h1>
      <p className="text-gray-600 font-light mt-5 ">
        Best place to browse, search, view details and purchase of top flagship
        phones <br /> of the current time - FlagshipFaceOff
      </p>
      <form
        onSubmit={(e) => {
          handleSearch(e, searchText);
          setSearchText(" ");
        }}
        className="mt-5 flex flex-col md:flex-row justify-center items-center gap-3"
      >
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border border-gray-300 w-2/3 py-3 pl-3 rounded-3xl focus:outline-none "
          placeholder="Search By Phone Name"
          type="text"
        />
        <button className="cursor-pointer relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-gray-400 rounded-full shadow-md group">
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gray-400 group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                strokewidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
            Search
          </span>
          <span className="relative invisible">Search</span>
        </button>
      </form>
    </div>
  );
};

export default Hero;
