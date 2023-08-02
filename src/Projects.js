import React from "react";

import {
  faSpellCheck,
  faStore,
  faTemperatureHalf,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Projects.css";
import Arrow from "./reuse_components/Arrow";
import Information from "./reuse_components/Information";
import Data from "./models/Data.ts";
import { Col, Row } from "react-bootstrap";
import { useInView } from "framer-motion";
import { useRef } from "react";
export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: "some",
  });

  const projects = [
    new Data(
      "2023",
      null,
      faStore,
      "Gaia Cirila E-Commerce (only desktop)",
      "https://gaiacirila.com.ar/",
      "An E-Commerce created for my own business with React.",
      faGithub,
      "https://github.com/macarenagimenez/cirila-usuario",
      "You could see it on GitHub"
    ),
    new Data(
      "2022",
      null,
      faTemperatureHalf,
      "Weather App",
      "https://shiny-semifreddo-aa62d2.netlify.app//",
      "A Weather App created for SheCodes with React.",
      faGithub,
      "https://github.com/macarenagimenez/react-final-",
      "You could see it on GitHub"
    ),
    new Data(
      "2022",
      null,
      faSpellCheck,
      "Dictionary App",
      "https://soft-valkyrie-a6aceb.netlify.app",
      "A Dictionary App created for SheCodes with React.",
      faGithub,
      "https://github.com/macarenagimenez/dictionary-project",
      "You could see it on GitHub"
    ),
  ];

  let renderProjects = (projects) => {
    let content = [];
    for (let i = 0; i < projects.length; i++) {
      content.push(
        <Col className="renderInformation" sm>
          <Information
            year={projects[i].year}
            iconName={projects[i].iconName}
            url={projects[i].url}
            name={projects[i].name}
            description={projects[i].description}
            icon={projects[i].icon}
            gitHub={projects[i].gitHub}
            origin={projects[i].origin}
          />
        </Col>
      );
    }
    return content;
  };

  return (
    <section id="projects" ref={ref}>
      <div className="sectionInformation">
        <Arrow tittle="Projects" />
        <div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Row>{renderProjects(projects)}</Row>
        </div>
      </div>
    </section>
  );
}
