//functionality
import React, { useState } from "react";
import BootcamperMatch from "../../Pages/BootcamperMatch";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//components

//css
import styles from "./bootcamperForm.module.css";

function BootcamperForm({ state }) {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [interestedIndustry, setInterestedIndustry] = useState("");
  const [interests, setInterests] = useState("");
  const [bio, setBio] = useState("");

  function catchName(e) {
    setDisplayName(e.target.value);
  }
  function catchEmail(e) {
    setEmail(e.target.value);
  }
  function catchIndustry(e) {
    setInterestedIndustry(e.target.value);
  }
  function catchInterests(e) {
    setInterests(e.target.value);
  }
  function catchBio(e) {
    setBio(e.target.value);
  }

  function onClick(onclick) {
    return onclick;
  }


  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/bootcampers", {
      method: "POST",
      body: JSON.stringify({
        name: displayName,
        bio: bio,
        interested_industry: interestedIndustry,
        interests: interests,
        mentors_I_Like: [``],
        email: email,
        google_id: state.uid,
      }),
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  //console.log(displayName, email, interestedIndustry, interests, bio);

  return (
    <>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="displayName"
            onChange={catchName}
            value={state.displayName}
          ></input>
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={catchEmail}
            value={state.email}
          ></input>
        </label>
        <label>
          Interested Industry:
          <input
            type="text"
            name="interestedIndustry"
            onChange={catchIndustry}
          ></input>
        </label>
        <label>
          Interests:
          <input type="text" name="interests" onChange={catchInterests}></input>
        </label>
        <label>
          Bio:
          <textarea
            name="bio"
            cols="30"
            rows="10"
            onChange={catchBio}
          ></textarea>
        </label>
        <Link to="/BootcampersHome">
          <button onClick={(handleSubmit, onClick)} type="submit">
            Submit Form
          </button>
        </Link>
      </form>
    </>
  );
}

export default BootcamperForm;
