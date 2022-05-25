import React from "react";
import styles from "./Speakers.module.scss";

import FeaturesBox from "../../components/FeaturesBox/FeaturesBox";
import Categories from "../../components/Categories/Categories";
import CategoryHeading from "../../components/CategoryHeading/CategoryHeading";

const Speakers = () => {
  return (
    <div>
      <CategoryHeading text="speakers" />
      <Categories />
      <FeaturesBox />
    </div>
  );
};

export default Speakers;
