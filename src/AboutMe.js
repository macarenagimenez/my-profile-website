import React from "react";
import {
  faHand,
  faGlasses,
  faPersonThroughWindow,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import "./AboutMe.css";
import Arrow from "./reuse_components/Arrow.js";

export default function AboutMe() {
  const description = [
    {
      icon: faGlasses,
      text: "Are you looking for a super nerd? Here I’m! I’m a curios person and I don’t have afraid to changes, so I’m constantly looking for challenges.",
    },
    {
      icon: faPersonThroughWindow,
      text: "SPOILER ALERT: I'am a self-taught! I love building products and learning new knowledges and that’s why the IT world won my hearth.There’s no limits!",
    },
    {
      icon: faHand,
      text: "Sorry, I don’t have a lots of year of experience programing, but trust me, my soft skills are stronger! Go and know me!",
    },
  ];

  const renderDescription = description.map((description) => {
    return (
      <Col>
        <p>
          <FontAwesomeIcon icon={description.icon} /> <br></br>
          {description.text}
        </p>
      </Col>
    );
  });

  return (
    <>
      <div id="aboutme" className="AboutMe">
        <Arrow tittle="About Me" />
        <div>
          <Row className="Description">{renderDescription}</Row>
        </div>
      </div>
    </>
  );
}
