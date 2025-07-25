import React from "react";
import Header from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import FilterBar from "./FilterBar/FilterBar";
import SectionOne from "./SectionOne/SectionOne";
import Footer from "../../Components/Footer/Footer";
import Quality from "../../Components/Quality/Quality";

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
