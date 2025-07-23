import React from "react";
import Header from "../Constant/Navbar/Navbar";
import Banner from "../Constant/Banner/Banner";
import FilterBar from "./FilterBar/FilterBar";
import SectionOne from "./SectionOne/SectionOne";
import Footer from "../Constant/Footer/Footer";
import Quality from "../Constant/Quality/Quality";

export default function Shop() {
  return (
    <div>
      <Header />
      <Banner title={"Shop"} />
      <FilterBar />
      <SectionOne />
      <Quality />
      <Footer />
    </div>
  );
}
