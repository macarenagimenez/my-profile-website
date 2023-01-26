import React from "react";
import Timeline from "./img/timeline2-01.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./LineadeTiempo.css";

export default function LineadeTiempo() {
  return (
    <div>
      <section id="timeline">
        <div className="Timeline">
          <h2 className="arrow">
            <FontAwesomeIcon icon={faArrowDown} />
          </h2>{" "}
          <h2>Timeline</h2> <hr />
          <img src={Timeline} alt="Timeline" className="TimelineImg" />{" "}
        </div>
      </section>
    </div>
  );
}
