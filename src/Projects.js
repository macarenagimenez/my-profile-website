import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSpellCheck,
  faStore,
  faTemperatureHalf,
  faCalendarDays,
  faHandPointRight,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Projects.css";
import Arrow from "./reuse_components/Arrow";

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
      "images/imagendepaginaparaLinkedin.jpg",
      faStore,
      "Gaia Cirila E-Commerce",
      "https://gaiacirila.com.ar/",
      "Real project.",
      faGithub,
      "https://github.com/macarenagimenez/cirila_usuario_vite",
      "You could see it on GitHub"
    ),
    new Data(
      "2022",
      "images/capturaAppClima.jpg",
      faTemperatureHalf,
      "Weather App",
      "https://shiny-semifreddo-aa62d2.netlify.app//",
      "Practice project",
      faGithub,
      "https://github.com/macarenagimenez/react-final-",
      "You could see it on GitHub"
    ),
    new Data(
      "2022",
      "images/capturaAppDiccionario.jpg",
      faSpellCheck,
      "Dictionary App",
      "https://soft-valkyrie-a6aceb.netlify.app",
      "Practice project.",
      faGithub,
      "https://github.com/macarenagimenez/dictionary-project",
      "You could see it on GitHub"
    ),
  ];

  let renderProjects = (projects) => {
    let content = [];
    for (let i = 0; i < projects.length; i++) {
      content.push(
        <Col sm>
          <div className="columnaProyectos">
            {" "}
            <button className="botonProyecto">
              {" "}
              <a href={projects[i].url} target="_blank">
                {" "}
                <img src={projects[i].img} alt={projects[i].name} />
                />
              </a>
            </button>{" "}
            <div className="contenedorDescriptionProyectos">
              <strong>
                <FontAwesomeIcon icon={faCalendarDays} /> {projects[i].year}
                <br />
                <FontAwesomeIcon icon={projects[i].iconName} />
                <a
                  href={projects[i].url}
                  target="_blank"
                  rel="noreferrer"
                  className="nombreProyecto"
                >
                  {" "}
                  {projects[i].name}
                </a>{" "}
              </strong>{" "}
              <br />
              <small>Design and development.</small>
              <br />
              <br />
              <FontAwesomeIcon icon={faHandPointRight} />{" "}
              {projects[i].description}
              <br />
              <FontAwesomeIcon icon={projects[i].icon} />{" "}
              <a href={projects[i].gitHub} target="blank">
                {" "}
                GitHub.
              </a>{" "}
              <br />
            </div>
          </div>
        </Col>
      );
    }
    return content;
  };

  return (
    <section id="projects" ref={ref}>
      <div className="secctionProjects">
        <Arrow tittle="Some examples from my creative work." />
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
