import React from "react";
import "./Banner.css";

import mainImg from "../../../assets/images/Rectangle 1.png";

const Banner = ({ title }) => {
  return (
    <>
      <div className="mainScrin">
        <div className="section1">
          <div className="insection1">
            <div className="imge">
              <img src={mainImg} alt="Main" />
              <div className="adresIn">
                <h1 className="mainP1">{title}</h1>
                <h2 className="scoundP1">Home &gt; {title}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
