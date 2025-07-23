import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
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
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="navBarIcons">
          <Link to="/compare">
            <i className="fa-solid fa-user"></i>
          </Link>
          <Link>
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
          <Link>
            <i className="fa-solid fa-heart"></i>
          </Link>
          <Link href="/checkout">
            <i className="fa-solid fa-cart-plus"></i>
          </Link>
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

export default Navbar;
