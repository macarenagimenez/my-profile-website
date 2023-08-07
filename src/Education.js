import React from "react";

import { faCode, faRuler, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import "./Education.css";
import Arrow from "./reuse_components/Arrow";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: "some",
  });

  return (
    <section id="education" ref={ref}>
      <div className="sectionEducation">
        <Arrow tittle="Where I've studied" />{" "}
        <div
          className="animationRendering"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {" "}
          <div className="contenedorEducacion">
            <Row>
              {" "}
              <Col className="columnaEducacion" sm>
                <h1>
                  <FontAwesomeIcon icon={faCode} />{" "}
                </h1>
                <br /> <h4>Front End Developer </h4>
                <FontAwesomeIcon icon={faCalendar} /> Since 2022
                <hr />
                Self-taught education.
              </Col>{" "}
              <Col className="columnaEducacion" sm>
                <h1>
                  <FontAwesomeIcon icon={faRuler} />
                </h1>{" "}
                <br /> <h4>Architect </h4>
                <FontAwesomeIcon icon={faCalendar} /> 2009-2015
                <hr />
                Universidad Nacional de Córdoba, Argentina.
              </Col>
            </Row>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
