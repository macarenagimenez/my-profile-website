import React from "react";
import AboutMe from "./AboutMe";
import LineaDeTiempo from "./LineaDeTiempo.js";
import Education from "./Education.js";
import Skills from "./renderSkills.js";
import Projects from "./Projects.js";
import Hobbies from "./Hobbies.js";
import ContactMe from "./ContactMe.js";
import Experience from "./Experience.js";
import "./Main.css";

export default function Main() {
  return (
    <div className="Main">
      {" "}
      <br></br>
      <AboutMe />
      <LineaDeTiempo />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Hobbies />
      <ContactMe />
    </div>
  );
}
