import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Header() {
  return (
    <div className="Header">
      {" "}
      <Row>
        <Col className="Presentation">
          <img src={require("./hello.png")} className="Hello" alt="hello" />
          <img src={require("./me2.png")} className="Me" alt="me" />
          <img
            src={require("./happyface.png")}
            className="Happyface"
            alt="emoji"
          />
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
  );
}
