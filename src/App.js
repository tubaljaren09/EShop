import React from "react";
import { Routes, Route } from "react-router-dom";

/* Styles */
import "./styles/app.scss";

/* Components */
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";

const App = () => {
  return (
    <div className="app-main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
