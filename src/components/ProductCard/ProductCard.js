import React from "react";
import styles from "./ProductCard.module.scss";

import ProductButton from "../ProductButton/ProductButton";

const ProductCard = (props) => {
  return (
    <>
      <div className={styles.img_box}>
        <picture>
          <source
            media="(max-width:  31.25em)"
            srcSet={props.data.image.mobile}
          />
          <img
            className={styles.img}
            src={props.data.image.desktop}
            alt={props.data.name}
          />
        </picture>
      </div>

      <div className={styles.description_box}>
        {props.data.new ? <p className={styles.new}>new product</p> : null}
        <h3 className={styles.product_name}>{props.data.name}</h3>
        <p className={styles.description}>{props.data.description}</p>
        <ProductButton
          class="orange"
          path={`/${props.data.category}/${props.data.slug}`}
        />
      </div>
    </>
  );
};

export default ProductCard;
