import React from "react";
import { useSelector } from "react-redux";

import styles from "./Headphones.module.scss";
import FeaturesBox from "../../components/FeaturesBox/FeaturesBox";
import Categories from "../../components/Categories/Categories";
import CategoryHeading from "../../components/CategoryHeading/CategoryHeading";
import ProductsList from "../../components/ProductsList/ProductsList";

const Headphones = () => {
  const data = useSelector((state) => state.products);

  if (data.status !== "success") return;

  return (
    <div>
      <CategoryHeading text="headphones" />
      <ProductsList
        data={data.products.filter(
          (product) => product.category === "headphones"
        )}
      />
      <Categories />
      <FeaturesBox />
    </div>
  );
};

export default Headphones;
