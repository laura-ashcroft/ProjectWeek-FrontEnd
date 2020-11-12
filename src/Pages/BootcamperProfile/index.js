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
      <h2>Welcome {state.displayName} to your profile!</h2>
      <p>
        Thanks for filling in the bootcamper sign up form for this cohort!
        Please view your account details below.
      </p>
      <p>
        If there are any issues with your profile information, please contact
        the School of Code on bootcamp@schoolofcode.co.uk
      </p>
      <table className={styles.BootcamperTable}>
        <thead>
          {/* creates table head  */}
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
      </table>
      <Link to="/BootcampersHome">
        <Button text="back" />
      </Link>
    </div>
  );
}

export default BootcamperProfile;
