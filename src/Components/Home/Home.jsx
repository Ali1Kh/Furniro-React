import React from "react";
import Header from "../Constant/Navbar/Navbar";
import "./Home.css";
import Hero from "./Hero/Hero";
import Browse from "./Browse/Browse";
import OurProducts from "./OurProducts/OurProducts";
import Ads from "./Ads/Ads";
import Gallery from "./Gallery/Gallery";
import Footer from "../Constant/Footer/Footer";
export default function Home() {
  return (
    <dir>
      <Header />
      <Hero />
      <Browse />
      <OurProducts />
      <Ads />
      <Gallery />
      <Footer />
    </dir>
  );
}
