import { useState } from "react";
import { motion } from "framer-motion";
import "./CardExpandable.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CardExpandable() {
  const [isOpen, setIsopen] = useState(false);

  return (
    <div className="CardExpandable">
      {/* <Row>
        <Col> */}
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setIsopen(!isOpen)}
        className="Card"
        style={{
          borderRadius: "20px",
          boxShadow: "5px 4px 5px 0px rgba(140, 138, 138, 0.35)",
        }}
      >
        <motion.h2 layout="position"> Developer Skills</motion.h2>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="Expand"
          >
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>GitHub</li>
              <li>Hosting</li>
              <li>API</li>
              <li>VSCode</li>
              <li>Bootstrap</li>
            </ul>
          </motion.div>
        )}
      </motion.div>
      {/* </Col>
        <Col> */}
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setIsopen(!isOpen)}
        className="Card"
        style={{
          borderRadius: "20px",
          boxShadow: "5px 4px 5px 0px rgba(140, 138, 138, 0.35)",
        }}
      >
        <motion.h2 layout="position"> Soft Skills </motion.h2>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="Expand"
          >
            <ul>
              <li>Proactivity</li>
              <li>Creativity</li>
              <li>Fast Learned</li>
              <li>Lidership</li>
              <li>Design</li>
              <li>Curious</li>
              <li>Committed</li>
            </ul>
          </motion.div>
        )}
      </motion.div>
      {/* </Col>
        <Col> */}
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setIsopen(!isOpen)}
        className="Card"
        style={{
          borderRadius: "20px",
          boxShadow: "5px 4px 5px 0px rgba(140, 138, 138, 0.35)",
        }}
      >
        <motion.h2 layout="position"> Other Skills </motion.h2>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="Expand"
          >
            <ul>
              <li>Illustrator</li>
              <li>Photoshop</li>
              <li>3D Max</li>
              <li>VRay</li>
              <li>Design</li>
            </ul>
          </motion.div>
        )}
      </motion.div>
      {/* </Col>
      </Row> */}
    </div>
  );
}
