import React from "react";
import styles from "./Categories.module.scss";

import headphones from "../../assets/images/shared/desktop/image-headphones.png";
import speakers from "../../assets/images/shared/desktop/image-speakers.png";
import earphones from "../../assets/images/shared/desktop/image-earphones.png";
import arrowR from "../../assets/icons/icon-arrow-right.svg";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section className={`${styles.section_category} ut-align-center`}>
      <div className={`${styles.categories} ut-width`}>
        {/* Card 1 */}
        <div className={styles.category_card}>
          <div className={styles.img_box}>
            <img
              className={styles.category_img}
              src={headphones}
              alt="headphone"
            />
          </div>
          <p className={styles.category_name}>Headphones</p>
          <Link className={styles.category_link} to="/headphones">
            shop
            <img className={styles.icon_arrow} src={arrowR} alt="arrow icon" />
          </Link>
        </div>

        {/* Card 2 */}
        <div className={styles.category_card}>
          <div className={styles.img_box}>
            <img
              className={styles.category_img}
              src={speakers}
              alt="headphone"
            />
          </div>
          <p className={styles.category_name}>Speakers</p>
          <Link className={styles.category_link} to="/speakers">
            shop{" "}
            <img className={styles.icon_arrow} src={arrowR} alt="arrow icon" />
          </Link>
        </div>

        {/* Card 3 */}
        <div className={styles.category_card}>
          <div className={styles.img_box}>
            <img
              className={styles.category_img}
              src={earphones}
              alt="headphone"
            />
          </div>
          <p className={styles.category_name}>Earphones</p>
          <Link className={styles.category_link} to="/earphones">
            shop
            <img className={styles.icon_arrow} src={arrowR} alt="arrow icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
