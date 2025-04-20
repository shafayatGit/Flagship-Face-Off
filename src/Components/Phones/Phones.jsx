import React, { useEffect, useState } from "react";
import PhoneCard from "../PhoneCard";

const Phones = ({ phonesData }) => {
  const [displayPhones, setDisplayPhones] = useState([]);
  const [showAllPhones, setshowAllPhones] = useState(false);
  useEffect(() => {
    if (showAllPhones) {
      setDisplayPhones(phonesData);
    } else {
      setDisplayPhones(phonesData.slice(0, 6));
    }
  }, [displayPhones, showAllPhones]);
  return (
    <div>
      <div
        id="card_container"
        className="grid grid-cols-2 md:grid-cols-3 gap-8 shadow mt-24"
      >
        {displayPhones.map((data) => (
          <PhoneCard key={data.id} data={data}></PhoneCard>
        ))}
      </div>
      <button
        onClick={() => {
          // const card_container = document.getElementById("card_container");
          setshowAllPhones((prv) => !prv);

          if (showAllPhones) {
            window.scrollTo(0, 500);
          }
        }}
        className="mt-5 cursor-pointer relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-gray-400 rounded-full shadow-md group"
      >
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
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
          {showAllPhones ? "Show Less" : "Show All"}
        </span>
        <span className="relative invisible">
          {showAllPhones ? "Show Less" : "Show All"}
        </span>
      </button>
    </div>
  );
};

export default Phones;
