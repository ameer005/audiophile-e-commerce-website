import React from "react";
import styles from "./ProductsList.module.scss";

import ProductCard from "../ProductCard/ProductCard";

const ProductsList = (props) => {
  const renderProductsList = () => {
    return props.data.map((product, index) => {
      return (
        <div
          className={`product-container product-container--${index + 1}`}
          key={product.id}
        >
          <ProductCard data={product} />
        </div>
      );
    });
  };
  return (
    <div className={`${styles.container} ut-align-center`}>
      <div className={`products_grid ut-width`}>{renderProductsList()}</div>
    </div>
  );
};

export default ProductsList;
