import React from "react";
import styles from "./Quantity.module.scss";

const Quantity = () => {
  return (
    <div className={styles.container}>
      <button className={styles.btn_quantity}>-</button>
      <div className={styles.number}>0</div>
      <button className={styles.btn_quantity}>+</button>
    </div>
  );
};

export default Quantity;
