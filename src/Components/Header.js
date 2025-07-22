import { useState } from "react";
import "./Header.css";

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

        <div className="menu-icon" onClick={toggleSidebar}>☰</div>

        <div className="navBarLinks">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="navBarIcons">
          <a href="#"><i className="fa-solid fa-user"></i></a>
          <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
          <a href="#"><i className="fa-solid fa-heart"></i></a>
          <a href="#"><i className="fa-solid fa-cart-plus"></i></a>
        </div>
      </div>

      <div className={`sidebar ${isSidebarOpen ? "show" : ""}`}>
        <a href="#" onClick={toggleSidebar}>✖</a>
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </>
  );
}

export default Header;
