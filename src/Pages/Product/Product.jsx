import React, { useState } from "react";
import Header from "../../Components/Navbar/Navbar";
import "./Product.css";
import "../Shop/SectionOne/SectionOne.css";
import { Link } from "react-router-dom";
import { ProductItem } from "../Shop/SectionOne/SectionOne";
import Footer from "../../Components/Footer/Footer";

export default function Product() {
  let relatedProducts = [
    {
      id: 1,
      image: require(`../../assets/images/section3_1.png`),
      fuct: "Respira",
      name: `Minimalist chair`,
      price: `Rp 500000.000`,
      oldPrice: `Rp 950000.000`,
    },
    {
      id: 2,
      image: require(`../../assets/images/section3_2.png`),
      fuct: "Respira",
      name: `Minimalist chair`,
      price: `Rp 450000.000`,
      oldPrice: `Rp 550000.000`,
    },
    {
      id: 3,
      image: require(`../../assets/images/section3_3.png`),
      fuct: "Respira",
      name: `Minimalist chair`,
      price: `Rp 50000.000`,
      oldPrice: `Rp 750000.000`,
    },
    {
      id: 4,
      image: require(`../../assets/images/section3_4.png`),
      fuct: "Respira",
      name: `Minimalist chair`,
      price: `Rp 50000.000`,
      oldPrice: `Rp 750000.000`,
    },
  ];

  let [headImage, setHeadImage] = useState(
    require("../../assets/images/product/Asgaard sofa 3.png")
  );

  let productImages = [
    require(`../../assets/images/product/1.png`),
    require(`../../assets/images/product/2.png`),
    require(`../../assets/images/product/3.png`),
    require(`../../assets/images/product/4.png`),
  ];

  let [quantity, setQuantity] = useState(1);
  return (
    <div>
      <Header />
      <main>
        <div class="navigatePages">
          <Link to="/">Home</Link>
          <span>
            <i class="fa-solid fa-chevron-right"></i>
          </span>
          <Link to="/shop">Shop</Link>
          <span>
            <i class="fa-solid fa-chevron-right"></i>
          </span>
          <span class="dash"></span>
          <p>Asgaard sofa</p>
        </div>
        <div class="productContainer">
          <div class="productInfo">
            <div class="imagesContainer">
              <div class="sideImages">
                {productImages.map((item) => (
                  <div onClick={() => setHeadImage(item)} class="sideImageItem">
                    <img src={item} alt="" />
                  </div>
                ))}
              </div>
              <div class="headImage">
                <img src={headImage} alt="" />
              </div>
            </div>
            <div class="content">
              <h2>Asgaard sofa</h2>
              <p>Rs. 250,000.00</p>
              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p>
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>
              <div class="sizes">
                <p>Sizes</p>
                <span>L</span>
                <span>XL</span>
                <span>XS</span>
              </div>
              <div class="colors">
                <p>Colors</p>
                <div class="colorsItems">
                  <div class="purple"></div>
                  <div class="black"></div>
                  <div class="brown"></div>
                </div>
              </div>
              <div class="productActionBtns">
                <div class="quantityBtn">
                  <button
                    onClick={() =>
                      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
                    }
                  >
                    <i class="fa-solid fa-minus"></i>
                  </button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
                <div class="addToCartBtn">
                  <button>Add To Cart</button>
                </div>
                <div class="compareBtn">
                  <button>
                    <i class="fa-solid fa-plus"></i>
                    Compare
                  </button>
                </div>
              </div>
              <div class="otherDetails">
                <ul>
                  <li>
                    <span>SKU:</span> SS001
                  </li>
                  <li>
                    <span>Category:</span> Sofas
                  </li>
                  <li>
                    <span>Tags:</span> Sofa, Chair, Home, Shop
                  </li>
                  <li>
                    <div class="shareIconsContainer">
                      <span>Share:</span>
                      <div class="socialIcons">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-twitter"></i>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="productContainer">
          <div class="productDescreption">
            <div class="descTitles">
              <h3 class="active">Description</h3>
              <h3>Additional Information</h3>
              <h3>Reviews [5]</h3>
            </div>
            <div class="descreption">
              <p>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road.
              </p>
              <p>
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </p>
            </div>
            <div class="images">
              <div class="imageItem">
                <img
                  src={require("../../assets/images/product/Cloud sofa three seater + ottoman_1 1.png")}
                  alt=""
                />
              </div>
              <div class="imageItem">
                <img
                  src={require("../../assets/images/product/Cloud sofa three seater + ottoman_1 1.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="productContainer">
          <div class="section3">
            <div class="title">
              <h2>Related Products</h2>
            </div>
            <div class="boxContainer grid-view">
              {relatedProducts.map((product) => (
                <ProductItem product={product} />
              ))}
            </div>

            <div class="moreBtn">
              <button>Show More</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
