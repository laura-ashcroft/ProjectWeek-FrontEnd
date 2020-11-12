//functionality
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//components

//css
import styles from "./mentorForm.module.css";

function MentorForm({ state }) {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [industry, setIndustry] = useState("");
  const [interests, setInterests] = useState("");
  const [bio, setBio] = useState("");
  const [currentBusiness, setCurrentBusiness] = useState("");
  const [currentRole, setCurrentRole] = useState("");
  const [roleDescription, setRoleDescription] = useState("");
  const [specialityLanguage, setSpecialityLanguage] = useState("");
  const [previousBootcamper, setPreviousBootcamper] = useState("");
  const [codingLanguages, setCodingLanguages] = useState("");
  const [dbMentorInfo, setDbMentorInfo] = useState(false);
  console.log(state);
  console.log(bio);
  // event.preventDefault();
   function catchName(e) {
    setDisplayName(e.target.value);
  }
  function catchEmail(e) {
    setEmail(e.target.value);
  } 
  function catchIndustry(e) {
    setIndustry(e.target.value);
  }
  function catchInterests(e) {
    setInterests(e.target.value);
  }
  function catchBio(e) {
    setBio(e.target.value);
  }

  function catchCurrentBusiness(e) {
    setCurrentBusiness(e.target.value);
  }

  function catchCurrentRole(e) {
    setCurrentRole(e.target.value);
  }
  function catchRoleDescription(e) {
    setRoleDescription(e.target.value);
  }

  function catchCodingLanguages(e) {
    setCodingLanguages(e.target.value);
  }

  function catchSpecialityLanguage(e) {
    setSpecialityLanguage(e.target.value);
  }

  function catchPreviousBootcamper(e) {
    setPreviousBootcamper(e.target.value);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/mentors", {
      method: "POST",
      body: JSON.stringify({
        name: state.displayName,
        bio: bio,
        coding_languages: codingLanguages,
        speciality_language: specialityLanguage,
        industry: industry,
        current_business: currentBusiness,
        present_role: currentRole,
        role_description: roleDescription,
        interests: interests,
        previous_bootcamper: previousBootcamper,
        email: state.email,
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
    console.log("handlesubmit working");
  }

  useEffect(() => {
    fetch(`http://localhost:5000/mentors/${state.uid}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.result !== undefined) {
          if (data.result.google_id === state.uid) {
            setDbMentorInfo(true);
            console.log(state.uid);
          }
        }
      });
    console.log(dbMentorInfo);
  }, []);

  //console.log(displayName, email, interestedIndustry, interests, bio);

  return (
    <>
      {!dbMentorInfo && (
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
            Industry:
            <input
              type="text"
              name="interestedIndustry"
              onChange={catchIndustry}
            ></input>
          </label>
          <label>
            Current Business:
            <input
              type="text"
              name="currentBusiness"
              onChange={catchCurrentBusiness}
            ></input>
          </label>
          <label>
            Current Role:
            <input
              type="text"
              name="currentRole"
              onChange={catchCurrentRole}
            ></input>
          </label>
          <label>
            Role Description:
            <input
              type="text"
              name="roleDescription"
              onChange={catchRoleDescription}
            ></input>
          </label>
          <label>
            Coding Languages:
            <input
              type="text"
              name="codingLanguages"
              onChange={catchCodingLanguages}
            ></input>
            <label>
              Speciality Language:
              <input
                type="text"
                name="specialityLanguage"
                onChange={catchSpecialityLanguage}
              ></input>
            </label>
          </label>
          <label>
            Interests:
            <input
              type="text"
              name="interests"
              onChange={catchInterests}
            ></input>
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
          <label>
            Are You A Previous Bootcamper? (true/false)
            <input
              type="text"
              name="previousBootcamper"
              onChange={catchPreviousBootcamper}
            ></input>
          </label>
          <label></label>
          <Link to="/MyProfile">
            <button onClick={handleSubmit} type="submit">
              Submit Form
            </button>
          </Link>
        </form>
      )}
    </>
  );
}

export default MentorForm;
