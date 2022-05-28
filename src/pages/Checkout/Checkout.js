import React from "react";
import styles from "./Checkout.module.scss";
import Form from "../../components/Form/Form";

const Checkout = () => {
  return (
    <div className={`${styles.checkout_container} ut-align-center`}>
      <div className={`${styles.checkout} ut-width`}>
        <div className={styles.checkout_form}>
          <Form />
        </div>
        <div className={styles.checkout_summary}>summary</div>
      </div>
    </div>
  );
};

export default Checkout;
