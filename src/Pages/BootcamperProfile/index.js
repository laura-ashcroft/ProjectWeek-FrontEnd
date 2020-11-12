//functionality
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//components
import Button from "../../components/Button/index";
//css
import styles from "./bootcamperprofile.module.css";

//images
import soc from "../../Images/soc.png";

function BootcamperProfile() {
  return (
    <div className={styles.bootcamperprofile}>
      <img className={styles.socLogo} src={soc} alt="school of code logo" />
      <h2>Welcome to your profile!</h2>
      <p>
        Thanks for filling in the bootcamper sign up form for this cohort!
        Please view your account details below.
      </p>
      <p>
        If there are any issues with your profile information, please contact
        the School of Code on bootcamp@schoolofcode.co.uk
      </p>
      <Link to="/BootcampersHome">
        <Button text="back" />
      </Link>
    </div>
  );
}

export default BootcamperProfile;
