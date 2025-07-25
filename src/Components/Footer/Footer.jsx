import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div class="footer-top">
        <div class="about">
          <h3>Furniro.</h3>
          <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>
        <div class="footer-links">
          <h4>Links</h4>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div class="footer-links">
          <h4>Help</h4>
          <Link>Payment Options</Link>
          <Link>Returns</Link>
          <Link>Privacy Policies</Link>
        </div>
        <div class="newsletter">
          <h4>Newsletter</h4>
          <input type="email" placeholder="Enter your email address" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 Furniro. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
