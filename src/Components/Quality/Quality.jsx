import React from "react";
import "./Quality.css";

export default function Quality() {
  return (
    <section id="quality">
      <div className="qualityContainer">
        <div className="quality-box">
          <img
            src={require("../../assets/icons/Group copy.png")}
            alt="Trophy"
          />
          <div>
            <h2>High Quality</h2>
            <p>crafted from top materials</p>
          </div>
        </div>
        <div className="quality-box">
          <img
            src={require("../../assets/icons/Group (2).png")}
            alt="Warranty"
          />
          <div>
            <h2>Warranty Protection</h2>
            <p>Over 2 years</p>
          </div>
        </div>
        <div className="quality-box">
          <img
            src={require("../../assets/icons/Vector (2).png")}
            alt="Shipping"
          />
          <div>
            <h2>Free Shipping</h2>
            <p>Order over 150 EGP</p>
          </div>
        </div>
        <div className="quality-box">
          <img
            src={require("../../assets/icons/customer-support.png")}
            alt="Support"
          />
          <div>
            <h2>24 / 7 Support</h2>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
