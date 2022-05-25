import React from "react";
import styles from "./Headphones.module.scss";
import FeaturesBox from "../../components/FeaturesBox/FeaturesBox";
import Categories from "../../components/Categories/Categories";
import CategoryHeading from "../../components/CategoryHeading/CategoryHeading";

const Headphones = () => {
  return (
    <div>
      <CategoryHeading text="headphones" />
      <Categories />
      <FeaturesBox />
    </div>
  );
};

export default Headphones;
