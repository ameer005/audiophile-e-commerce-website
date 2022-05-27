import React from "react";
import styles from "./Quantity.module.scss";

const Quantity = ({ quantity, setQuantity }) => {
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };
  return (
    <div className={styles.container}>
      <button onClick={decreaseQuantity} className={styles.btn_quantity}>
        -
      </button>
      <div className={styles.number}>{quantity}</div>
      <button onClick={increaseQuantity} className={styles.btn_quantity}>
        +
      </button>
    </div>
  );
};

export default Quantity;
