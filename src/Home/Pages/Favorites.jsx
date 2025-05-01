import React, { useEffect, useState } from "react";
import { getFavorites, removeFavorites } from "../../assets/Utilis";
import PhoneCard from "../../Components/PhoneCard";
import { MdDeleteForever } from "react-icons/md";
import Empty from "../../Components/Empty";

const Favorites = () => {
  const [displayPhones, setDisplayPhones] = useState([]);
  useEffect(() => {
    const savedPhone = getFavorites();
    setDisplayPhones(savedPhone);
  }, []);

  const hanndleRemove = (id) => {
    removeFavorites(id);
    setDisplayPhones(getFavorites());
  };
  if (displayPhones.length < 1) return <Empty></Empty>;

  return (
    <div>
      <div
        id="card_container"
        className="grid grid-cols-2 md:grid-cols-3 gap-8 shadow mt-24"
      >
        {displayPhones.map((data) => (
          <PhoneCard
            key={data.id}
            data={data}
            delatable={true}
            hanndleRemove={hanndleRemove}
          ></PhoneCard>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
