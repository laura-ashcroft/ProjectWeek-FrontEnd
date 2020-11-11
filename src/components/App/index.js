import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Button from "../Button/index";

import HomePage from "../../Pages/Homepage";
//Mentor Pages
import MentorSignIn from "../SignInMentor/index";
import MentorHomepage from "../../Pages/MentorsMain/index";
import MentorProfile from "../../Pages/MentorProfile/index";
//Bootcamper Pages
import BootcamperSignIn from "../SignInBootcamper/index";
import BootcamperHomepage from "../../Pages/BootcamperMain/index";
//Coach Pages
import CoachesMain from "../../Pages/CoachesMain";
import CoachDisplayTables from "../../Pages/CoachDisplayTables";
import CoachSignIn from "../../Pages/CoachesMain";

function App() {
  return (
    <Router>
      <CoachSignIn />
      <div className="App">
        <Button>
          <Link to="/Coaches">Coach</Link>
        </Button>
        <nav className="navButtons">{/* <HomePage /> */}</nav>
        <Switch>
          <Route path="coachesMain">
            <CoachesMain />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
