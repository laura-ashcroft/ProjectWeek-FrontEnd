//functionality
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//css
import styles from "./coaches.module.css";

//Components
import AskForPassword from "../../components/SignInCoach/index";

//images
import soc from "../../Images/soc.png";

function CoachSignIn() {
  console.log("hello from coaches");

  return (
    <div className={styles.coachSignIn}>
      <nav className={styles.coachInput}>
        <img className={styles.socLogo} src={soc} alt="school of code logo" />
        <h2>Welcome, Coach!</h2>
        <p>Please enter the coach password below:</p>
        <AskForPassword />
      </nav>
    </div>
  );
}

export default CoachSignIn;
