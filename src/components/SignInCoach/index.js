//functionality
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//components
import Button from "../Button/index";
import Coaches from "../../Pages/CoachesMain/index";

//css
import styles from "./signInCoach.module.css";

function AskForPassword() {
  const [isTrue, setIsTrue] = useState(false);
  const [value, setValue] = useState("");

  function checkCorrect() {
    if (value === "tits") {
      return setIsTrue(true);
    }
    //alert("GO AWAY");
  }

  function isCorrect() {
    checkCorrect();
    if (isTrue === true) {
    }
    return true;
  }

  function getInputValue(event) {
    setValue(event.target.value);
    console.log(event.target.value);
  }
  return (
    <Router>
      <div className={styles.coachPassword}>
        <nav className={styles.coachInput}>
          <input
            className={styles.inputPassword}
            type="password"
            name="password"
            placeholder="Enter password here..."
            onKeyUp={getInputValue}
          ></input>
          <Button onClick={isCorrect()}>
            <Link to="/coaches">Submit</Link>
          </Button>
        </nav>
        <Switch>
          <Route path="/coaches">
            <Coaches />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default AskForPassword;
