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
import Arrow from "./reuse_components/Arrow";

export default function Education() {
  return (
    <section id="education">
      <br></br>
      <div className="Education">
        <Arrow tittle="Education" />

        <Row>
          <Col sm={3}>
            <p>
              {" "}
              <strong>
                <FontAwesomeIcon icon={faCalendarDays} /> 2009 - 2015
              </strong>
              <br />
              <br />
              <FontAwesomeIcon icon={faLanguage} /> Architecture Degree <br />
              <FontAwesomeIcon icon={faBuildingColumns} />{" "}
              <a href="https://faud.unc.edu.ar/" target="blank_">
                {" "}
                Universidad Nacional de Córdoba. Argentina.
              </a>
            </p>
          </Col>
          <Col sm={3}>
            <p>
              {" "}
              <strong>
                <FontAwesomeIcon icon={faCalendarDays} /> 2020 - Actuality
              </strong>
              <br /> <br />
              <FontAwesomeIcon icon={faLanguage} /> Maestria en Sistemas
              Patrimoniales <br />
              <FontAwesomeIcon icon={faBuildingColumns} />{" "}
              <a href="https://faud.unc.edu.ar/" target="blank_">
                {" "}
                Universidad Nacional de Córdoba. Argentina.
              </a>
            </p>
          </Col>
          <Col sm={3}>
            <p>
              {" "}
              <strong>
                <FontAwesomeIcon icon={faCalendarDays} /> 2022
              </strong>
              <br /> <br />
              <FontAwesomeIcon icon={faCode} /> React Course <br />
              <FontAwesomeIcon icon={faBuildingColumns} />{" "}
              <a
                href="https://www.shecodes.io/graduates/45759-maria-macarena-gimenez"
                target="blank_"
              >
                {" "}
                SheCodes IO.
              </a>
            </p>
          </Col>
          <Col sm={3}>
            <p>
              {" "}
              <strong>
                <FontAwesomeIcon icon={faCalendarDays} /> Actuality
              </strong>
              <br /> <br />
              <FontAwesomeIcon icon={faCode} /> Self taught <br />
              <FontAwesomeIcon icon={faBuildingColumns} /> In constant
              self-taught training
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
}
