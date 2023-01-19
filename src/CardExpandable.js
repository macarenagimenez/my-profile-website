import { useState } from "react";
import { motion } from "framer-motion";
import "./CardExpandable.css";

export default function CardExpandable(props) {
  const [isOpen, setIsopen] = useState(false);

  return (
    <div className="CardExpandable">
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
        <motion.h2 layout="position">{props.name}</motion.h2>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="Expand"
          >
            {props.text}
          </motion.div>
        )}
      </motion.div>

      {/* <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setIsopen(!isOpen)}
        className="Card"
        style={{
          borderRadius: "20px",
          boxShadow: "5px 4px 5px 0px rgba(140, 138, 138, 0.35)",
        }}
      > */}
      {/* <motion.h2 layout="position"> Soft Skills </motion.h2>
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
      </motion.div> */}

      {/* <motion.div
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
      </motion.div> */}
    </div>
  );
}
