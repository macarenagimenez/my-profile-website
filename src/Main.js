import React from "react";
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
    </div>
  );
}
