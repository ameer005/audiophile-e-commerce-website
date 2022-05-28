import React, { useState } from "react";
import styles from "./Form.module.scss";
import codIcon from "../../assets/icons/icon-cod.svg";

const Form = () => {
  const [cod, setCod] = useState(false);

  const renderPaymentMethod = () => {
    if (cod) {
      return (
        <div
          className={`${styles.input_container} ${styles.input_container__3_2}`}
        >
          <img className={styles.cod_img} src={codIcon} alt="hands" />
          <p className={styles.cod_text}>
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </div>
      );
    }

    return (
      <>
        <label
          className={`${styles.input_container} ${styles.input_container__3_3}`}
        >
          <div className={styles.top}>
            <span className={styles.label}>e-Money Number</span>
            <span className={styles.error}>This field cannot be empty</span>
          </div>
          <input
            name="e-money-number"
            className={styles.input}
            type="text"
            placeholder="23852199"
          />
        </label>

        <label
          className={`${styles.input_container} ${styles.input_container__3_4}`}
        >
          <div className={styles.top}>
            <span className={styles.label}>e-Money PIN</span>
            <span className={styles.error}>This field cannot be empty</span>
          </div>
          <input
            name="e-money-pin"
            className={styles.input}
            type="text"
            placeholder="3328"
          />
        </label>
      </>
    );
  };

  return (
    <form className={styles.form}>
      <h2 className={styles.form_heading}>checkout</h2>

      {/* BILLING DETAILS */}
      <div className={styles.billing_details}>
        <h3 className={styles.section_heading}>Billing Details</h3>

        <div className={styles.input_data}>
          <label
            className={`${styles.input_container} ${styles.input_container__1_1}`}
          >
            <div className={styles.top}>
              <span className={styles.label}>Name</span>
              <span className={styles.error}>This field cannot be empty</span>
            </div>
            <input
              name="name"
              className={styles.input}
              type="text"
              placeholder="Ameer Khan"
            />
          </label>
          <label
            className={`${styles.input_container} ${styles.input_container__1_2}`}
          >
            <div className={styles.top}>
              <span className={styles.label}>Email Address</span>
              <span className={styles.error}>This field cannot be empty</span>
            </div>
            <input
              name="email"
              className={styles.input}
              type="email"
              placeholder="ameerkhan@gmail.com"
            />
          </label>
          <label
            className={`${styles.input_container} ${styles.input_container__1_3}`}
          >
            <div className={styles.top}>
              <span className={styles.label}>Phone Number</span>
              <span className={styles.error}>This field cannot be empty</span>
            </div>
            <input
              name="phone"
              className={styles.input}
              type="text"
              placeholder="+1 202-555-0136"
            />
          </label>
        </div>
      </div>

      {/* SHIPPING INFO */}
      <div className={styles.billing_details}>
        <h3 className={styles.section_heading}>Shipping info</h3>

        <div className={styles.input_data}>
          <label
            className={`${styles.input_container} ${styles.input_container__2_1}`}
          >
            <div className={styles.top}>
              <span className={styles.label}>Your Address</span>
              <span className={styles.error}>This field cannot be empty</span>
            </div>
            <input
              name="address"
              className={styles.input}
              type="text"
              placeholder="1147 Park Avenue"
            />
          </label>
          <label
            className={`${styles.input_container} ${styles.input_container__2_2}`}
          >
            <div className={styles.top}>
              <span className={styles.label}>Zip Code</span>
              <span className={styles.error}>This field cannot be empty</span>
            </div>
            <input
              name="zip"
              className={styles.input}
              type="text"
              placeholder="248001"
            />
          </label>
          <label
            className={`${styles.input_container} ${styles.input_container__2_3}`}
          >
            <div className={styles.top}>
              <span className={styles.label}>City</span>
              <span className={styles.error}>This field cannot be empty</span>
            </div>
            <input
              name="city"
              className={styles.input}
              type="text"
              placeholder="Dehradun"
            />
          </label>
          <label
            className={`${styles.input_container} ${styles.input_container__2_4}`}
          >
            <div className={styles.top}>
              <span className={styles.label}>Country</span>
              <span className={styles.error}>This field cannot be empty</span>
            </div>
            <input
              name="country"
              className={styles.input}
              type="text"
              placeholder="India"
            />
          </label>
        </div>
      </div>

      {/* Payment details */}
      <div className={styles.billing_details}>
        <h3 className={styles.section_heading}>Payment Details</h3>

        <div className={styles.input_data}>
          <div className={styles.method}>Payment Method</div>
          <div
            className={`${styles.input_container} ${styles.input_container__3_1}`}
          >
            <label
              onClick={() => setCod(false)}
              className={`${styles.radio_label} `}
            >
              <input
                name="payment"
                className={styles.radio_input}
                type="radio"
                checked
              />
              <button className={styles.radio_btn}></button>
              e-Money
            </label>

            <label
              onClick={() => setCod(true)}
              className={`${styles.radio_label}`}
            >
              <input
                name="payment"
                className={styles.radio_input}
                type="radio"
              />
              <button className={styles.radio_btn}></button>
              Cash On Delivery
            </label>
          </div>

          {renderPaymentMethod()}
        </div>
      </div>
    </form>
  );
};

export default Form;
