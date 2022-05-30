import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Checkout from "../../pages/Checkout/Checkout";
import Earphones from "../../pages/Earphones/Earphones";
import Headphones from "../../pages/Headphones/Headphones";
import Home from "../../pages/Home/Home";
import Product from "../../pages/Product/Product";
import Speakers from "../../pages/Speakers/Speakers";

import { AnimatePresence } from "framer-motion";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const AnimatesRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <ScrollToTop>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<Home />} />
          <Route exact path="/headphones" element={<Headphones />} />
          <Route exact path="/speakers" element={<Speakers />} />
          <Route exact path="/earphones" element={<Earphones />} />
          <Route exact path="/headphones/:product" element={<Product />} />
          <Route exact path="/speakers/:product" element={<Product />} />
          <Route exact path="/earphones/:product" element={<Product />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </ScrollToTop>
    </AnimatePresence>
  );
};

export default AnimatesRoutes;
