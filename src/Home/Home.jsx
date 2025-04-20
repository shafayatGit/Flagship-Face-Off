import React from "react";
import Hero from "../Components/Hero/Hero";
import Phones from "../Components/Phones/Phones";
import { useLoaderData } from "react-router";

const Home = () => {
  const phonesData = useLoaderData();
  // console.log(phonesData);
  const handleSearch = (e, text) => {
    e.preventDefault();
    const searchedPhone = phonesData.filter(
      (phone) =>
        phone.name.toLowerCase().split(" ").includes(text.toLowerCase()) ||
        phone.brand.toLowerCase().split(" ").includes(text.toLowerCase())
    );
    console.log(searchedPhone);
  };
  return (
    <div>
      <Hero handleSearch={handleSearch}></Hero>
      <Phones phonesData={phonesData}></Phones>
    </div>
  );
};

export default Home;
