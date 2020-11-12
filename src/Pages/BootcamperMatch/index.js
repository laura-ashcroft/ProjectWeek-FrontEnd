//functionality
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//components
import Button from "../../components/Button/index";
import MentorDisplayCards from "../../components/MentorDisplayCards/index";

//css
import styles from "./match.module.css";

//images
import soc from "../../Images/soc.png";

function BootcamperMatch() {
  const [mentors, setMentors] = useState([]);
  const [chosenArray, setChosenArray] = useState([]);
  const [patchSent, setPatchSent] = useState(false);

  useEffect(() => {
    setMentors([]);
    fetch("http://localhost:5000/mentors")
      .then((response) => response.json())
      .then((data) => setMentors([...mentors, ...data.result]));
  }, []);

  function handleSubmit() {
    fetch("http://localhost:5000/bootcampers/1", {
      method: "PATCH",
      body: JSON.stringify({ mentors_i_like: chosenArray }),
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    setPatchSent(!patchSent);
  }

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
        We will try to pair you with your preferred mentor however due to the
        size of the cohort this may not always be possible. Please check for
        updates on mentor pairing prior to the course start date.
      </p>

      {!patchSent && (
        <div className={styles.cardArea}>
          {mentors.map((mentor) => {
            return (
              <MentorDisplayCards
                key={mentor.google_id}
                mentor={mentor}
                chosenFn={setChosenArray}
                chosenArray={chosenArray}
              />
            );
          })}
        </div>
      )}
      {!patchSent && <Button text={"Submit"} onClick={handleSubmit} />}

      {patchSent && (
        <div className={styles.successDiv}>
          <p>Thank you! Your preferences have been saved!</p>
          <Link to="/myProfile">
            <Button text={"View Profile"} onClick={onclick} />
          </Link>
        </div>
      )}
    </div>
  );
}

export default BootcamperMatch;
