import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";
import { addFavorites } from "../../assets/Utilis";

const PhoneDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singlePhone = data.find((phone) => phone.id === parseInt(id));
  const {
    brand,
    name,
    model,
    image,
    price,
    description,
    camera_info,
    storage,
  } = singlePhone;

  const handleFavorites = () => {
    addFavorites(singlePhone);
  };
  // console.log(singlePhone);
  return (
    <div>
      <img src={image} alt="" className=" mx-auto max-w-2xl mt-10" />
      <div className="flex justify-between items-center">
        <h1 className="text-7xl font-light text-black mt-5">{model}</h1>
        <div>
          {/* Cart Button */}
          <button class="relative inline-block text-lg group mr-4 cursor-pointer">
            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span class="relative">
                <FaCartPlus></FaCartPlus>
              </span>
            </span>
            <span
              class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
            {/* Bookmark Button */}
          </button>
          <button
            onClick={handleFavorites}
            class="relative inline-block text-lg group  cursor-pointer"
          >
            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span class="relative">
                <MdBookmarkAdd></MdBookmarkAdd>
              </span>
            </span>
            <span
              class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
        </div>
      </div>
      <h1 className="text-5xl font-light text-black mt-5">Details:</h1>
      <p className="text-black font-bold mt-5 ">
        Brand: <span className="font-light">{brand}</span>
      </p>
      <p className="text-black font-bold mt-5 ">
        Model: <span className="font-light">{model}</span>
      </p>
      <p className="text-black font-bold mt-5 flex gap-2">
        Storage:
        <span>
          {storage.map((store) => (
            <p className="font-light">{store}</p>
          ))}
        </span>
      </p>
      <p className="text-black font-bold mt-5 "></p>
      <p className="text-black font-bold mt-5 ">
        Camera Info: <span className="font-light">{camera_info}</span>
      </p>
      <p className="text-black font-bold mt-5 ">
        Description: <span className="font-light">{description}</span>
      </p>
    </div>
  );
};

export default PhoneDetails;
