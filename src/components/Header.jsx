import React from "react";
import "./Header.css";
import burger_img from "../img/burger.png";
import logo_svg from "../img/logo.svg";

export const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <a href="../public/index.html" className="header-logo__Вlink">
          <img src={logo_svg} alt="" className="logo-svg" />
        </a>
      </div>
      <div className="header-content">
        <img src={burger_img} alt="burger" className="header-content__img" />
        <div className="header-content__wrapper">
          <h1 className="title">Только самые</h1>
          <p className="text">Бесплатная доставка от 599₽</p>
        </div>
      </div>
    </header>
  );
};
