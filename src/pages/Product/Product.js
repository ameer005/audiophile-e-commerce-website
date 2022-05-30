import React, { useState } from "react";
import styles from "./Product.module.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast, Slide } from "react-toastify";

import Categories from "../../components/Categories/Categories";
import FeaturesBox from "../../components/FeaturesBox/FeaturesBox";
import Quantity from "../../components/Quantity/Quantity";
import ProductButton from "../../components/ProductButton/ProductButton";
import { addToCart } from "../../features/product/productSlice";
import currencyFormatter from "../../utils/currencyFormatter";
import GoBackButton from "../../components/GoBackButton/GoBackButton";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const data = useSelector((state) => state.products);
  const { product } = useParams();

  if (data.status !== "success") return;

  const [productData] = data.products.filter((item) => item.slug == product);

  const cart = () => {
    dispatch(addToCart({ ...productData, quantity: quantity }));
    toast.success(`Item '${productData.name}' added to the cart`, {
      transition: Slide,
      position: "top-left",
      autoClose: 800,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
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
            <picture>
              <source media="(max-width:  50em)" srcSet={item.image.mobile} />
              <img
                className={styles.suggested_img}
                src={item.image.desktop}
                alt={item.name}
              />
            </picture>
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
      <div className=" ut-width">
        <GoBackButton />
        <div className={`${styles.product_details}`}>
          <div className={styles.top}>
            <div className={styles.img_box}>
              <picture>
                <source
                  media="(max-width:  31.25em)"
                  srcSet={productData.image.mobile}
                />
                <source
                  media="(max-width:  50em)"
                  srcSet={productData.image.tablet}
                />
                <img
                  className={styles.img}
                  src={productData.image.desktop}
                  alt={productData.name}
                />
              </picture>
            </div>

            <div className={styles.text_box}>
              {productData.new ? (
                <p className={styles.new}>new product</p>
              ) : null}
              <h3 className={styles.product_name}>{productData.name}</h3>
              <p className={styles.description}>{productData.description}</p>
              <p className={styles.price}>{`${currencyFormatter.format(
                productData.price
              )}`}</p>

              <div className={styles.quantity_group}>
                <Quantity
                  cartItem={null}
                  className="big"
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
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
                <picture>
                  <source
                    media="(max-width:  31.25em)"
                    srcSet={productData.gallery.first.mobile}
                  />

                  <img
                    className={styles.gallery_img}
                    src={productData.gallery.first.desktop}
                    alt="gallery img 1"
                  />
                </picture>
              </div>
              <div className={styles.gallery_img_box_2}>
                <picture>
                  <source
                    media="(max-width:  31.25em)"
                    srcSet={productData.gallery.second.mobile}
                  />
                  <img
                    className={styles.gallery_img}
                    src={productData.gallery.second.desktop}
                    alt="gallery img 1"
                  />
                </picture>
              </div>
              <div className={styles.gallery_img_box_3}>
                <picture>
                  <source
                    media="(max-width:  31.25em)"
                    srcSet={productData.gallery.third.mobile}
                  />
                  <img
                    className={styles.gallery_img}
                    src={productData.gallery.third.desktop}
                    alt="gallery img 1"
                  />
                </picture>
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
    </div>
  );
};

export default Product;
