import React from "react";
import CardExpandable from "./CardExpandable.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./Skills.css";

export default function Skills() {
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

  let tongues = (
    <ul>
      <li>Spanish Native</li>
      <li>English Intermediate</li>
      <li>French Initial</li>
    </ul>
  );

  return (
    <section id="skills">
      <div className="Skills">
        {" "}
        <h2 className="arrow">
          <FontAwesomeIcon icon={faArrowDown} />
        </h2>
        <h2>Skills</h2> <hr />
        <Row>
          <Col className="developerSk" sm={3}>
            <CardExpandable name="Developer" text={devSkills} />
          </Col>
          <Col className="softSk" sm={3}>
            <CardExpandable name="Softs" text={softSkills} />
          </Col>
          <Col className="otherSk" sm={3}>
            <CardExpandable name="Other" text={otherSkills} />
          </Col>
          <Col className="LanguagesSk" sm={3}>
            <CardExpandable name="Languages" text={tongues} />
          </Col>
        </Row>
      </div>
    </section>
  );
}
