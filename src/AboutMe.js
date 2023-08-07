import React from "react";

import { Col, Row } from "react-bootstrap";
import "./AboutMe.css";
import Arrow from "./reuse_components/Arrow.js";

import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: "some",
  });

  return (
    <>
      {" "}
      <section ref={ref}>
        <div id="aboutme" className="AboutMe">
          <Arrow tittle="Some things about me" />
          <div
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <Row>
              {" "}
              <Col className="descriptionThingAboutMe">
                <h4>I live in:</h4>{" "}
                <p>
                  Rio Cuarto, Cordoba, Argentina, but I was born in Villa
                  Mercedes, San Luis.
                </p>
              </Col>
              <Col className="descriptionThingAboutMe">
                <h4>I've worked as:</h4>
                <p>
                  Architect within public and private sector. <br />{" "}
                  Entrepreneur creating my own enterprise.
                </p>
              </Col>
              <Col className="descriptionThingAboutMe">
                <div className="alinearItemSobreBase">
                  <h4>Now, I work as a:</h4>{" "}
                  <p>Freelancer Front End Developer.</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>{" "}
      </section>
    </>
  );
}
