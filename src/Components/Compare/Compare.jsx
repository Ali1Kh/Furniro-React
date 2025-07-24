import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Constant/Navbar/Navbar";
import Footer from "../Constant/Footer/Footer";
import "./Compare.css";
import backgroundImage from "../../assets/images/background 1.png";
import asgaardSofa from "../../assets/images/product/Asgaard sofa 3.png";
import cloudSofa from "../../assets/images/product/Cloud sofa three seater + ottoman_1 1.png";
import Banner from "../Constant/Banner/Banner";
import Quality from "../Constant/Quality/Quality";

export default function Compare() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const addProduct = () => {
    alert("Add product functionality coming soon!");
  };

  return (
    <div className="compare-page">
      <Header />
      s <Banner title={"Product Comparison"} />
      {/* Comparison Container */}
      <div className="comparison-container">
        <div className="left-section">
          <h2>Choose Products</h2>
          <Link to="/shop" className="view-more-link">
            View More Products
          </Link>
        </div>

        <div className="products-section">
          <div className="product-card">
            <img src={asgaardSofa} alt="Asgaard sofa" className="product-img" />
            <h3>Asgaard sofa</h3>
            <div className="price">$250</div>
            <div className="rating">
              <div className="stars">★★★★★</div>
              <div className="rating-text">5.0</div>
              <div className="reviews">(2 reviews)</div>
            </div>
          </div>

          <div className="product-card">
            <img src={cloudSofa} alt="Cloud sofa" className="product-img" />
            <h3>Cloud sofa</h3>
            <div className="price">$320</div>
            <div className="rating">
              <div className="stars">★★★★☆</div>
              <div className="rating-text">4.8</div>
              <div className="reviews">(5 reviews)</div>
            </div>
          </div>
        </div>

        <div className="right-section">
          <h2>Need Help?</h2>
          <button className="choose-product-btn" onClick={addProduct}>
            <i>+</i>
            Add Product
          </button>
        </div>
      </div>
      {/* Comparison Table */}
      <div className="comparison-table-container">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Features</th>
              <th>
                <img
                  src={asgaardSofa}
                  alt="Asgaard sofa"
                  className="product-img"
                />
                <h3>Asgaard sofa</h3>
                <div className="price">$250</div>
                <div className="rating">
                  <div className="stars">★★★★★</div>
                  <div className="rating-text">5.0</div>
                  <div className="reviews">(2 reviews)</div>
                </div>
              </th>
              <th>
                <img src={cloudSofa} alt="Cloud sofa" className="product-img" />
                <h3>Cloud sofa</h3>
                <div className="price">$320</div>
                <div className="rating">
                  <div className="stars">★★★★☆</div>
                  <div className="rating-text">4.8</div>
                  <div className="reviews">(5 reviews)</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="section-header">
              <td colSpan="3">Dimensions & Weight</td>
            </tr>
            <tr>
              <td>Length</td>
              <td>200cm</td>
              <td>220cm</td>
            </tr>
            <tr>
              <td>Width</td>
              <td>85cm</td>
              <td>90cm</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>75cm</td>
              <td>80cm</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>25kg</td>
              <td>30kg</td>
            </tr>

            <tr className="section-header">
              <td colSpan="3">Materials & Construction</td>
            </tr>
            <tr>
              <td>Frame Material</td>
              <td>Solid Wood</td>
              <td>Engineered Wood</td>
            </tr>
            <tr>
              <td>Upholstery</td>
              <td>Premium Fabric</td>
              <td>Leather</td>
            </tr>
            <tr>
              <td>Cushion Filling</td>
              <td>High-Density Foam</td>
              <td>Memory Foam</td>
            </tr>

            <tr className="section-header">
              <td colSpan="3">Features & Comfort</td>
            </tr>
            <tr>
              <td>Seat Depth</td>
              <td>55cm</td>
              <td>60cm</td>
            </tr>
            <tr>
              <td>Back Height</td>
              <td>65cm</td>
              <td>70cm</td>
            </tr>
            <tr>
              <td>Warranty</td>
              <td>3 Years</td>
              <td>5 Years</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="add-to-cart-btn">Add to Cart - Asgaard sofa</button>
        <button className="add-to-cart-btn">Add to Cart - Cloud sofa</button>
      </div>
      <Quality />
      <Footer />
    </div>
  );
}
