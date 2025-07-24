import React from "react";
import { ProductItem } from "../../Shop/SectionOne/SectionOne";

export default function OurProducts() {
  let ourProducts = [
    {
      id: 1,
      image: require(`../../../assets/images/section3_1.png`),
      fuct: "Respira",
      name: `Minimalist chair`,
      price: `Rp 500000.000`,
      oldPrice: `Rp 950000.000`,
    },
    {
      id: 2,
      image: require(`../../../assets/images/section3_2.png`),
      fuct: "Respira",
      name: `Minimalist chair`,
      price: `Rp 450000.000`,
      oldPrice: `Rp 550000.000`,
    },
    {
      id: 3,
      image: require(`../../../assets/images/section3_3.png`),
      fuct: "Respira",
      name: `Minimalist chair`,
      price: `Rp 50000.000`,
      oldPrice: `Rp 750000.000`,
    },
    {
      id: 4,
      image: require(`../../../assets/images/section3_4.png`),
      fuct: "Respira",
      name: `Minimalist chair`,
      price: `Rp 50000.000`,
      oldPrice: `Rp 750000.000`,
    },
    {
      id: 5,
      image: require(`../../../assets/images/section3_5.png`),
      fuct: "Respira",
      name: `Minimalist chair`,
      price: `Rp 50000.000`,
      oldPrice: `Rp 750000.000`,
    },
    {
      id: 6,
      image: require(`../../../assets/images/section3_6.png`),
      fuct: "Respira",
      name: `Minimalist chair`,
      price: `Rp 50000.000`,
      oldPrice: `Rp 750000.000`,
    },
    {
      id: 7,
      image: require(`../../../assets/images/section3_7.png`),
      fuct: "Respira",
      name: `Minimalist chair`,
      price: `Rp 50000.000`,
      oldPrice: `Rp 750000.000`,
    },
    {
      id: 8,
      image: require(`../../../assets/images/section3_8.png`),
      fuct: "Respira",
      name: `Minimalist chair`,
      price: `Rp 50000.000`,
      oldPrice: `Rp 750000.000`,
    },
  ];
  return (
    <div>
      <div class="section3">
        <div class="title">
          <h2>Our Products</h2>
        </div>
        <div class="boxContainer grid-view">
          {ourProducts.map((product) => (
            <ProductItem product={product} />
          ))}
        </div>

        <div class="moreBtn">
          <button>Show More</button>
        </div>
      </div>
    </div>
  );
}
