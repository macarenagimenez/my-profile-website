import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHand,
  faSeedling,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <div className="Header">
      {" "}
      <Row>
        <Col>
          <h1>About me</h1>
          <div className="Description">
            {" "}
            <p>
              <FontAwesomeIcon icon={faHand} /> I'm a creative, responsable and
              commited person. I like to work as a team and solve problems.
            </p>
            <p>
              <FontAwesomeIcon icon={faSeedling} /> Vegetarian. I like
              travelling, the design and the good food.
            </p>
            <p>
              <FontAwesomeIcon icon={faCamera} /> Photographe amateur.
            </p>
          </div>
        </Col>
        <Col className="Presentation">
          {" "}
          <img src={require("./hello.png")} className="Hello" alt="hello" />
          <img src={require("./me2.png")} className="Me" alt="me" />
          <img
            src={require("./happyface.png")}
            className="Happyface"
            alt="emoji"
          />{" "}
        </Col>
        <Col>
          {" "}
          <img
            className="ImageProfile"
            src={require("./macagimenez.png")}
            alt="Macarena Gimenez"
          />
        </Col>
      </Row>
    </div>
  );
}
