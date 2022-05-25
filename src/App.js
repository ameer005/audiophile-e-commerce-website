import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import styles from "./App.module.scss";
import AnimatesRoutes from "./components/AnimatedRoutes/AnimatesRoutes";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import { fetchProducts } from "./features/product/productSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <main>
        <AnimatesRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
