import React from "react";
import ReactDom from "react-dom";
import { useSelector } from "react-redux";

import CartItems from "../CartItems/CartItems";
import { removeAllItems } from "../../features/product/productSlice";
import { useDispatch } from "react-redux";

import styles from "./ModalCart.module.scss";
import currencyFormatter from "../../utils/currencyFormatter";

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
      // console.log(item.price, item.quantity);
      total += item.price * item.quantity;
      console.log(total);
    });

    return total;
  };

  return ReactDom.createPortal(
    <div onClick={() => props.setShowCart(false)} className={styles.backdrop}>
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        <div className={styles.top}>
          <div className={styles.cart_heading}>
            Cart (
            <span className={styles.cart_quantity}>{cartItems.length}</span>)
          </div>
          <button onClick={removeAll} className={styles.btn_remove}>
            Remove All
          </button>
        </div>

        <div className={styles.cart_items_container}>{renderItemList()}</div>
        <div className={styles.bottom}>
          <div className={styles.total_box}>
            <p className={styles.total_heading}>Total</p>
            <p className={styles.total_price}>
              {currencyFormatter.format(calculateTotalPrice())}
            </p>
          </div>
          <button
            className={`${styles.checkout_btn} product-btn product-btn--orange`}
          >
            Checkout
          </button>
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
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default ModalCart;
