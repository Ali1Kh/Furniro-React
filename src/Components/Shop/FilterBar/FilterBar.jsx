import React from "react";
import "./FilterBar.css";

import filterIcon from "../../../assets/icons/filtering.png";
import listIcon from "../../../assets/icons/Vector (1) copy.png";
import gridIcon from "../../../assets/icons/Vector.png";

const FilterBar = () => {
  return (
    <section className="barSection1">
      <div className="inBarLeft">
        <div className="in1">
          <img src={filterIcon} alt="Filter Icon" />
          <p className="filter">Filter</p>
        </div>

        <div className="layout-icons">
          <img src={listIcon} id="listView" title="List View" />
          <img src={gridIcon} id="gridView" title="Grid View" />
        </div>
      </div>

      <div className="inBarRight">
        <div className="in1">
          <p className="filter">Showing</p>
          <span className="productCount">12</span>
          <p>products</p>
        </div>

        <div className="short">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" className="dropdown">
            <option>Default</option>
            <option>Price (Low to High)</option>
            <option>Price (High to Low)</option>
            <option>Newest</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
