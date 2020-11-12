import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Button from "../Button/index";

import HomePage from "../../Pages/Homepage";
// Mentor Pages
import MentorSignIn from "../SignInMentor/index";
import MentorMain from "../../Pages/MentorsMain/index";
import MentorProfile from "../../Pages/MentorProfile/index";
// Bootcamper Pages
import BootcamperSignIn from "../SignInBootcamper/index";
import BootcamperMain from "../../Pages/BootcamperMain/index";
import BootcamperMatch from "../../Pages/BootcamperMatch/index";
import BootcampersProfile from "../../Pages/BootcamperProfile/index";
import BootcampersMatch from "../../Pages/BootcamperMatch/index";
//Coach Pages
import CoachesMain from "../../Pages/CoachesMain";
import CoachDisplayTables from "../../Pages/CoachDisplayTables";
import CoachSignIn from "../../Pages/CoachesMain";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/CoachesTable">
            <CoachDisplayTables />
          </Route>
          <Route path="/Bootcamper">
            <BootcamperSignIn />
          </Route>
          <Route path="/Mentor">
            <MentorSignIn />
          </Route>
          <Route path="/Coach">
            <CoachesMain />
          </Route>
          <Route path="/BootcampersHome">
            <BootcamperMain />
          </Route>
          <Route path="/MentorsHome">
            <MentorMain />
          </Route>
          <Route path="/myProfile">
            <BootcampersProfile />
          </Route>
          <Route path="/mentorMatching">
            <BootcamperMatch />
          </Route>
          <Route path="/">
            {" "}
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
