import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GoBackButton.module.scss";

const GoBackButton = () => {
  let navigate = useNavigate();

  return (
    <div onClick={() => navigate(-1)} className={styles.history}>
      Go Back
    </div>
  );
};

export default GoBackButton;
