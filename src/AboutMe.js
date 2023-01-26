import React from "react";
import {
  faHand,
  faGlasses,
  faPersonThroughWindow,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section id="aboutme">
      {" "}
      <div className="Description">
        <h2 className="arrow">
          <FontAwesomeIcon icon={faArrowDown} />
        </h2>
        <h2>About me</h2> <hr />
        <Row>
          <Col>
            <p>
              <FontAwesomeIcon icon={faGlasses} /> <br></br>Here you’ll find a
              totaly nerd!! In constant capacitation to learn new and better
              tools for the technology and my new favorites lenguajes, english
              and french.
            </p>
          </Col>
          <Col>
            <p>
              <FontAwesomeIcon icon={faPersonThroughWindow} /> <br></br>I’am a
              curious person and ready to get into the IT world, but no just
              that!, also I'am a passionate entrepreneur and a disapointed
              architect.
            </p>
          </Col>
          <Col>
            <p>
              <FontAwesomeIcon icon={faHand} /> <br></br>I'm a creative,
              responsable and commited person. I like to work as a team and
              solve problems.
            </p>
          </Col>
        </Row>{" "}
      </div>
    </section>
  );
}
