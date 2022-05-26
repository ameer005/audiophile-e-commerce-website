import React from "react";
import styles from "./Product.module.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Categories from "../../components/Categories/Categories";
import FeaturesBox from "../../components/FeaturesBox/FeaturesBox";
import Quantity from "../../components/Quantity/Quantity";

const Product = () => {
  const data = useSelector((state) => state.products);
  const { product } = useParams();

  if (data.status !== "success") return;

  const [productData] = data.products.filter((item) => item.slug == product);

  const renderAccessories = () => {
    return productData.includes.map((acc) => {
      return (
        <div className={styles.acc_container}>
          <div className={styles.acc_quantity}>{`${acc.quantity}x`}</div>
          <div className={styles.acc_item}>{acc.item}</div>
        </div>
      );
    });
  };

  console.log(productData);
  return (
    <div className={`${styles.product_container} ut-align-center`}>
      <div className={`${styles.product_details} ut-width`}>
        <div className={styles.top}>
          <div className={styles.img_box}>
            <img
              className={styles.img}
              src={productData.image.desktop}
              alt={productData.name}
            />
          </div>

          <div className={styles.text_box}>
            {productData.new ? <p className={styles.new}>new product</p> : null}
            <h3 className={styles.product_name}>{productData.name}</h3>
            <p className={styles.description}>{productData.description}</p>
            <p className={styles.price}>{`$ ${productData.price}`}</p>
            <div className={styles.quantity_group}>
              <Quantity />
              <button className="product-btn product-btn--orange">
                add to cart
              </button>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.features}>
            <div className={styles.feature_text_box}>
              <h2 className={styles.feature_heading}>Features</h2>
              <p className={styles.feature_text}>{productData.features}</p>
            </div>
            <div className={styles.feature_acc_box}>
              <h2 className={styles.feature_heading}>in the box</h2>
              {renderAccessories()}
            </div>
          </div>
        </div>
        <Categories />
        <FeaturesBox />
      </div>
    </div>
  );
};

export default Product;
