import React from "react";
import styles from "./Checkout.module.scss";
import Form from "../../components/Form/Form";

const Checkout = () => {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={`${styles.checkout_container} ut-align-center`}>
      <div className={`${styles.checkout} ut-width`}>
        <div className={styles.checkout_form}>
          <Form onSubmit={onSubmit} />
        </div>
        <div className={styles.checkout_summary}>summary</div>
      </div>
    </div>
  );
};

export default Checkout;
