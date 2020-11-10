//functionality
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//images
import soc from "../../Images/soc.png";
//components
import Button from "../button";
import BootcamperSignIn from "../SignIn/bootcamperSignIn";

function HomePage() {
  return (
    <Router>
      <div className="homePage">
        <nav className="homePageButtons">
          <img id="socLogo" src={soc} alt="school of code logo" />
          <h2>Welcome To School of Code Mentoring</h2>
          <p>Please select your role at School of Code</p>
          <Button>
            <Link to="/SignInBootcamper">Bootcamper</Link>
          </Button>
          <Button>
            <Link to="/SignInMentor">Mentor</Link>
          </Button>
          <Button>
            <Link to="/SignInCoach">Coach</Link>
          </Button>
          <a href="https://www.schoolofcode.co.uk">
            Find out more about School of Code
          </a>
        </nav>
        <Switch>
          <Route path="/SignInBootcamper">
            <BootcamperSignIn />
          </Route>
          <Route path="/SignInMentor">
            <MentorSignIn />
          </Route>
          <Route path="/SignInCoach">
            <CoachSignIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default HomePage;
