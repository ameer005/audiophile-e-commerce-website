import React, { useState } from "react";
import styles from "./CartItems.module.scss";
import currencyFormatter from "../../utils/currencyFormatter";
import Quantity from "../Quantity/Quantity";

const CartItems = (props) => {
  const [quantity, setQuantity] = useState(props.data.quantity);

  return (
    <div className={styles.cart_items}>
      <div className={styles.product}>
        <div className={styles.item_img_box}>
          <img
            className={styles.item_img}
            src={props.data.image.cart}
            alt={props.data.name}
          />
        </div>
        <div className={styles.item_details_box}>
          <div className={styles.item_name}>{props.data.name}</div>
          <div className={styles.item_price}>
            {currencyFormatter.format(props.data.price)}
          </div>
        </div>
      </div>
      {props.class ? (
        <div className={styles.quantity_no}>{`x${props.data.quantity}`}</div>
      ) : (
        <Quantity
          cartItem={props.data}
          className="small"
          quantity={quantity}
          setQuantity={setQuantity}
        />
      )}
    </div>
  );
};

export default CartItems;
