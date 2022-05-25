import React from "react";
import styles from "./Earphones.module.scss";

import FeaturesBox from "../../components/FeaturesBox/FeaturesBox";
import Categories from "../../components/Categories/Categories";
import CategoryHeading from "../../components/CategoryHeading/CategoryHeading";

const Earphones = () => {
  return (
    <div>
      <CategoryHeading text="Earphones" />
      <Categories />
      <FeaturesBox />
    </div>
  );
};

export default Earphones;
