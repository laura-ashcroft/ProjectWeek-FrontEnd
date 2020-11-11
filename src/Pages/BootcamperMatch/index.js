//functionality
import React from "react";

//components
import Button from "../../components/Button/index";

//css
import styles from "./match.module.css";

//images
import soc from "../../Images/soc.png";

function BootcamperMatch() {
  return (
    <div className={styles.bootcampermatch}>
      <img className={styles.socLogo} src={soc} alt="school of code logo" />
      <h2>Mentor Matching!</h2>
      <p>
        Below you will find all mentors for your School of Code cohort. Please
        select a minimum of 5 mentors you would be happy to be paired with. Once
        you have selected your mentors, click submit at the bottom of the page.
      </p>
      <p>
        Disclaimer: We will try to pair you with your preferred mentor however
        due to the size of the cohort this may not always be possible. Please
        check for updates on mentor pairing prior to the course start date.
      </p>
      <Button text={"Submit"} />
    </div>
  );
}

export default BootcamperMatch;
