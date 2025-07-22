import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Components/Shop/Shop";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Contact from "./Components/Contact/Contact";
import Product from "./Components/Product/Product";
import Compare from "./Components/Compare/Compare";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/compare" element={<Product />} />
        <Route path="/product" element={<Compare />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
