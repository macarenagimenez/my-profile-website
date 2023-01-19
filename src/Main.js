import React from "react";
import CardExpandable from "./CardExpandable.js";
import Timeline from "./timeline.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faBuildingColumns,
  faCode,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";

export default function Main() {
  let devSkills = (
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>React</li>
      <li>GitHub</li>
      <li>Hosting</li>
      <li>API</li>
      <li>VSCode</li>
      <li>Bootstrap</li>
    </ul>
  );

  let softSkills = (
    <ul>
      <li>Proactivity</li>
      <li>Creativity</li>
      <li>Fast Learned</li>
      <li>Lidership</li>
      <li>Entrepreneur</li>
      <li>Curious</li>
      <li>Committed</li>
    </ul>
  );

  let otherSkills = (
    <ul>
      <li>Illustrator</li>
      <li>Photoshop</li>
      <li>3D Max</li>
      <li>VRay</li>
      <li>Design</li>
      <li>Photograph</li>
    </ul>
  );

  return (
    <div className="Main">
      <div className="Timeline">
        <h2>Timeline</h2> <hr />
        <img src={Timeline} alt="Timeline" />
      </div>
      <div className="Education">
        <h2>Education</h2> <hr />
        <Row>
          <Col>
            <p>
              {" "}
              <FontAwesomeIcon icon={faCalendarDays} /> 2009 - 2015
              <br />
              <FontAwesomeIcon icon={faLanguage} /> Architecture Degree <br />
              <FontAwesomeIcon icon={faBuildingColumns} />{" "}
              <a href="https://faud.unc.edu.ar/" target="blank_">
                {" "}
                Universidad Nacional de Córdoba. Argentina.
              </a>
            </p>
          </Col>
          <Col>
            <p>
              {" "}
              <FontAwesomeIcon icon={faCalendarDays} /> 2022 - Nowadays
              <br />
              <FontAwesomeIcon icon={faLanguage} /> Intermediate English +
              Initial French <br />
              <FontAwesomeIcon icon={faBuildingColumns} />{" "}
              <a
                href="https://www.facebook.com/institutovoyage"
                target="blank_"
              >
                {" "}
                Voyage Institute, Villa Mercedes, San Luis, Argentina.
              </a>
            </p>
          </Col>
          <Col>
            <p>
              {" "}
              <FontAwesomeIcon icon={faCalendarDays} /> 2022
              <br />
              <FontAwesomeIcon icon={faCode} /> Front End + React <br />
              <FontAwesomeIcon icon={faBuildingColumns} />{" "}
              <a
                href="https://www.shecodes.io/graduates/45759-maria-macarena-gimenez"
                target="blank_"
              >
                {" "}
                SheCodes Plus and SheCodes React.
              </a>
            </p>
          </Col>
        </Row>
      </div>
      <div className="Skills">
        <h2>Skills</h2> <hr />
        <Row>
          <Col className="developerSk">
            <CardExpandable name="Developer Skills" text={devSkills} />
          </Col>
          <Col className="softSk">
            <CardExpandable name="Soft Skills" text={softSkills} />
          </Col>
          <Col className="otherSk">
            <CardExpandable name="Other Skills" text={otherSkills} />
          </Col>
        </Row>
      </div>
      <div className="Skills">
        <h2>Projects</h2> <hr />
      </div>
    </div>
  );
}
