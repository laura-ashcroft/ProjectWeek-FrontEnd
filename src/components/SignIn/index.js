import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
//auth
import firebase from "firebase/app";
import { signInWithRedirect } from "../firebase";
import { logout } from "../firebase";

//images
import signInGoogle from "../../Images/SignInGoogle.png";
import loadingSpinner from "../../Images/Loading.gif";
import signOut from "../../Images/SignOut.png";
import errorImage from "../../Images/error.png";
import soc from "../../Images/soc.png";

function SignIn() {
  const [user, loading, error] = useAuthState(firebase.apps[0].auth());
  console.log(user);
  return (
    <div className="signInDiv">
      <img id="socLogo" src={soc} alt="school of code logo" />
      <h2>Welcome To School of Code Mentoring</h2>
      {!user && (
        <img
          id="googleSignIn"
          src={signInGoogle}
          alt="google sign in"
          onClick={signInWithRedirect}
        />
      )}
      {user && (
        <img
          id="signOut"
          src={signOut}
          alt="sign out button"
          onClick={logout}
        />
      )}
      {user && <p>Welcome, {user.displayName}</p>}
      {user && (
        <p>Please fill in the form below to complete your registration.</p>
      )}
      {/*{user && <h2>Sign Out Of School of Code Mentoring</h2>}*/}
      {loading && (
        <img id="spinnerGif" src={loadingSpinner} alt="loading spinner" />
      )}
      {error && <img src={errorImage} alt="error message" />}
      {error && <p>Please try again.</p>}
    </div>
  );
}

export default SignIn;
