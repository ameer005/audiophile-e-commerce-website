import React from "react";
import styles from "./App.module.scss";
import AnimatesRoutes from "./components/AnimatedRoutes/AnimatesRoutes";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
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
