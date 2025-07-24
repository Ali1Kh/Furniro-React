import React from "react";
import "./Browse.css";

function Browse() {
  return (
    <div id="Browse">
      <div className="browseTitle">
        <h1>Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="img">
        <div className="card">
          <img src={require("../../../assets/images/section2_1.png")} alt="Dining" />
          <h2>Dining</h2>
        </div>

        <div className="card">
          <img src={require("../../../assets/images/section2_2.png")} alt="Living" />
          <h2>Living</h2>
        </div>

        <div className="card">
          <img src={require("../../../assets/images/section2_3.png")} alt="Bedroom" />
          <h2>Bed room</h2>
        </div>
      </div>
    </div>
  );
}

export default Browse;
