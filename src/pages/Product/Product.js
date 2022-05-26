import React from "react";
import styles from "./Product.module.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Categories from "../../components/Categories/Categories";
import FeaturesBox from "../../components/FeaturesBox/FeaturesBox";

const Product = () => {
  const data = useSelector((state) => state.products);
  const { product } = useParams();

  if (data.status !== "success") return;

  const [productData] = data.products.filter((item) => item.slug == product);

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
          </div>
        </div>
        <Categories />
        <FeaturesBox />
      </div>
    </div>
  );
};

export default Product;
