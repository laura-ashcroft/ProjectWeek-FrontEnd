//functionality
import React, { useState } from "react";
import BootcamperMatch from "../../Pages/BootcamperMatch";

//components

//css
import styles from "./bootcamperForm.module.css";

function BootcamperForm() {
  //   const [formData, setFormData] = useState({
  //     displayName: "",
  //     email: "",
  //     interestedIndustry: "",
  //     interests: "",
  //     bio: "",
  //   });

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

    async function handleSubmit() {
        const response = await fetch(`http://localhost:5000/bootcampers`, {
          headers: { "Contetn-Type": "application/json" },
        });
        const data = await response.json();
        setMentorsTable(data.result);
      }
      getMentor();
    }


  //   function handleSubmit(e) {
  //     setFormData({
  //       displayName: `${e.target.displayName.value}`,
  //       email: e.target.email.value,
  //       interestedIndustry: e.target.interestedIndustry.value,
  //       interests: e.target.interests.value,
  //       bio: e.target.bio.value,
  //     });
  //   }
  //   console.log(formData);
  //   console.log(displayName, email, interestedIndustry, interests, bio);
  return (
    <>
      <form
      // onSubmit={() => {
      //   handleSubmit();
      // }}
      >
        <label>
          Name:
          <input type="text" name="displayName" onChange={catchName}></input>
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={catchEmail}></input>
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
        <button type="submit">Submit Form</button>
      </form>
    </>
  );
}

export default BootcamperForm;
