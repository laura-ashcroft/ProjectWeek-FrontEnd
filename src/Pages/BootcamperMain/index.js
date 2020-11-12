//functionality
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//components
import Button from "../../components/Button/index";

//css
import styles from "./bootcampers.module.css";

//images
import soc from "../../Images/soc.png";

//page
import BootcamperSignIn from "../../components/SignInBootcamper/index";

function BootcamperHomepage() {
  return (
    <div className={styles.bootcamperhome}>
      <img className={styles.socLogo} src={soc} alt="school of code logo" />
      <h2>Bootcampers Homepage</h2>
      <h3>Welcome to the School of Code!</h3>
      <Link to="/myProfile">
        <Button text={"My Profile"} />
      </Link>
      <Link to="/mentorMatching">
        <Button text={"View mentors"} />
      </Link>
    </div>
  );
}

export default BootcamperHomepage;
