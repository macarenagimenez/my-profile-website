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

import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: "some",
    once: true,
  });

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
      {" "}
      <section ref={ref}>
        <div id="aboutme" className="AboutMe">
          <Arrow tittle="About Me" />
          <div
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <Row className="Description">{renderDescription}</Row>{" "}
          </div>
        </div>{" "}
      </section>
    </>
  );
}
