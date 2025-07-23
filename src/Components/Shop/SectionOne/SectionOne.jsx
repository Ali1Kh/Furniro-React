import React, { useState } from "react";
import "./SectionOne.css";
import { Link } from "react-router-dom";

const SectionOne = () => {
  const totalProducts = 44;
  const itemsPerPage = 16;
  const maxImageNumber = 8;

  const allProducts = Array.from({ length: totalProducts }, (_, i) => {
    const imageNumber = (i % maxImageNumber) + 1;
    return {
      id: i + 1,
      image: require(`../../../assets/images/section3_${(i % 8) + 1}.png`),
      fuct: "Respira",
      name: `Minimalist chair ${i + 1}`,
      price: `Rp ${500 + i * 10}.000`,
      oldPrice: `Rp ${750 + i * 10}.000`,
    };
  });

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = allProducts.slice(startIndex, endIndex);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="section3">
      <h2>Our Products</h2>

      <div className="boxContainer grid-view">
        {currentProducts.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`pageBtn ${currentPage === i + 1 ? "active" : ""}`}
            onClick={() => handlePageClick(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            className="pageBtn next"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export const ProductItem = ({ product }) => {
  return (
    <>
      <div key={product.id} className="boxin">
        <img src={product.image} alt={product.name} />
        <p className="fuct">{product.fuct}</p>
        <p className="productName">{product.name}</p>
        <p className="price">
          {product.price}
          <del style={{ color: "#a7a7a7", paddingLeft: "10px" }}>
            {product.oldPrice}
          </del>
        </p>
        <button className="addCartBtn">Add to Cart</button>
        <div className="linksUnderBtn">
          <Link to={`/product`}>Details</Link>
          <a href="#">Share</a>
          <a href="#">Wishlist</a>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
