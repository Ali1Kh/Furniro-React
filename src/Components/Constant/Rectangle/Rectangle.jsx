import React from "react";
import "./Rectangle.css";

import mainImg from "../../../assets/images/Rectangle 1.png";

const Rectangle = ({ title }) => {
  return (
    <>
      <div className="mainScrin">
        <div className="section1">
          <div className="insection1">
            <div className="imge">
              <img src={mainImg} alt="Main" />
              <div className="adresIn">
                <p className="mainP1">{title}</p>
                <p className="scoundP1">Home &gt; {title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rectangle;
