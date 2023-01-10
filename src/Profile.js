import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import "./Profile.css";
import Container from "react-bootstrap/Container";

export default function Profile() {
  return (
    <div className="LandingPage">
      <div className="Menu">
        <p>About me</p>
        <p>Timeline</p>
      </div>
      <Header />
      <Main />
    </div>
  );
}
