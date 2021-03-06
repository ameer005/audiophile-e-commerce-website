import React from "react";
import styles from "./FeaturesBox.module.scss";

const FeaturesBox = () => {
  return (
    <section className={`${styles.section_features} ut-align-center`}>
      <div className={`${styles.features} ut-width`}>
        <div className={styles.text_box}>
          <h2 className={styles.heading}>
            BRINGING YOU THE <span>BEST</span> AUDIO GEAR
          </h2>
          <p className={styles.text}>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className={styles.img_box}>
          <picture>
            <source
              media="(max-width:  31.25em)"
              srcSet={require("../../assets/images/shared/mobile/image-best-gear.jpg")}
            />
            <source
              media="(max-width:  62.5em)"
              srcSet={require("../../assets/images/shared/tablet/image-best-gear.jpg")}
            />
            <img
              className={styles.img}
              src={require("../../assets/images/shared/desktop/image-best-gear.jpg")}
              alt=""
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBox;
