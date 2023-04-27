import React from "react";
import CardExpandable from "./CardExpandable.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Skills.css";
import Arrow from "./reuse_components/Arrow.js";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function RenderSkills(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: "some",
  });

  let skills = [
    {
      name: "Programming",
      text: [
        "React",
        "Javascript",
        "CSS",
        "Git",
        "Bootstrap",
        "Figma",
        "Illustrator",
        "Photoshop",
      ],
      class: "developerSk",
    },
    {
      name: "Softs",
      text: [
        "Proactivity",
        "Creativity thinking",
        "Fast Learned",
        "Lidership",
        "Comunication",
        "Teamwork",
      ],
      class: "softSk",
    },

    {
      name: "Languages",
      text: ["Spanish Native", "English Intermediate", "French Initial"],
      class: "LanguagesSk",
    },
  ];

  const renderSkills = (skills) => {
    let content = [];
    for (let i = 0; i < skills.length; i++) {
      content.push(
        <Col className={skills[i].class} sm key={i}>
          <CardExpandable name={skills[i].name} text={skills[i].text} />
        </Col>
      );
    }
    return content;
  };

  return (
    <section ref={ref}>
      <div className="Skills" id="skills">
        <Arrow tittle="Skills" />
        <div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Row>{renderSkills(skills)}</Row>
        </div>
      </div>
    </section>
  );
}
