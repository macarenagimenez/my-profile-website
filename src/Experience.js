import React from "react";
import Information from "./reuse_components/Information";
import Data from "./models/Data.ts";
import { Col, Row } from "react-bootstrap";
import Arrow from "./reuse_components/Arrow";
import {
  faCode,
  faPhone,
  faStore,
  faRuler,
} from "@fortawesome/free-solid-svg-icons";
import "./Experience.css";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: "some",
  });
  const experiences = [
    new Data(
      "2023 - Actuality",
      null,
      faCode,
      "Freelance Front-End",
      null,
      "Nowadays I’m working on my e-commerce website with a Sr Back End",
      faPhone,
      "https://www.linkedin.com/in/dario-rocha-a6a780139/",
      "Click here to contact developer Back End."
    ),
    new Data(
      "2019 - 2022",
      "images/cirila.jpg",
      faStore,
      "Owner in Gaia Cirila",
      "https://www.instagram.com/gaia.cirila",
      "My own e-commerce, I handled all the process from the desing until sells and marketing, including photographies of product, social media and accounting.",
      null,
      null,
      null
    ),
    new Data(
      "2017 - 2020",
      "images/obra.jpg",
      faRuler,
      "Independent Architect",
      null,
      "I was working with projects and construction.",
      null,
      null,
      null
    ),
    new Data(
      "2015 - 2017",
      "images/secretaria.jpg",
      faRuler,
      "Architect on Infrastructure",
      null,
      "With the Goverment of Córdoba, Province.",
      null,
      null,
      null
    ),
  ];

  const renderExperience = (experiences) => {
    const content = [];
    for (let i = 0; i < experiences.length; i++) {
      content.push(
        <Col className="renderInformation" sm>
          <Information
            year={experiences[i].year}
            img={experiences[i].img}
            iconName={experiences[i].iconName}
            url={experiences[i].url}
            name={experiences[i].name}
            description={experiences[i].description}
            icon={experiences[i].icon}
            gitHub={experiences[i].gitHub}
            origin={experiences[i].origin}
          />{" "}
        </Col>
      );
    }
    return content;
  };

  return (
    <section id="#" ref={ref}>
      <div className="sectionInformation">
        <Arrow tittle="Experience" />
        <div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Row>{renderExperience(experiences)} </Row>
        </div>
      </div>
    </section>
  );
}
