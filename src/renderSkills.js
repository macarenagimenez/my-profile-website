import React from "react";
import CardExpandable from "./CardExpandable.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Skills.css";
import Arrow from "./reuse_components/Arrow.js";

export default function renderSkills(props) {
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
        <Col className={skills[i].class} sm>
          <CardExpandable name={skills[i].name} text={skills[i].text} />
        </Col>
      );
    }
    return content;
  };

  return (
    <div className="Skills" id="skills">
      <Arrow tittle="Skills" />
      <Row>{renderSkills(skills)}</Row>
    </div>
  );
}
