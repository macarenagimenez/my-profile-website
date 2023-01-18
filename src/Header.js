import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHand,
  faSeedling,
  faCamera,
  faGlasses,
  faPersonThroughWindow,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="Header ">
      <Row>
        <Col>
          <img
            src={require("./photo.png")}
            className="MyPhoto"
            alt="MacarenaGimenez"
          />{" "}
        </Col>
        <Col>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img src={require("./hello.png")} className="Hello " alt="hello" />
          </motion.div>{" "}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img src={require("./me.png")} className="Me " alt="me" />
          </motion.div>{" "}
        </Col>
      </Row>
      <div className="Description">
        {" "}
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
          <Col>
            <p>
              <FontAwesomeIcon icon={faSeedling} />
              <br></br> Vegetarian. I like travelling, the design and the good
              food.
            </p>
          </Col>
          <Col>
            <p>
              <FontAwesomeIcon icon={faCamera} /> <br></br>Photographe amateur.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
