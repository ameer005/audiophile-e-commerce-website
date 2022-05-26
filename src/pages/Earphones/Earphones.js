import React from "react";
import styles from "./Earphones.module.scss";
import { useSelector } from "react-redux";

import FeaturesBox from "../../components/FeaturesBox/FeaturesBox";
import Categories from "../../components/Categories/Categories";
import CategoryHeading from "../../components/CategoryHeading/CategoryHeading";
import ProductsList from "../../components/ProductsList/ProductsList";

const Earphones = () => {
  const data = useSelector((state) => state.products);

  if (data.status !== "success") return;
  return (
    <div>
      <CategoryHeading text="Earphones" />
      <ProductsList
        data={data.products.filter(
          (product) => product.category === "earphones"
        )}
      />
      <Categories />
      <FeaturesBox />
    </div>
  );
};

export default Earphones;
