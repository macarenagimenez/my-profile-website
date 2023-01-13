import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import "./Profile.css";
import Container from "react-bootstrap/Container";

export default function Profile() {
  return (
    <div className="LandingPage">
      <ul className="Menu">
        <li>Timeline</li>
        <li>Education</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>CONTACT ME</li>
      </ul>
      <Header />
      <Main />
    </div>
  );
}
