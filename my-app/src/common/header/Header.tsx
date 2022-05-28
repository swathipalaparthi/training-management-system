import React from "react";
import BrandLogo from "../../assets/brand-logo.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__brand">
        <div className="header__brand--img">
          <img src={BrandLogo} alt="fine mentor logo" />
        </div>
        <h1 className="header__brand--name">FineMentor</h1>
      </div>

      <div className="header__user">
        <div className="header__user--profile">
          <p>Hello Sethi</p>
        </div>
        <button className="header__user--logout">Logout</button>
      </div>
    </div>
  );
};

export default Header;
