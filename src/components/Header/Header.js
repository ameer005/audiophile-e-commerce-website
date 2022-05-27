import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./Header.module.scss";
import logo from "../../assets/icons/logo.svg";
import cart from "../../assets/icons/icon-cart.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [pathname, setPathName] = useState(window.location.pathname);
  const cartItems = useSelector((state) => state.products.cart);
  const navigate = useNavigate();

  useEffect(() => {
    setPathName(window.location.pathname);
  }, [navigate]);
  return (
    <header className={`${styles.header} ut-align-center`}>
      <nav className={`${styles.nav} ut-width`}>
        <img className={styles.logo} src={logo} alt="logo" />

        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <Link
              to="/"
              className={`${styles.nav__link} ${
                pathname === "/" ? styles.active : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link
              className={`${styles.nav__link} ${
                pathname === "/headphones" ? styles.active : ""
              }`}
              to="/headphones"
            >
              headphones
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link
              className={`${styles.nav__link} ${
                pathname === "/speakers" ? styles.active : ""
              }`}
              to="/speakers"
            >
              speakers
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link
              className={`${styles.nav__link} ${
                pathname === "/earphones" ? styles.active : ""
              }`}
              to="/earphones"
            >
              earphones
            </Link>
          </li>
        </ul>

        <div className={styles.cart_group}>
          <img className={styles.icon__cart} src={cart} alt="" />
          {cartItems.length ? (
            <span className={styles.cart_quantity}>{cartItems.length}</span>
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default Header;
