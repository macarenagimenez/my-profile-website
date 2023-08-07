import React from "react";

import { Col, Row } from "react-bootstrap";
import Arrow from "./reuse_components/Arrow";

import "./Experience.css";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: "some",
  });

  return (
    <section id="#" ref={ref}>
      <div className="sectionExperience">
        <Arrow tittle="Three curious facts" />
        <div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Row className="contenedorDatosCuriosos">
            <Col sm>
              <h4>I met the world of technology in my 30s.</h4>
            </Col>{" "}
            <Col sm>
              <p>
                I always liked the technology but I didn’t see it as an option
                until I was encouraged and I love it.
              </p>
            </Col>
          </Row>

          <Row className="contenedorDatosCuriosos">
            <Col sm>
              <h4>I love making things and I've my own enterprise.</h4>
            </Col>{" "}
            <Col sm>
              <p>
                I create limited edition products and exclusive design,
                handmade. Dealing with every stage of the process, such as
                design, production, marketing, comunnity manager, sales,
                packaging, administration, etc.
              </p>
            </Col>
          </Row>
          <Row className="contenedorDatosCuriosos">
            <Col sm>
              <h4>Also, I'm an architect</h4>
            </Col>{" "}
            <Col sm>
              <p>
                After graduating, I worked for the public sector and then I
                worked as an independent architect developing projects and own
                works, leading work teams and learning to relate to the client.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}
