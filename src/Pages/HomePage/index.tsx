import React, { FC } from "react";
import Home from "../../Components/Home";
import Navbar from "../../Components/Navbar";

const HomePage: FC = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default HomePage;
