import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="navBar">
        <div className="text">
          <p>Furniro</p>
        </div>

        <div className="menu-icon" onClick={toggleSidebar}>
          ☰
        </div>

        <div className="navBarLinks">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="navBarIcons">
          <a href="#">
            <i className="fa-solid fa-user"></i>
          </a>
          <a href="#">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
          <a href="#">
            <i className="fa-solid fa-heart"></i>
          </a>
          <a href="#">
            <i className="fa-solid fa-cart-plus"></i>
          </a>
        </div>
      </div>

      <div className={`sidebar ${isSidebarOpen ? "show" : ""}`}>
        <a href="#" onClick={toggleSidebar}>
          ✖
        </a>
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </>
  );
}

export default Header;
