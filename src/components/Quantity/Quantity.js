import React from "react";
import styles from "./Quantity.module.scss";
import { useDispatch } from "react-redux";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../../features/product/productSlice";

const Quantity = ({ quantity, setQuantity, className, cartItem }) => {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);

    if (!cartItem) return;

    dispatch(increaseItemQuantity(cartItem.id));
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);

    if (!cartItem || quantity === 1) return;

    dispatch(decreaseItemQuantity(cartItem.id));
  };
  return (
    <div
      className={`${styles.container} ${
        className === "small" ? styles.small : ""
      }`}
    >
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
