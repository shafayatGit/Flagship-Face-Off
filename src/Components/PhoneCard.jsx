import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router";
import { removeFavorites } from "../assets/Utilis";

const PhoneCard = ({ data, delatable, hanndleRemove }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img className="rounded" src={data.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.model}</h2>
        <p>{data.description}</p>
        <div className="card-actions justify-end">
          <Link to={`/phone-details/${data.id}`}>
            <button className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-gray-500 text-gray-500 text-white">
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gray-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-gray-500 transition duration-300 group-hover:text-white ease">
                View Details
              </span>
            </button>
          </Link>
        </div>
        {delatable && (
          <button
            onClick={() => hanndleRemove(data.id)}
            className="btn bg-gray-900 hover:bg-gray-300 hover:translate-x-1 p-3 rounded-full absolute -top-3 -right-2 group cursor-pointer text-black "
          >
            <MdDeleteForever className="text-gray-100 group-hover:text-gray-900"></MdDeleteForever>
          </button>
        )}
      </div>
    </div>
  );
};

export default PhoneCard;
