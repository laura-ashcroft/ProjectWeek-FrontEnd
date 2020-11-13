//functionality
import React from "react";
import { motion } from "framer-motion";

//components
import Button from "../../components/Button/index";
import MentorForm from "../../components/MentorForm/index";
//css
import styles from "./mentors.module.css";

//images
import soc from "../../Images/soc.png";

function MentorHomepage({ state }) {
  return (
    <div className={styles.mentorhome}>
      <motion.img
        whileHover={{ scale: 1.2, transition: { duration: 1 } }}
        className={styles.socLogo}
        src={soc}
        alt="school of code logo"
      />{" "}
      <h2>Mentors Homepage</h2>
      <h3>Welcome to the School of Code!</h3>
      <p>
        Please complete the form below and make sure you submit your
        information! This will put you in the pool of mentors for the current
        cohort. Thank you for your submission!
      </p>
      <div>
        <MentorForm state={state} />
      </div>
      <Button text={"Submit"} />
    </div>
  );
}

export default MentorHomepage;
