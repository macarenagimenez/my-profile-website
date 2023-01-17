import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import "./Profile.css";

import { Col, Row } from "react-bootstrap";

export default function Profile() {
  return (
    <div>
      <Row className="LandingPage sticky-sm-top">
        <Col className="Name">macu gimenez.</Col>
        <Col>
          <ul className="Menu">
            <li>About me</li>
            <li>Timeline</li>
            <li>Education</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>CONTACT ME</li>
          </ul>
        </Col>
      </Row>
      <Header />
      <Main />
    </div>
  );
}
