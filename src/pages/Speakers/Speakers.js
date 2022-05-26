import React from "react";
import styles from "./Speakers.module.scss";
import { useSelector } from "react-redux";

import FeaturesBox from "../../components/FeaturesBox/FeaturesBox";
import Categories from "../../components/Categories/Categories";
import CategoryHeading from "../../components/CategoryHeading/CategoryHeading";
import ProductsList from "../../components/ProductsList/ProductsList";

const Speakers = () => {
  const data = useSelector((state) => state.products);

  if (data.status !== "success") return;

  return (
    <div>
      <CategoryHeading text="speakers" />
      <ProductsList
        data={data.products.filter(
          (product) => product.category === "speakers"
        )}
      />
      <Categories />
      <FeaturesBox />
    </div>
  );
};

export default Speakers;
