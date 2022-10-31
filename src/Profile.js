import React from "react";
import "./Profile.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Profile() {
  return (
    <Container>
      <div className="Header">
        <Row>
          <Col className="Presentation">
            <img src={require("./hello.png")} className="Hello" />
            <img src={require("./me2.png")} className="Me" />
            <img src={require("./happyface.png")} className="Happyface" />
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
    </Container>
  );
}
