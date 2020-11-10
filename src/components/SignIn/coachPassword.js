import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "../button";
import Coaches from "../Pages/Coaches";

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
      <div className="coachPassword">
        <nav className="coachInput">
          <input
            className="inputPassword"
            type="password"
            name="password"
            placeholder="Enter password here..."
            onChange={getInputValue}
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
