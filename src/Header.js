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
            <p className="mensajeBienvenidaNombre">MACA GIMENEZ</p>
            <p className="mensajeBienvenidaPuesto">Front End Developer.</p>{" "}
            <hr />{" "}
            <p className="mensajeBienvenidaDescripcion">
              "I am a fan of making ideas come to life."
            </p>
          </div>
        </Col>
        <Col xs={8} sm>
          <img
            src="/images/MacarenaGimenez2.jpg"
            className="imagenBienvenida"
            alt="MacarenaGimenez"
          ></img>
        </Col>
      </Row>{" "}
      <button
        className="botonContacto"
        onClick={(e) => {
          window.location.href = "mailto:gimenez.macarena@outlook.com";
        }}
      >
        {" "}
        Let's start working together by writing to me!
      </button>
    </div>
  );
}
