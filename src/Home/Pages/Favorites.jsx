import React, { useEffect, useState } from "react";
import { getFavorites } from "../../assets/Utilis";
import PhoneCard from "../../Components/PhoneCard";

const Favorites = () => {
  const [displayPhones, setDisplayPhones] = useState([]);
  useEffect(() => {
    const savedPhone = getFavorites();
    setDisplayPhones(savedPhone);
  }, []);
  return (
    <div
      id="card_container"
      className="grid grid-cols-2 md:grid-cols-3 gap-8 shadow mt-24"
    >
      {displayPhones.map((data) => (
        <PhoneCard key={data.id} data={data}></PhoneCard>
      ))}
    </div>
  );
};

export default Favorites;
