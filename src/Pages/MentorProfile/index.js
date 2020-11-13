//functionality
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//components
import Button from "../../components/Button/index";

//css
import styles from "./mentorprofile.module.css";

//images
import soc from "../../Images/soc.png";

function MentorProfile({ state }) {
  const [dbInfo, setDbInfo] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/mentors/${state.uid}`)
      .then((response) => response.json())
      .then((data) => setDbInfo({ ...data.result }));
    console.log(dbInfo);
  }, []);

  console.log(state.uid);

  return (
    <div className={styles.mentorprofile}>
      <img className={styles.socLogo} src={soc} alt="school of code logo" />
      <h2>Welcome to your profile,{state.name} !</h2>
      <p>
        Thanks for filling in the mentor sign up form for this cohort! Please
        view your account details below.
      </p>
      <div className={styles.profileInfo}>
        <p>
          <b>ID:</b> {dbInfo.id}
        </p>
        <p>
          <b>Name:</b> {dbInfo.name}
        </p>
        <p>
          <b>Bio:</b> {dbInfo.bio}
        </p>
        <p>
          <b>Coding Languages:</b> {dbInfo.coding_languages}
        </p>
        <p>
          <b>Speciality Language:</b> {dbInfo.speciality_language}
        </p>
        <p>
          <b>Industry:</b> {dbInfo.industry}
        </p>
        <p>
          <b>Current Employer:</b> {dbInfo.current_business}
        </p>
        <p>
          <b>Current Role:</b> {dbInfo.present_role}
        </p>
        <p>
          <b>Role Description:</b> {dbInfo.role_description}
        </p>
        <p>
          <b>Interests:</b> {dbInfo.interests}
        </p>
        <p>
          <b>Role Description:</b> {dbInfo.role_description}
        </p>
        <p>
          <b> Are Previous Bootcamper at SoC?</b> {dbInfo.previous_bootcamper}
        </p>
        <p>
          <b>Email Address:</b> {dbInfo.email}
        </p>
      </div>
      <br />
      <br />
      <div className={styles.profileLink}>
        <p>
          If there are any issues with your profile information, please contact
          the School of Code on bootcamp@schoolofcode.co.uk
          <a href="mailto: bootcamp@schoolofcode.co.uk">
            bootcamp@schoolofcode.co.uk
          </a>
        </p>
      </div>
      <br />
      <Link to="/Mentor">
        <Button text="Back" />
      </Link>
    </div>
  );
}

export default MentorProfile;
