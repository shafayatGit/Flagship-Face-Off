import React from "react";
import { Link } from "react-router";

const PhoneCard = ({ data }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img className="rounded" src={data.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.model}</h2>
        <p>{data.description}</p>
        <div className="card-actions justify-end">
          <Link to={"/phone-details"}>
            <button className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-gray-500 text-gray-500 text-white">
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gray-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-gray-500 transition duration-300 group-hover:text-white ease">
                View Details
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
