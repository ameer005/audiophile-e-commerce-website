import React from "react";
import styles from "./ModalMenu.module.scss";
import ReactDom from "react-dom";
import Categories from "../Categories/Categories";
import { motion } from "framer-motion";

const ModalMenu = ({ setShowMenu }) => {
  return ReactDom.createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={styles.backdrop}
    >
      <motion.div
        initial={{ y: "-40rem" }}
        animate={{ y: "0rem" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modal}
      >
        <Categories setShowMenu={setShowMenu} />
      </motion.div>
    </motion.div>,
    document.getElementById("modal-menu")
  );
};

export default ModalMenu;
