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

//css
import styles from "./homepage.module.css";

function HomePage() {
  return (
    <div className={styles.homePage}>
      <nav className={styles.homePageButtons}>
        <img className={styles.socLogo} src={soc} alt="school of code logo" />
        <h2>Welcome To School of Code Mentoring</h2>
        <p>Please select your role at School of Code</p>

        <Link to="/SignInBootcamper">
          {" "}
          <Button text={"Bootcamper"} />
        </Link>
        <Button text={"Mentor"}>
          <Link to="/SignInMentor">{"Mentor"}</Link>
        </Button>
        <Button text={"Coach"}>
          <Link to="/SignInCoach">{"Coach"}</Link>
        </Button>
        <a href="https://www.schoolofcode.co.uk">
          Find out more about School of Code
        </a>
      </nav>
    </div>
  );
}

export default HomePage;
