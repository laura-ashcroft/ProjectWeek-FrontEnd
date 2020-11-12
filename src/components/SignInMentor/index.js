//functionality
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//auth
import firebase from "firebase/app";
import { signInWithRedirect } from "../Firebase";
import { logout } from "../Firebase";

//components
import Button from "../../components/Button/index";
//css
import styles from "./signInMentor.module.css";

//images
import signInGoogle from "../../Images/SignInGoogle.png";
import loadingSpinner from "../../Images/Loading.gif";
import signOut from "../../Images/SignOut.png";
import errorImage from "../../Images/error.png";
import soc from "../../Images/soc.png";

function MentorSignIn() {
  const [user, loading, error] = useAuthState(firebase.apps[0].auth());
  console.log(user);
  return (
    <div className={styles.signInDiv}>
      <img classname={styles.socLogo} src={soc} alt="school of code logo" />
      <h2>Welcome To School of Code Mentoring</h2>
      {!user && (
        <img
          className={styles.googleSignIn}
          src={signInGoogle}
          alt="google sign in"
          onClick={signInWithRedirect}
        />
      )}

      {user && (
        <Button className={styles.signOut} onClick={logout} text={"Log Out"} />
      )}
      <Link to="/">
        <Button text="back" />
      </Link>

      {user && <p>Welcome, {user.displayName}</p>}
      {user && (
        <p>
          Please complete the form below and make sure you submit your
          information! This will put you in the pool of mentors for the current
          cohort. Thank you for your submission!
        </p>
      )}
      <form></form>
      {user && (
        <Link to="/MentorsHome">
          <Button text={"Submit"} />
        </Link>
      )}
      {/*{user && <h2>Sign Out Of School of Code Mentoring</h2>}*/}
      {loading && (
        <img
          className={styles.spinnerGif}
          src={loadingSpinner}
          alt="loading spinner"
        />
      )}
      {error && <img src={errorImage} alt="error message" />}
      {error && <p>Please try again.</p>}
    </div>
  );
}

export default MentorSignIn;
