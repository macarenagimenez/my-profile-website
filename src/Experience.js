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
export default function Experience() {
  const experience = [
    new Data(
      "2023 - Actuality",
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
      faRuler,
      "Architect on Infrastructure",
      null,
      "With the Goverment of Córdoba, Province.",
      null,
      null,
      null
    ),
  ];

  const renderExperience = (experience) => {
    const content = [];
    for (let i = 0; i < experience.length; i++) {
      content.push(
        <Col className="renderInformation">
          <Information
            year={experience[i].year}
            iconName={experience[i].iconName}
            url={experience[i].url}
            name={experience[i].name}
            description={experience[i].description}
            icon={experience[i].icon}
            gitHub={experience[i].gitHub}
            origin={experience[i].origin}
          />
        </Col>
      );
    }
    return content;
  };

  return (
    <section id="#">
      <div className="sectionInformation">
        <Arrow tittle="Experience" />
        <Row>{renderExperience(experience)}</Row>
      </div>
    </section>
  );
}
