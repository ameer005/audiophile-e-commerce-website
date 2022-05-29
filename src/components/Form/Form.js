import React, { useState, useEffect } from "react";
import styles from "./Form.module.scss";
import codIcon from "../../assets/icons/icon-cod.svg";
import { useForm } from "react-hook-form";
import { schema } from "../../utils/yupSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = (props) => {
  const {
    register,
    handleSubmit,
    unregister,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const payment = watch("payment");

  useEffect(() => {
    if (payment === "cod") {
      unregister(["eMoneyNumber", "eMoneyPin"]);
    }
  }, [unregister, payment]);

  const renderPaymentMethod = () => {
    if (payment === "cod") {
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
          className={`${styles.input_container} ${
            styles.input_container__3_3
          } ${errors.eMoneyNumber && styles.error}`}
        >
          <div className={styles.top}>
            <span className={styles.label}>e-Money Number</span>
            <span className={styles.error}>
              {errors.eMoneyNumber && "Field cannot be empty"}
            </span>
          </div>
          <input
            {...register("eMoneyNumber")}
            className={styles.input}
            type="Number"
            placeholder="23852199"
          />
        </label>

        <label
          className={`${styles.input_container} ${
            styles.input_container__3_4
          } ${errors.eMoneyPin && styles.error}`}
        >
          <div className={styles.top}>
            <span className={styles.label}>e-Money PIN</span>
            <span className={styles.error}>
              {errors.eMoneyPin && "Field cannot be empty"}
            </span>
          </div>
          <input
            {...register("eMoneyPin")}
            className={styles.input}
            type="Number"
            placeholder="3328"
          />
        </label>
      </>
    );
  };

  return (
    <form
      id="my-form"
      onSubmit={handleSubmit(props.onSubmit)}
      className={styles.form}
    >
      <h2 className={styles.form_heading}>checkout</h2>

      {/* BILLING DETAILS */}
      <div className={styles.billing_details}>
        <h3 className={styles.section_heading}>Billing Details</h3>

        <div className={styles.input_data}>
          <label
            className={`${styles.input_container} ${
              styles.input_container__1_1
            } ${errors.name && styles.error}`}
          >
            <div className={styles.top}>
              <span className={styles.label}>Name</span>
              <span className={styles.error}>{errors.name?.message}</span>
            </div>
            <input
              {...register("name")}
              className={styles.input}
              type="text"
              placeholder="Ameer Khan"
            />
          </label>
          <label
            className={`${styles.input_container} ${
              styles.input_container__1_2
            } ${errors.email && styles.error}`}
          >
            <div className={styles.top}>
              <span className={styles.label}>Email Address</span>
              <span className={styles.error}>{errors.email?.message}</span>
            </div>
            <input
              {...register("email")}
              className={styles.input}
              type="email"
              placeholder="ameerkhan@gmail.com"
            />
          </label>
          <label
            className={`${styles.input_container} ${
              styles.input_container__1_3
            } ${errors.phoneNumber && styles.error}`}
          >
            <div className={styles.top}>
              <span className={styles.label}>Phone Number</span>
              <span className={styles.error}>
                {errors.phoneNumber && "Field cannot be empty"}
              </span>
            </div>
            <input
              {...register("phoneNumber")}
              className={styles.input}
              type="number"
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
            className={`${styles.input_container} ${
              styles.input_container__2_1
            } ${errors.address && styles.error}`}
          >
            <div className={styles.top}>
              <span className={styles.label}>Your Address</span>
              <span className={styles.error}>{errors.address?.message}</span>
            </div>
            <input
              {...register("address")}
              className={styles.input}
              type="text"
              placeholder="1147 Park Avenue"
            />
          </label>
          <label
            className={`${styles.input_container} ${
              styles.input_container__2_2
            } ${errors.zipCode && styles.error}`}
          >
            <div className={styles.top}>
              <span className={styles.label}>Zip Code</span>
              <span className={styles.error}>
                {errors.zipCode && "Field cannot be empty"}
              </span>
            </div>
            <input
              {...register("zipCode")}
              className={styles.input}
              type="number"
              placeholder="248001"
            />
          </label>
          <label
            className={`${styles.input_container} ${
              styles.input_container__2_3
            } ${errors.cityName && styles.error}`}
          >
            <div className={styles.top}>
              <span className={styles.label}>City</span>
              <span className={styles.error}>{errors.cityName?.message}</span>
            </div>
            <input
              {...register("cityName")}
              className={styles.input}
              type="text"
              placeholder="Dehradun"
            />
          </label>
          <label
            className={`${styles.input_container} ${
              styles.input_container__2_4
            } ${errors.countryName && styles.error}`}
          >
            <div className={styles.top}>
              <span className={styles.label}>Country</span>
              <span className={styles.error}>
                {errors.countryName?.message}
              </span>
            </div>
            <input
              {...register("countryName")}
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
            <label className={`${styles.radio_label} `}>
              <input
                {...register("payment")}
                className={styles.radio_input}
                type="radio"
                value="ePay"
                defaultChecked
              />
              <button className={styles.radio_btn}></button>
              e-Money
            </label>

            <label className={`${styles.radio_label}`}>
              <input
                {...register("payment")}
                className={styles.radio_input}
                type="radio"
                value="cod"
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
