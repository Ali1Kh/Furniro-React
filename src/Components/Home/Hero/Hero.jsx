import React from "react";
import "./Hero.css";
export default function Hero() {
  return <div>
    {/* <!-- Section 1 --> */}
    <div className="section1">
      <div className="backgroundFull">
        <div className="box">
          <div className="inbox">
            <p className="smalP">New Arrival</p>
            <p className="bigP">Discover Our New Collection</p>
            <p className="smalP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <div className="buttonBuy">
              <button type="button">BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
