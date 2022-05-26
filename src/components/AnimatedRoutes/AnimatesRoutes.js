import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Checkout from "../../pages/Checkout/Checkout";
import Earphones from "../../pages/Earphones/Earphones";
import Headphones from "../../pages/Headphones/Headphones";
import Home from "../../pages/Home/Home";
import Product from "../../pages/Product/Product";
import Speakers from "../../pages/Speakers/Speakers";

const AnimatesRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" exact element={<Home />} />
      <Route path="/headphones" element={<Headphones />} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="/earphones" element={<Earphones />} />
      <Route path="/headphones/:product" element={<Product />} />
      <Route path="/speakers/:product" element={<Product />} />
      <Route path="/earphones/:product" element={<Product />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default AnimatesRoutes;
