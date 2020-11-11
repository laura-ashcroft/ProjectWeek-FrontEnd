//functionality
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

//components
import Button from "../Button/index";
import Coaches from "../../Pages/CoachesMain/index";

//css
import styles from "./signInCoach.module.css";

function AskForPassword() {
  const [isTrue, setIsTrue] = useState(false);
  const [value, setValue] = useState("");

  function checkCorrect() {
    console.log("hell from check correct");
    if (value === "tits") {
      setIsTrue(true);
    }
  }

  function getInputValue(event) {
    setValue(event.target.value);
    console.log(event.target.value);
    checkCorrect();
  }
  return (
    <div className={styles.coachPassword}>
      <nav className={styles.coachInput}>
        <input
          className={styles.inputPassword}
          type="password"
          name="password"
          placeholder="Enter password here..."
          onKeyUp={getInputValue}
        />

        <Button
          onClick={() => {
            checkCorrect();
          }}
        >
          <Link to={isTrue ? "/coaches" : ""}>Submit</Link>
        </Button>
      </nav>
    </div>
  );
}

export default AskForPassword;
