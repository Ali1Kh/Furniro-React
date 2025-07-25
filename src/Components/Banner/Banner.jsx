import React from "react";
import "./Banner.css";

import mainImg from "../../assets/images/Rectangle 1.png";
import logo from "../../assets/icons/Logo.png";

const Banner = ({ title }) => {
  return (
    <>
      <div className="mainScrin">
        <div className="section1">
          <div className="insection1">
            <div className="imge">
              <div className="imge">
                <img className="bannerImage" src={mainImg} alt="Main" />
              </div>
              <div className="adresIn">
                <img className="logoBanner" src={logo} alt="" />
                <h1 className="mainP1">{title}</h1>
                <h4 className="scoundP1">Home &gt; {title}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
