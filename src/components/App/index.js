import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "../Pages/HomePage";
import MentorSignIn from "../SignIn/mentorSignIn";
import BootcamperSignIn from "../SignIn/bootcamperSignIn";
import Coaches from "../Pages/Coaches";

function App() {
  return (
    <Coaches />
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
