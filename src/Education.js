import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faBuildingColumns,
  faCode,
  faLanguage,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Education.css";

export default function Education() {
  return (
    <section id="education">
      <br></br>
      <div className="Education">
        <h2 className="arrow">
          <FontAwesomeIcon icon={faArrowDown} />
        </h2>
        <h2>Education</h2> <hr />
        <Row>
          <Col>
            <p>
              {" "}
              <strong>
                <FontAwesomeIcon icon={faCalendarDays} /> 2009 - 2015
              </strong>
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
              <strong>
                <FontAwesomeIcon icon={faCalendarDays} /> 2022 - Nowadays
              </strong>
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
              <strong>
                <FontAwesomeIcon icon={faCalendarDays} /> 2022
              </strong>
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
    </section>
  );
}
