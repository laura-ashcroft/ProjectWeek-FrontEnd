//functionality
import React from "react";

//components

//images
import soc from "../../Images/soc.png";

//css
import styles from "./coachTables.module.css";

function CoachDisplayTables() {
  return (
    <div className={styles.tables}>
      <img className={styles.socLogo} src={soc} alt="school of code logo" />
      <h2>Welcome, Coach!</h2>
      <p>
        Information for Bootcampers and Mentors are found in the tables below.
      </p>
      <h2>Bootcamper Information</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
      </table>
      <h2>Mentor Information</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default CoachDisplayTables;
