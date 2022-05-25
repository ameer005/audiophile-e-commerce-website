import React from "react";
import styles from "./CategoryHeading.module.scss";

const CategoryHeading = (props) => {
  return (
    <div className={`${styles.category_heading} ut-align-center`}>
      <div className={styles.heading}>{props.text}</div>
    </div>
  );
};

export default CategoryHeading;
