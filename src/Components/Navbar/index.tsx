import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

//MUI

const Navbar = () => {
  return (
    <nav>
      <div className="block1">TODO LIST</div>
      <div className="block2">
        <Link to="/home-page">Главная</Link>
        <Link to="/favorites">Избранные</Link>
      </div>
    </nav>
  );
};

export default Navbar;
