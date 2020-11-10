import React from "react";
import MentorSignIn from "./SignIn/mentorSignIn";
import BootcamperSignIn from "./SignIn/bootcamperSignIn";
import CoachPassword from "./SignIn/coachPassword";

function Button({ text }) {
  return (
    <div className="button">
      <button>{text}</button>
    </div>
  );
}
export default Button;
