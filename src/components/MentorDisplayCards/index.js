//functionality
import React from "react";

//components
import Checkbox from "../Checkbox/index";
//css
import styles from "./mentorDisplayCards.module.css";

function MentorDisplayCards({ mentor, chosenFn, chosenArray }) {
  return (
    <div className={styles.card}>
      <Checkbox
        chosenFn={chosenFn}
        name={mentor.name}
        chosenArray={chosenArray}
      />
      <ul>
        <li>Mentor #{mentor.id}</li>
        <li>
          <strong>Present Job:</strong> {mentor.present_role}
        </li>
        <li>
          <strong>Company:</strong>
          {mentor.current_business}
        </li>
        <li>
          <strong>Industry:</strong>
          {mentor.industry}
        </li>
        <li>
          <strong>Job Description:</strong> {mentor.role_description}
        </li>
        <li>
          <strong>Speciality Language:</strong>
          {mentor.speciality_language}
        </li>
        <li>
          <strong>Coding Languages:</strong> {mentor.coding_languages}
        </li>
        <li>
          <strong>Bio: </strong>
          {mentor.bio}
        </li>
        <li>
          <strong>Interests:</strong> {mentor.interests}
        </li>
        <li>
          {mentor.previous_bootcamper
            ? "Is a previous bootcamper"
            : "Is not a previous bootcamper"}
        </li>
      </ul>
    </div>
  );
}

export default MentorDisplayCards;
