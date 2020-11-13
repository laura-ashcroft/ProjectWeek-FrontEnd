//functionality
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//components
import Button from "../../components/Button/index";
//css
import styles from "./bootcamperprofile.module.css";

//images
import soc from "../../Images/soc.png";

function BootcamperProfile({ state }) {
  const [dbInfo, setDbInfo] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/bootcampers/${state.uid}`)
      .then((response) => response.json())
      .then((data) => setDbInfo({ ...data.result }));
    console.log(dbInfo);
  }, []);

  console.log(state.uid);
  return (
    <div className={styles.bootcamperprofile}>
      <img className={styles.socLogo} src={soc} alt="school of code logo" />
      <h1>Welcome to your profile, {state.displayName}!</h1>

      {/* <table className={styles.BootcamperTable}>
        <thead>
          <tr>
            <th>ID Number </th>
            <th>Name</th>
            <th>Bio</th>
            <th>Interested Industry</th>
            <th>Interests</th>
            <th>Mentors I Like</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dbInfo.id}</td>
            <td>{dbInfo.name}</td>
            <td>{dbInfo.bio}</td>
            <td>{dbInfo.interested_industry}</td>
            <td>{dbInfo.interests}</td>
            {dbInfo.mentors_i_like && (
              <td>{dbInfo.mentors_i_like.join(", ")}</td>
            )}
            <td>{dbInfo.email}</td>
          </tr>
        </tbody>
      </table> */}
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
          <b>Interested Industry:</b> {dbInfo.interested_industry}
        </p>
        <p>
          <b>Interests:</b> {dbInfo.interests}
        </p>
        <p>
          <b>Selected Mentors:</b>{" "}
          {dbInfo.mentors_i_like && dbInfo.mentors_i_like.join(", ")}
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
          the School of Code on{" "}
          <a href="mailto: bootcamp@schoolofcode.co.uk">
            bootcamp@schoolofcode.co.uk
          </a>
        </p>
      </div>
      <br />
      <Link to="/BootcampersHome">
        <Button text="Back" />
      </Link>
    </div>
  );
}

export default BootcamperProfile;
