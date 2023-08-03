import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Header.css";

export default function Header() {
  return (
    <div className="contenedorBienvenida">
      <Row>
        <Col xs={4} sm>
          {" "}
          <div className="contenedorTextoHeader">
            <h1 className="mensajeBienvenidaNombre">MACA GIMENEZ,</h1>
            <p className="mensajeBienvenidaPuesto">Front End Developer.</p>{" "}
            <p className="mensajeBienvenidaDescripcion">
              "Making ideas a reality."
            </p>
          </div>
        </Col>
        <Col xs={8} sm>
          <img
            src="/images/MacarenaGimenez2.png"
            className="imagenBienvenida"
            alt="MacarenaGimenez"
          ></img>
        </Col>
      </Row>
    </div>
  );
}
