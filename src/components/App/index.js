import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "../../Pages/Homepage";
import MentorSignIn from "../SignInMentor/index";
import BootcamperSignIn from "../SignInBootcamper/index";
import Coaches from "../../Pages/CoachesMain";

function App() {
  return (
    <HomePage />
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
