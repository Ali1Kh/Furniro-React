import React from "react";
import Header from "../Constant/Header/Header";
import Rectangle from "../Constant/Rectangle/Rectangle";
import FilterBar from "./FilterBar/FilterBar";
import SectionOne from "./SectionOne/SectionOne";
import Footer from "../Constant/Footer/Footer";

export default function Shop() {
  return (
    <div>
      <Header />
      <Rectangle title={"Shop"} />
      <FilterBar />
      <SectionOne />
      <Footer />
    </div>
  );
}
