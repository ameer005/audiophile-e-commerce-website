import React from "react";
import ReactDom from "react-dom";
import { useSelector } from "react-redux";

import CartItems from "../CartItems/CartItems";
import { removeAllItems } from "../../features/product/productSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./ModalCart.module.scss";
import currencyFormatter from "../../utils/currencyFormatter";

import { motion } from "framer-motion";

const ModalCart = (props) => {
  const cartItems = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  const renderItemList = () => {
    return cartItems.map((item) => {
      return <CartItems key={item.id} data={item} />;
    });
  };

  const removeAll = () => {
    dispatch(removeAllItems());
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return ReactDom.createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={() => props.setShowCart(false)}
      className={styles.backdrop}
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        {cartItems.length !== 0 && (
          <>
            {" "}
            <div className={styles.top}>
              <div className={styles.cart_heading}>
                Cart (
                <span className={styles.cart_quantity}>{cartItems.length}</span>
                )
              </div>
              <button onClick={removeAll} className={styles.btn_remove}>
                Remove All
              </button>
            </div>
            <div className={styles.cart_items_container}>
              {renderItemList()}
            </div>
            <div className={styles.bottom}>
              <div className={styles.total_box}>
                <p className={styles.total_heading}>Total</p>
                <p className={styles.total_price}>
                  {currencyFormatter.format(calculateTotalPrice())}
                </p>
              </div>
              <Link
                onClick={() => props.setShowCart(false)}
                to="/checkout"
                className={`${styles.checkout_btn} product-btn product-btn--orange`}
              >
                Checkout
              </Link>
            </div>
            <svg
              onClick={() => props.setShowCart(false)}
              className={styles.close}
              width="26"
              height="26"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.607.98l1.414 1.413L14.414 13l10.607 10.607-1.414 1.414L13 14.414 2.393 25.021.98 23.607 11.586 13 .98 2.393 2.393.98 13 11.586 23.607.98z"
                fillRule="evenodd"
              />
            </svg>
          </>
        )}
        {!cartItems.length && (
          <div className={styles.empty_cart}>
            <p className={styles.empty_cart__text}>Your cart is empty.</p>
            <svg
              className={styles.empty_cart__icon}
              width="23"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
                fillRule="nonzero"
              />
            </svg>
          </div>
        )}
      </div>
    </motion.div>,
    document.getElementById("modal")
  );
};

export default ModalCart;
