import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Header.css";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="Header">
      <Row>
        <Col>
          <img
            src={require("./img/photo.png")}
            className="MyPhoto"
            alt="MacarenaGimenez"
          />{" "}
        </Col>
        <Col>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img
              src={require("./img/hello.png")}
              className="Hello "
              alt="hello"
            />
          </motion.div>{" "}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img src={require("./img/me.png")} className="Me " alt="me" />
          </motion.div>
        </Col>
      </Row>{" "}
      <h4>"I love the chance to make new things."</h4>
    </div>
  );
}
