import React from "react";
import styles from "./Home.module.scss";

import ProductButton from "../../components/ProductButton/ProductButton";
import Categories from "../../components/Categories/Categories";
import FeaturesBox from "../../components/FeaturesBox/FeaturesBox";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className={`${styles.section_hero} ut-align-center`}>
        <div className={`${styles.content_box} ut-width`}>
          <div className={styles.box}>
            <h3 className={styles.sub_heading}>new product</h3>
            <h1 className={styles.primary_heading}>XX99 MARK II HEADPHONES</h1>
            <p className={styles.hero_text}>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <ProductButton
              class="orange"
              path="/headphones/xx99-mark-two-headphones"
            />
          </div>
        </div>
      </section>

      {/* PRODUCTS CATEGORIES */}
      <Categories />

      {/* PRODUCTS GRID */}
      <section className={`${styles.section_products} ut-align-center`}>
        <div className={`${styles.products} ut-width`}>
          <div className={styles.products_1}>
            <div className={styles.products_1__img_box}>
              <img
                className={styles.products_1__img}
                src={require("../../assets/images/home/desktop/image-speaker-zx9.png")}
                alt=""
              />
            </div>
            <div className={styles.products_1__text_box}>
              <h2 className={styles.products_1__heading}>ZX9 SPEAKER</h2>
              <p className={styles.products_1__text}>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <ProductButton class="black" path="/speakers/zx9-speaker" />
            </div>
          </div>
          <div className={styles.products_2}>
            <div className={styles.products_2__img_box}>
              <img
                className={styles.products_2__img}
                src={require("../../assets/images/home/desktop/image-speaker-zx7.jpg")}
                alt=""
              />
            </div>
            <div className={styles.products_2__text_box}>
              <p className={styles.products_2__heading}>ZX7 SPEAKER</p>
              <ProductButton class="white" path="/speakers/zx7-speaker" />
            </div>
          </div>
          <div className={styles.products_3}>
            <img
              className={styles.products_3__img}
              src={require("../../assets/images/home/desktop/image-earphones-yx1.jpg")}
              alt=""
            />
          </div>
          <div className={styles.products_4}>
            <div className={styles.products_4__text_box}>
              <p className={styles.products_4__heading}>YX1 EARPHONES</p>
              <ProductButton class="white" path="/earphones/yx1-earphones" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATUREs SECTION */}

      <FeaturesBox />
    </>
  );
};

export default Home;