import React from "react";
import styles from "./ProductCard.module.scss";

import ProductButton from "../ProductButton/ProductButton";

const ProductCard = (props) => {
  return (
    <>
      <div className={styles.img_box}>
        <img
          className={styles.img}
          src={props.data.image.desktop}
          alt={props.data.name}
        />
      </div>

      <div className={styles.description_box}>
        {props.data.new ? <p className={styles.new}>new product</p> : null}
        <h3 className={styles.product_name}>{props.data.name}</h3>
        <p className={styles.description}>{props.data.description}</p>
        <ProductButton class="orange" path="/" />
      </div>
    </>
  );
};

export default ProductCard;
