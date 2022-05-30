import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./Header.module.scss";
import logo from "../../assets/icons/logo.svg";
import iconHam from "../../assets/icons/icon-hamburger.svg";
import iconCloseMenu from "../../assets/icons/icon-close-menu.svg";

import cart from "../../assets/icons/icon-cart.svg";
import ModalCart from "../ModalCart/ModalCart";
import ModalMenu from "../ModalMenu/ModalMenu";
import { Link } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

const Header = () => {
  const [pathname, setPathName] = useState(window.location.pathname);
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const cartItems = useSelector((state) => state.products.cart);
  const navigate = useNavigate();

  useEffect(() => {
    setPathName(window.location.pathname);
  }, [navigate]);
  return (
    <header className={`${styles.header} ut-align-center`}>
      <nav className={`${styles.nav} ut-width`}>
        {showMenu ? (
          <img
            onClick={() => setShowMenu(false)}
            className={styles.menu}
            src={iconCloseMenu}
            alt="menu"
          />
        ) : (
          <img
            onClick={() => setShowMenu(true)}
            className={styles.menu}
            src={iconHam}
            alt="menu"
          />
        )}

        <Link to="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>

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

        <div onClick={() => setShowCart(true)} className={styles.cart_group}>
          <img className={styles.icon__cart} src={cart} alt="" />
          {cartItems.length ? (
            <span className={styles.cart_quantity}>{cartItems.length}</span>
          ) : null}
        </div>
        <AnimatePresence>
          {showCart ? <ModalCart setShowCart={setShowCart} /> : null}
          {showMenu ? <ModalMenu setShowMenu={setShowMenu} /> : null}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
