//functionality
import React from "react";

//components

//css
import styles from "./coachTables.module.css";

function CoachDisplayTables() {
  return (
    <div className={styles.tables}>
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
