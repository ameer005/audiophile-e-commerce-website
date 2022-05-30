import React from "react";
import styles from "./Categories.module.scss";

import headphones from "../../assets/images/shared/desktop/image-headphones.png";
import speakers from "../../assets/images/shared/desktop/image-speakers.png";
import earphones from "../../assets/images/shared/desktop/image-earphones.png";
import arrowR from "../../assets/icons/icon-arrow-right.svg";
import { Link, useNavigate } from "react-router-dom";

const Categories = (props) => {
  const navigate = useNavigate();

  const hideMenu = () => {
    if (!props.setShowMenu) return;

    props.setShowMenu(false);
  };
  return (
    <section className={`${styles.section_category} ut-align-center`}>
      <div className={`${styles.categories} ut-width`}>
        {/* Card 1 */}
        <div
          onClick={() => {
            navigate("/headphones");
            hideMenu();
          }}
          className={styles.category_card}
        >
          <div className={styles.img_box}>
            <img
              className={styles.category_img}
              src={headphones}
              alt="headphone"
            />
          </div>
          <p className={styles.category_name}>Headphones</p>
          <Link
            onClick={hideMenu}
            className={styles.category_link}
            to="/headphones"
          >
            shop
            <img className={styles.icon_arrow} src={arrowR} alt="arrow icon" />
          </Link>
        </div>

        {/* Card 2 */}
        <div
          onClick={() => {
            navigate("/speakers");
            hideMenu();
          }}
          className={styles.category_card}
        >
          <div className={styles.img_box}>
            <img
              className={styles.category_img}
              src={speakers}
              alt="speakers"
            />
          </div>
          <p className={styles.category_name}>Speakers</p>
          <Link
            onClick={hideMenu}
            className={styles.category_link}
            to="/speakers"
          >
            shop{" "}
            <img className={styles.icon_arrow} src={arrowR} alt="arrow icon" />
          </Link>
        </div>

        {/* Card 3 */}
        <div
          onClick={() => {
            navigate("/earphones");
            hideMenu();
          }}
          className={styles.category_card}
        >
          <div className={styles.img_box}>
            <img
              className={styles.category_img}
              src={earphones}
              alt="earphones"
            />
          </div>
          <p className={styles.category_name}>Earphones</p>
          <Link
            onClick={hideMenu}
            className={styles.category_link}
            to="/earphones"
          >
            shop
            <img className={styles.icon_arrow} src={arrowR} alt="arrow icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
