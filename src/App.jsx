import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Components/Shop/Shop";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
