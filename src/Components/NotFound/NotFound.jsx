import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ marginTop: "100px", textAlign: "center" }}>
      <h1 style={{ fontSize: "50px" , marginBottom: "20px" }}>Page Not Found</h1>
      <p>The page you are looking for is not found. <Link to="/">Go Home</Link></p>
    </div>
  );
}
