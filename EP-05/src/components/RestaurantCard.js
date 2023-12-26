import { CDN_URL } from "../utils/constants";

const RestaurentCard = ({ restData }) => {
  cloudinaryImageId = restData.data.cloudinaryImageId;
  restName = restData.data.name;
  cuisines = restData.data.cuisines;
  lastMileTravelString = restData.data.lastMileTravelString;
  costForTwoString = restData.data.costForTwoString;
  avgRating = restData.data.avgRating;

  return (
    <div className="restaurent-card">
      <div className="image-container">
        <img
          className="restaurent-image"
          src={`${CDN_URL}${cloudinaryImageId}`}
        />
      </div>
      <h2>{restName}</h2>
      <h3>{avgRating} ⭐️</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
      <h2>{costForTwoString}</h2>
    </div>
  );
};

export default RestaurentCard;
