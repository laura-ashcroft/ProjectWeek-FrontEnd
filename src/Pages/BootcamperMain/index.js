//functionality
import React from "react";

//components
import Button from "../../components/Button/index";
import BootcamperForm from "../../components/BootcamperForm/index";

//css
import styles from "./bootcampers.module.css";

//images
import soc from "../../Images/soc.png";

function BootcamperHomepage() {
  return (
    <div className={styles.bootcamperhome}>
      <img className={styles.socLogo} src={soc} alt="school of code logo" />
      <h2>Bootcampers Homepage</h2>
      <h3>Welcome to the School of Code!</h3>
      <p>
        Please complete the form below and make sure you submit your
        information! This will take you to the mentor matching page once
        completed.
      </p>
      <BootcamperForm />
    </div>
  );
}

export default BootcamperHomepage;
