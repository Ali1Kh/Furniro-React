import React, { useRef, useState } from "react";
import "..//Home.css"; 

import img1 from "./slaider1.png";
import img2 from "./slaider2.png";
import img3 from "./slaider3.png";
import img4 from "./slaider4.png";

const Ads = () => {
  const sliderRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [img1, img2, img3, img4,img1, img2, img3, img4];
const moveSlide = (direction) => {
  const slider = sliderRef.current;
  const slideWidth = slider.querySelector("img").clientWidth ; 
  const maxIndex = images.length - 1;

  let newIndex = currentIndex + direction;
  
  if (newIndex < 0) newIndex = 0;
  if (newIndex > maxIndex) newIndex = -maxIndex;

  setCurrentIndex(newIndex);
  slider.style.transform = `translateX(-${newIndex * slideWidth}px)`;

  
};

  return (
    <div className="Section4">
      <div className="box4">
        <div className="boxin4">
          <div className="leftSaide">
            <div className="pragraph">
              <p className="main">50+ Beautiful rooms inspiration</p>
              <p className="scP">
                Our designer already made a lot of beautiful prototypes of rooms that inspire you
              </p>
              <div className="buttonExplore">
                <button type="button">Explore More</button>
              </div>
            </div>
          </div>

          <div className="rightSaide">
            <div className="slider-container">
              <div className="slider-track" ref={sliderRef}>
                {images.map((img, index) => (
                  <img src={img} />
                ))}
              </div>
              <button className="arrow left" onClick={() => moveSlide(-1)}>
                &#10094;
              </button>
              <button className="arrow right" onClick={() => moveSlide(1)}>
                &#10095;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
