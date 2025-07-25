import React from "react";
import "./Gallery.css";

export default function Gallery() {
  return (
    <div className="gallery">
      <div className="title">
        <h4>Share your setup with</h4>
        <h1>#FuniroFurniture</h1>
      </div>
      <div className="galleryImages">
        <div className="flexsContainer">
          <div className="flexCol">
            <div className="flexRow">
              <div className="imageContainer">
                <img src={require("../../../assets/images/Gallery/L.png")} />
              </div>
              <div className="imageContainer">
                <img
                  src={require("../../../assets/images/Gallery/Rectangle 38.png")}
                />
              </div>
            </div>
            <div className="flexRow alignTop">
              <div className="imageContainer">
                <img src={require("../../../assets/images/Gallery/LL.png")} />
              </div>
              <div className="imageContainer">
                <img
                  src={require("../../../assets/images/Gallery/Rectangle 39.png")}
                />
              </div>
            </div>
          </div>
          <div className="imageContainer">
            <img
              src={require("../../../assets/images/Gallery/Rectangle 40.png")}
            />
          </div>
          <div className="flexCol">
            <div className="flexRow">
              <div className="imageContainer">
                <img
                  src={require("../../../assets/images/Gallery/Rectangle 43.png")}
                />
              </div>
              <div className="imageContainer">
                <img
                  src={require("../../../assets/images/Gallery/Rectangle 45.png")}
                />
              </div>
            </div>
            <div className="flexRow alignTop">
              <div className="imageContainer">
                <img
                  src={require("../../../assets/images/Gallery/Rectangle 41.png")}
                />
              </div>
              <div className="imageContainer">
                <img
                  src={require("../../../assets/images/Gallery/Rectangle 44.png")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
