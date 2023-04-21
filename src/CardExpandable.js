import { useState } from "react";
import { motion } from "framer-motion";
import "./CardExpandable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function CardExpandable(props) {
  const [isOpen, setIsopen] = useState(false);

  const showSkills = (skills) => {
    return skills.map((skill, index) => {
      return (
        <li key={index} className="Expandskill">
          {skill}
        </li>
      );
    });
  };

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
        <motion.h3 layout="position">{props.name}</motion.h3>{" "}
        <motion.h4 layout="position">
          <FontAwesomeIcon icon={faChevronDown} />
        </motion.h4>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="Expand"
          >
            <ul> {showSkills(props.text)}</ul>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
