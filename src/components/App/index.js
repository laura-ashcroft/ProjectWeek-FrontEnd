import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Homepages
import HomePage from "../../Pages/Homepage";
// Mentor Pages
import MentorSignIn from "../SignInMentor/index";
import MentorHomepage from "../../Pages/MentorsMain/index";
import MentorProfile from "../../Pages/MentorProfile/index";
// Bootcamper Pages
import BootcamperSignIn from "../SignInBootcamper/index";
import BootcamperHomepage from "../../Pages/BootcamperMain/index";
import BootcamperMatch from "../../Pages/BootcamperMatch/index";
//Coach Pages
import Coaches from "../../Pages/CoachesMain";
import CoachDisplayTables from "../../Pages/CoachDisplayTables";

function App() {
  return (
    <BootcamperHomepage />
    // <Router>
    //   <div className="App">
    //     <Button>
    //       <Link to="/Coaches">Coach</Link>
    //     </Button>
    //     <nav className="navButtons">
    //       <HomePage />
    //     </nav>
    //     <Switch>
    //       <Route path="text">
    //         <Textpage />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
