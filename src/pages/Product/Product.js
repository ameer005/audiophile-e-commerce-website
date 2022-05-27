import React, { useState } from "react";
import styles from "./Product.module.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import Categories from "../../components/Categories/Categories";
import FeaturesBox from "../../components/FeaturesBox/FeaturesBox";
import Quantity from "../../components/Quantity/Quantity";
import ProductButton from "../../components/ProductButton/ProductButton";
import { addToCart } from "../../features/product/productSlice";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const data = useSelector((state) => state.products);
  const { product } = useParams();

  if (data.status !== "success") return;

  const [productData] = data.products.filter((item) => item.slug == product);

  const cart = () => {
    dispatch(addToCart({ ...productData, quantity: quantity }));
  };

  const renderAccessories = () => {
    return productData.includes.map((acc, index) => {
      return (
        <div key={index} className={styles.acc_container}>
          <div className={styles.acc_quantity}>{`${acc.quantity}x`}</div>
          <div className={styles.acc_item}>{acc.item}</div>
        </div>
      );
    });
  };

  const renderSuggestedItems = () => {
    return productData.others.map((item, index) => {
      const [category] = data.products.filter(
        (product) => product.slug == item.slug
      );

      return (
        <div key={index} className={styles.suggested_card}>
          <div className={styles.suggested_img_box}>
            <img
              className={styles.suggested_img}
              src={item.image.desktop}
              alt={item.name}
            />
          </div>
          <div className={styles.suggested_text_box}>
            <p className={styles.suggested_product_name}>{item.name}</p>
            <ProductButton
              class="orange"
              path={`/${category.category}/${item.slug}`}
            />
          </div>
        </div>
      );
    });
  };

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
              <Quantity quantity={quantity} setQuantity={setQuantity} />
              <button
                onClick={cart}
                className="product-btn product-btn--orange"
              >
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

          <div className={styles.gallery}>
            <div className={styles.gallery_img_box_1}>
              <img
                className={styles.gallery_img}
                src={productData.gallery.first.desktop}
                alt="gallery img 1"
              />
            </div>
            <div className={styles.gallery_img_box_2}>
              <img
                className={styles.gallery_img}
                src={productData.gallery.second.desktop}
                alt="gallery img 1"
              />
            </div>
            <div className={styles.gallery_img_box_3}>
              <img
                className={styles.gallery_img}
                src={productData.gallery.third.desktop}
                alt="gallery img 1"
              />
            </div>
          </div>

          <div className={styles.suggestions}>
            <h2 className={styles.suggestions__heading}>you may also like</h2>
            <div className={styles.suggested_items}>
              {renderSuggestedItems()}
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
