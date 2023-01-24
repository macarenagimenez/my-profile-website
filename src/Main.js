import React from "react";
import AboutMe from "./AboutMe";
import LineaDeTiempo from "./LineaDeTiempo.js";
import Education from "./Education.js";
import Skills from "./Skills.js";
import Projects from "./Projects.js";
import Hobbies from "./Hobbies.js";
import ContactMe from "./ContactMe.js";
import "./Main.css";

export default function Main() {
  return (
    <div className="Main">
      {" "}
      <br></br>
      <AboutMe />
      <LineaDeTiempo />
      <Education />
      <Skills />
      <Projects />
      <Hobbies />
      <ContactMe />
    </div>
  );
}
