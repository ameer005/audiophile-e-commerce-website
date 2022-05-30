import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Checkout.module.scss";
import Form from "../../components/Form/Form";
import CartItems from "../../components/CartItems/CartItems";
import currencyFormatter from "../../utils/currencyFormatter";

import ModalOrderConfirmed from "../../components/ModalOrderConfirmed/ModalOrderConfirmed";

import { AnimatePresence } from "framer-motion";
import GoBackButton from "../../components/GoBackButton/GoBackButton";

const Checkout = () => {
  const cartItems = useSelector((state) => state.products.cart);
  const [showModal, setShowModal] = useState(false);

  if (!cartItems.length) return;

  const onSubmit = (data) => {
    console.log(data);
    setShowModal(true);
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const renderSummaryList = () => {
    return cartItems.map((item) => {
      return <CartItems key={item.id} data={item} class="Quantity" />;
    });
  };

  const total = calculateTotalPrice();
  const shippingPrice = 50;
  const vat = (total - shippingPrice) * (20 / 100);
  const grandTotal = total + shippingPrice + vat;

  return (
    <div className={`${styles.checkout_container} ut-align-center`}>
      <div className="ut-width">
        <GoBackButton />
        <div className={`${styles.checkout} `}>
          <div className={styles.checkout_form}>
            <Form onSubmit={onSubmit} />
          </div>
          <div className={styles.checkout_summary}>
            <h2 className={styles.summary_heading}>Summary</h2>
            <div className={styles.cart_items_container}>
              {renderSummaryList()}
            </div>
            <div className={styles.price_calculation_box}>
              <div className={styles.price_container}>
                <p className={styles.name}>Total</p>
                <p className={styles.amount}>
                  {currencyFormatter.format(total)}
                </p>
              </div>
              <div className={styles.price_container}>
                <p className={styles.name}>Shipping</p>
                <p className={styles.amount}>
                  {currencyFormatter.format(shippingPrice)}
                </p>
              </div>
              <div className={styles.price_container}>
                <p className={styles.name}>vat (included)</p>
                <p className={styles.amount}>{currencyFormatter.format(vat)}</p>
              </div>
            </div>
            <div className={styles.price_container}>
              <p className={styles.name}>Grand Total</p>
              <p className={`${styles.amount} ${styles.amount__grand}`}>
                {currencyFormatter.format(grandTotal)}
              </p>
            </div>
            <button
              type="submit"
              form="my-form"
              className={`${styles.checkout_btn} product-btn product-btn--orange`}
            >
              Checkout
            </button>
          </div>
          <AnimatePresence>
            {showModal ? (
              <ModalOrderConfirmed
                grandTotal={currencyFormatter.format(grandTotal)}
                data={cartItems}
                setShowModal={setShowModal}
              />
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
