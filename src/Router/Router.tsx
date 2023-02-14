import React from "react";
import { Route, Routes } from "react-router-dom";
import PreviewPage from "../Pages/PreviewPage";
import HomePage from "../Pages/HomePage";
import FavoritePage from "../Pages/FavoritesPage";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PreviewPage />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
    </div>
  );
};

export default Router;
