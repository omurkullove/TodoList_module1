import React from "react";
import Navbar from "../../Components/Navbar";
import Favorites from "../../Components/Favorites";

const FavoritePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Favorites />
    </div>
  );
};

export default FavoritePage;
