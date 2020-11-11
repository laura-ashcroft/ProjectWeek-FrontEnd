//functionality
import React, { useState, useEffect } from "react";

//components

//images
import soc from "../../Images/soc.png";

//css
import styles from "./coachTables.module.css";

function CoachDisplayTables() {
  const [bootcampersTable, setBootcampersTable] = useState([null]);
  const [mentorsTable, setMentorsTable] = useState([]);

  useEffect(() => {
    async function getBootcamper() {
      const response = await fetch(`http://localhost:5000/bootcampers`, {
        headers: { "Contetn-Type": "application/json" },
      });
      const data = await response.json();
      /* console.log(data.result); */
      setBootcampersTable(data.result);
    }
    getBootcamper();
  }, []);
  console.log(bootcampersTable);

  useEffect(() => {
    async function getMentor() {
      const response = await fetch(`http://localhost:5000/mentors`, {
        headers: { "Contetn-Type": "application/json" },
      });
      const data = await response.json();
      /* console.log(data.result); */
      setMentorsTable(data.result);
    }
    getMentor();
  }, []);
  console.log(mentorsTable);

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
