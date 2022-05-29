import React from "react";
import ReactDom from "react-dom";
import styles from "./ModalOrderConfirmed.module.scss";
import checkIcon from "../../assets/icons/icon-check.svg";
import currencyFormatter from "../../utils/currencyFormatter";
import { Link } from "react-router-dom";
import { emptyCart } from "../../features/product/productSlice";
import { useDispatch } from "react-redux";

const ModalOrderConfirmed = (props) => {
  const dispatch = useDispatch();

  return ReactDom.createPortal(
    <div className={styles.backdrop}>
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        <img className={styles.icon_check} src={checkIcon} alt="check" />
        <h2 className={styles.thanks_text}>THANK YOU FOR YOUR ORDER</h2>
        <p className={styles.confirm_text}>
          You will receive an email confirmation shortly.
        </p>

        <div className={styles.item_container}>
          <div className={styles.item_box}>
            <div className={styles.item}>
              <img
                className={styles.item_img}
                src={props.data[0].image.cart}
                alt={props.data[0].name}
              />
              <div className={styles.item_description}>
                <p className={styles.item_name}>{props.data[0].name}</p>
                <p className={styles.item_price}>
                  {currencyFormatter.format(props.data[0].price)}
                </p>
              </div>
              <div
                className={styles.item_quantity}
              >{`x${props.data[0].quantity}`}</div>
            </div>
            {props.data.length > 1 ? (
              <p
                className={styles.more_items}
              >{`and ${props.data.length} other item(s)`}</p>
            ) : null}
          </div>
          <div className={styles.total_box}>
            <p className={styles.grand_total}>Grand Total</p>
            <p className={styles.grand_total_amount}>{props.grandTotal}</p>
          </div>
        </div>

        <Link
          onClick={() => dispatch(emptyCart())}
          to="/"
          className={`${styles.checkout_btn} product-btn product-btn--orange`}
        >
          Back To Home
        </Link>
      </div>
    </div>,
    document.getElementById("modal-confirmed")
  );
};

export default ModalOrderConfirmed;
