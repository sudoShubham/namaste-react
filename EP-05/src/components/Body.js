import { restrautList } from "../utils/mockData";
import RestaurentCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [restaurents, setRestaurents] = useState(restrautList);

  return (
    <div className="body-container">
      <button
        className="filter-btn"
        onClick={() => {
          let data = restrautList.filter((rest) => rest.data.avgRating >= 4);
          setRestaurents(data);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="restaurant-list">
        {restaurents.map((rest) => (
          <RestaurentCard key={rest.data.id} restData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
