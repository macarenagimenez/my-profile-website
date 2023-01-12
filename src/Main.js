import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHand,
  faSeedling,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import Timeline from "./timeline.svg";
import "./Main.css";

export default function Main() {
  return (
    <div className="AboutMe">
      <h1>About me!</h1>
      <div className="Description">
        <p>
          <FontAwesomeIcon icon={faHand} /> I'm a creative, responsable and
          commited person. I like to work as a team and solve problems.
        </p>
        <p>
          <FontAwesomeIcon icon={faSeedling} /> Vegetarian. I like travelling,
          the design and the good food.
        </p>
        <p>
          <FontAwesomeIcon icon={faCamera} /> Photographe amateur.
        </p>
      </div>
      <div>
        <h1>Timeline!</h1>
        <img className="Timeline" src={Timeline} alt="Timeline" />
      </div>
    </div>
  );
}
