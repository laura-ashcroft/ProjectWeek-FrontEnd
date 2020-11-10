//functionality
import React from "react";

//css
import styles from "./button.module.css";

function Button({ text, onClick }) {
  return (
    <div className={styles.buttonDiv}>
      <button className={styles.button} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
export default Button;
