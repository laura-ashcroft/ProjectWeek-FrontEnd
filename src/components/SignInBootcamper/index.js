import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
//auth
import firebase from "firebase/app";
import { signInWithRedirect } from "../Firebase";
import { logout } from "../Firebase";

//components
import Button from "../Button/index";
//css
import styles from "./signInBootcamper.module.css";

//images
import signInGoogle from "../../Images/SignInGoogle.png";
import loadingSpinner from "../../Images/Loading.gif";
import errorImage from "../../Images/error.png";
import soc from "../../Images/soc.png";

function BootcamperSignIn() {
  const [user, loading, error] = useAuthState(firebase.apps[0].auth());
  console.log(user);
  return (
    <div className={styles.signInDiv}>
      <img className={styles.socLogo} src={soc} alt="school of code logo" />
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
      {user && <p>Welcome, {user.displayName}</p>}
      {user && (
        <p>Please fill in the form below to complete your registration.</p>
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

export default BootcamperSignIn;
