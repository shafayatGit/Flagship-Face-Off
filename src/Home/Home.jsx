import React, { useState } from "react";
import Hero from "../Components/Hero/Hero";
import Phones from "../Components/Phones/Phones";
import { useLoaderData } from "react-router";

const Home = () => {
  const phonesData = useLoaderData();
  const [phones, setPhones] = useState(phonesData);
  // console.log(phonesData);
  const handleSearch = (e, text) => {
    e.preventDefault();
    if (text === " ") return setPhones(phonesData);
    const searchedPhone = phonesData.filter(
      (phone) =>
        phone.name.toLowerCase().split(" ").includes(text.toLowerCase()) ||
        phone.brand.toLowerCase().split(" ").includes(text.toLowerCase())
    );
    setPhones(searchedPhone);
  };
  return (
    <div>
      <Hero handleSearch={handleSearch}></Hero>
      <Phones phonesData={phones}></Phones>
    </div>
  );
};

export default Home;
