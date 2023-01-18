import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import { motion, useScroll } from "framer-motion";
import "./Profile.css";

import { Col, Row } from "react-bootstrap";

export default function Profile() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div>
        <Row className="LandingPage sticky-sm-top">
          <Col className="Name">MacuGimenez.</Col>
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
    </>
  );
}
