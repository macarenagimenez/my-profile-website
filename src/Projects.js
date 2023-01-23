import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
  return (
    <section id="projects">
      <div className="secctionProjects">
        {" "}
        <h2 className="arrow">
          <FontAwesomeIcon icon={faArrowDown} />
        </h2>
        <h2>Projects</h2> <hr />
        <div className="projects">
          {" "}
          <a
            href="https://shiny-semifreddo-aa62d2.netlify.app//"
            target="blank_"
          >
            <h2>
              Weather App <FontAwesomeIcon icon={faHandPointer} />
            </h2>{" "}
          </a>
          <p> A Weather App created for SheCodes with React. </p>
          <p>
            {" "}
            You could see it on{" "}
            <a
              href="https://github.com/macarenagimenez/react-final-project"
              target="blank_"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub.
            </a>
          </p>
        </div>{" "}
        <div className="projects">
          <a href="https://soft-valkyrie-a6aceb.netlify.app" target="blank_">
            <h2>
              {" "}
              Dictionary App <FontAwesomeIcon icon={faHandPointer} />
            </h2>{" "}
          </a>
          <p> A Dictionary app created for SheCodes with React. </p>
          <p>
            {" "}
            You could see it on{" "}
            <a
              href="https://github.com/macarenagimenez/dictionary-project"
              target="blank_"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub.
            </a>
          </p>
        </div>{" "}
      </div>{" "}
    </section>
  );
}
