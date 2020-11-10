//functionality
import React from "react";

//css
import styles from "./ button.module.css";

function Button({ text }) {
  return (
    <div className={styles.button}>
      <button>{text}</button>
    </div>
  );
}
export default Button;
