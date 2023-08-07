import React from "react";

import "./Hobbies.css";
import Arrow from "./reuse_components/Arrow";
import { Row, Col } from "react-bootstrap";

export default function Hobbies() {
  return (
    <section id="hobbies" className="Hobbies">
      <Arrow tittle="Things I really love" />
      <Row>
        <Col sm>
          <div className="imagenParaHobbie_viajar"></div>
        </Col>{" "}
        <Col sm>
          {" "}
          <div className="imagenParaHobbie_fotografia"></div>
        </Col>{" "}
        <Col sm>
          {" "}
          <div className="imagenParaHobbie_comida"></div>
        </Col>
        <Col sm>
          {" "}
          <div className="imagenParaHobbie_perro"></div>
        </Col>{" "}
      </Row>
    </section>
  );
}
