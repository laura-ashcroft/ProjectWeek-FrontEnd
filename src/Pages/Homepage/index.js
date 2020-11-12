//functionality
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//images
import soc from "../../Images/soc.png";
//components
import Button from "../../components/Button/index";
import BootcamperSignIn from "../../components/SignInBootcamper/index";
import MentorSignIn from "../../components/SignInMentor/index";
import CoachSignIn from "../../components/SignInCoach/index";

//pages
import MentorMain from "../MentorsMain/index";
import BootcamperMain from "../BootcamperMain/index";
import CoachesMain from "../CoachesMain/index";

//css
import styles from "./homepage.module.css";

function HomePage() {
  return (
    <div className={styles.homePage}>
      <nav className={styles.homePageButtons}>
        <img className={styles.socLogo} src={soc} alt="school of code logo" />
        <h2>Welcome To School of Code Mentoring</h2>
        <p>Please select your role at School of Code</p>

        <Link to="/Bootcamper">
          <Button text={"Bootcamper"} />
        </Link>

        <Link to="/Mentor">
          <Button text={"Mentor"} />
        </Link>

        <Link to="/Coach">
          <Button text={"Coach"} />
        </Link>

        <a href="https://www.schoolofcode.co.uk" target="blank">
          Find out more about School of Code
        </a>
      </nav>
    </div>
  );
}

export default HomePage;
