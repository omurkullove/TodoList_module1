import React from "react";
import "./preview.scss";
import { useNavigate } from "react-router-dom";

const Preview = () => {
  const navigate = useNavigate();

  return (
    <div className="parent">
      <div>
        <h1>Добро Пожаловать!</h1>
        <p>
          На этой платформе вы сможете без проблем испрользовать улуги "To Do
          list"- бесплатно! Без регистрации , без лишних вопросов - быстро и
          надежно...
        </p>
        <div>
          <button onClick={() => navigate("/home-page")}>Начать запись!</button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
