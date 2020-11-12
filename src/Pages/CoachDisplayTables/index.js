//functionality
import React, { useState, useEffect } from "react";

//components

//images
import soc from "../../Images/soc.png";

//css
import styles from "./coachTables.module.css";

function CoachDisplayTables() {
  const [bootcampersTable, setBootcampersTable] = useState([]);
  const [mentorsTable, setMentorsTable] = useState([]);

  useEffect(() => {
    async function getBootcamper() {
      const response = await fetch(`http://localhost:5000/bootcampers`, {
        headers: { "Contetn-Type": "application/json" },
      });
      const data = await response.json();

      setBootcampersTable(data.result);
    }
    getBootcamper();
  }, []);
  console.log(bootcampersTable);

  useEffect(() => {
    async function getMentor() {
      const response = await fetch(`http://localhost:5000/mentors`, {
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setMentorsTable(data.result);
    }
    getMentor();
  }, []);
  console.log(mentorsTable);

  /* function deconstructMentorTable(mentorTable){
  let mentorData=mentorTable.map() */

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
            <th>Name</th>
            <th>Bio</th>
            <th>Interested Industry</th>
            <th>Interests</th>
            <th>Mentors I Like</th>
            <th>Email</th>
            <th>ID Number </th>
          </tr>
        </thead>
        {bootcampersTable.map((bootcamper) => {
          return (
            <tr>
              <td>{bootcamper.name}</td>
              <td>{bootcamper.bio}</td>
              <td>{bootcamper.interested_industry}</td>
              <td>{bootcamper.interests}</td>
              <td>{bootcamper.mentors_i_like}</td>
              <td>{bootcamper.email}</td>
              <td>{bootcamper.id}</td>
            </tr>
          );
        })}
      </table>
      <h2>Mentor Information</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Bio</th>
            <th>Coding Languages</th>
            <th>Speciality Language</th>
            <th>Industry</th>
            <th>Current Business</th>
            <th>Present Role</th>
            <th>Role Description</th>
            <th>Interests</th>
            <th>Previous Bootcamper</th>
            <th>Email</th>
            <th>ID Number</th>
          </tr>
        </thead>
        {mentorsTable.map((mentor) => {
          return (
            <tr>
              <td>{mentor.name}</td>
              <td>{mentor.bio}</td>
              <td>{mentor.coding_languages}</td>
              <td>{mentor.speciality_language}</td>
              <td>{mentor.industry}</td>
              <td>{mentor.current_business}</td>
              <td>{mentor.present_role}</td>
              <td>{mentor.role_description}</td>
              <td>{mentor.interests}</td>
              <td>{mentor.previous_bootcamper}</td>
              <td>{mentor.email}</td>
              <td>{mentor.id}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default CoachDisplayTables;
