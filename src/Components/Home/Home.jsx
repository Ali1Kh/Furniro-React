import React from "react";
import Header from "../Constant/Navbar/Navbar";
import "./Home.css";
export default function Home() {
  return (
<>
          <Header />

   <div class="section1">
          <div class="backgroundFull">
        <div class="box">
          <div class="inbox">
            <p class="smalP">New Arrival</p>
            <p class="bigP">Discover Our New Collection</p>
            <p class="smalP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <div class="buttonBuy">
              <button type="button">BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>


</>
  
  );
}
