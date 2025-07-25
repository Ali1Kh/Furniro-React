import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Compare.css";
import backgroundImage from "../../assets/images/background 1.png";
import asgaardSofa from "../../assets/images/product/Asgaard sofa 3.png";
import cloudSofa from "../../assets/images/product/Cloud sofa three seater + ottoman_1 1.png";
import Banner from "../../Components/Banner/Banner";
import Quality from "../../Components/Quality/Quality";

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
      <Banner title={"Product Comparison"} />

      <div className="comparison-container">
        <div className="left-section">
          <h2>Go to Product page for more Products</h2>
          <a href="/pages/shop.html" className="view-more-link">
            View More
          </a>
        </div>

        <div className="products-section">
          <div className="product-card">
            <img
              src={require("../../assets/images/product/Asgaard sofa 3.png")}
              alt="Asgaard Sofa"
              className="product-img"
            />
            <h3>Asgaard Sofa</h3>
            <div className="price">Rs. 250,000.00</div>
            <div className="rating">
              <span className="stars">
                {" "}
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </span>
              <span className="rating-text">4.7</span>
              <span className="reviews">(204 Review)</span>
            </div>
          </div>

          <div className="product-card">
            <img
              src={require("../../assets/images/product/Cloud sofa three seater + ottoman_1 1.png")}
              alt="Outdoor Sofa Set"
              className="product-img"
            />
            <h3>Outdoor Sofa Set</h3>
            <div className="price">Rs. 224,000.00</div>
            <div className="rating">
              <span className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </span>
              <span className="rating-text">4.2</span>
              <span className="reviews">(145 Review)</span>
            </div>
          </div>
        </div>

        <div className="right-section">
          <h2>Add A Product</h2>
          <button className="choose-product-btn">
            Choose a Product
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>
      </div>

      <div className="comparison-table-container">
        <table className="comparison-table">
          <tbody>
            <tr className="section-header">
              <td colspan="3">General</td>
            </tr>
            <tr>
              <td>Sales Package</td>
              <td>1 sectional sofa</td>
              <td>1 Three Seater, 2 Single Seater</td>
            </tr>
            <tr>
              <td>Model Number</td>
              <td>TFCBLIGRBL6SRHS</td>
              <td>DTUBLIGRBL568</td>
            </tr>
            <tr>
              <td>Secondary Material</td>
              <td>Solid Wood</td>
              <td>Solid Wood</td>
            </tr>
            <tr>
              <td>Configuration</td>
              <td>L-shaped</td>
              <td>L-shaped</td>
            </tr>
            <tr>
              <td>Upholstery Material</td>
              <td>Fabric + Cotton</td>
              <td>Fabric + Cotton</td>
            </tr>
            <tr>
              <td>Upholstery Color</td>
              <td>Bright Grey & Lion</td>
              <td>Bright Grey & Lion</td>
            </tr>

            <tr className="section-header">
              <td colspan="3">Product</td>
            </tr>
            <tr>
              <td>Filling Material</td>
              <td>Foam</td>
              <td>Matte</td>
            </tr>
            <tr>
              <td>Finish Type</td>
              <td>Bright Grey & Lion</td>
              <td>Bright Grey & Lion</td>
            </tr>
            <tr>
              <td>Adjustable Headrest</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Maximum Load Capacity</td>
              <td>280 KG</td>
              <td>300 KG</td>
            </tr>
            <tr>
              <td>Origin of Manufacture</td>
              <td>India</td>
              <td>India</td>
            </tr>

            <tr className="section-header">
              <td colspan="3">Dimensions</td>
            </tr>
            <tr>
              <td>Width</td>
              <td>265.32 cm</td>
              <td>265.32 cm</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>76 cm</td>
              <td>76 cm</td>
            </tr>
            <tr>
              <td>Depth</td>
              <td>167.76 cm</td>
              <td>167.76 cm</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>45 KG</td>
              <td>65 KG</td>
            </tr>
            <tr>
              <td>Seat Height</td>
              <td>41.52 cm</td>
              <td>41.52 cm</td>
            </tr>
            <tr>
              <td>Leg Height</td>
              <td>5.46 cm</td>
              <td>5.46 cm</td>
            </tr>

            <tr className="section-header">
              <td colspan="3">Warranty</td>
            </tr>
            <tr>
              <td>Warranty Summary</td>
              <td>1 Year Manufacturing Warranty</td>
              <td>1.2 Year Manufacturing Warranty</td>
            </tr>
            <tr>
              <td>Warranty Service Type</td>
              <td>
                For Warranty Claims or Any Product Related Issues Please Email
                at operations@trevifurniture.com
              </td>
              <td>
                For Warranty Claims or Any Product Related Issues Please Email
                at support@xyz.com
              </td>
            </tr>
            <tr>
              <td>Covered in Warranty</td>
              <td>Warranty Against Manufacturing Defect</td>
              <td>
                Warranty of the product is limited to manufacturing defects
                only.
              </td>
            </tr>
            <tr>
              <td>Not Covered in Warranty</td>
              <td>
                The Warranty Does Not Cover Damages Due To Usage Of The Product
                Beyond Its Intended Use And Wear & Tear In The Natural Course Of
                Product Usage.
              </td>
              <td>
                The Warranty Does Not Cover Damages Due To Usage Of The Product
                Beyond Its Intended Use And Wear & Tear In The Natural Course Of
                Product Usage.
              </td>
            </tr>
            <tr>
              <td>Domestic Warranty</td>
              <td>1 Year</td>
              <td>3 Months</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="action-buttons">
        <button className="add-to-cart-btn">Add To Cart</button>
        <button className="add-to-cart-btn">Add To Cart</button>
      </div>

      <Quality />
      <Footer />
    </div>
  );
}
