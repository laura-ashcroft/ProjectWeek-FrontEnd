//functionality
import React from "react";
import { motion } from "framer-motion";
//css
import styles from "./button.module.css";

function Button({ text, onClick }) {
  return (
    <div className={styles.buttonDiv}>
      <motion.button
        whileHover={{ scale: 1.2, transition: { duration: 1 } }}
        className={styles.button}
        onClick={onClick}
      >
        {text}
      </motion.button>
    </div>
  );
}
export default Button;
