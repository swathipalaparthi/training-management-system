import React from "react";
import BrandLogo from "../../assets/brand-logo.png";
import "../header/header.css";
import "./footer.css";
import facebook from "../../assets/fb.png"
import linkedin from "../../assets/linkdn.png"
import twitter from "../../assets/twitter.png"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="header__brand">
        <div className="header__brand--img">
          <img src={BrandLogo} alt="fine mentor logo" />
        </div>
        <h1 className="header__brand--name">FineMentor</h1>
      </div>

      <div className="footer__user">
        <a href="https://www.facebook.com/DivamiDesignLabs/" className="">
            <img src={facebook} className="footer__image"/>
        </a>
        <a href="https://www.linkedin.com/company/divami-design-labs-ux-ui-design-development-agency/mycompany/" className="">
            <img src={linkedin} className="footer__image"/>
        </a>
        <a href="https://www.instagram.com/accounts/login/?next=/divami.design/" className="">
            <img src={twitter} className="footer__image"/>
        </a>
      </div>
    </div>
  );
};

