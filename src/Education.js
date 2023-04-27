import React from "react";

import {
  faBuildingColumns,
  faCode,
  faBookOpen,
  faRuler,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import "./Education.css";
import Arrow from "./reuse_components/Arrow";
import Data from "./models/Data.ts";
import Information from "./reuse_components/Information";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: "some",
  });

  const educations = [
    new Data(
      "2022",
      null,
      faCode,
      "Self taught",
      null,
      "In constant self-taugh training",
      null,
      " ",
      " "
    ),
    new Data(
      "2022",
      null,
      faCode,
      "React",
      "https://www.shecodes.io/graduates/45759-maria-macarena-gimenez",
      "React and Javascript",
      faBuildingColumns,
      null,
      "She Codes IO"
    ),
    new Data(
      "2019 - Actuality",
      null,
      faBookOpen,
      "Maestria en Diseño y Gestión de Sistemas Patrimoniales",
      "https://faud.unc.edu.ar/maestria-en-diseno-y-gestion-de-sistemas-patrimoniales/",
      "Master's degree in cultural project management.",
      faBuildingColumns,
      null,
      "Universidad Nacional de Córdoba"
    ),
    new Data(
      "2009 - 2015",
      null,
      faRuler,
      "Architecture",
      "https://faud.unc.edu.ar",
      "Architecture degree",
      faBuildingColumns,
      null,
      "Universidad Nacional de Córdoba"
    ),
  ];

  const renderEducation = (educations) => {
    const content = [];
    for (let i = 0; i < educations.length; i++) {
      content.push(
        <Col className="renderInformation" sm>
          <Information
            year={educations[i].year}
            iconName={educations[i].iconName}
            url={educations[i].url}
            name={educations[i].name}
            description={educations[i].description}
            icon={educations[i].icon}
            gitHub={educations[i].gitHub}
            origin={educations[i].origin}
          />
        </Col>
      );
    }
    return content;
  };

  return (
    <section id="education" ref={ref}>
      <div className="sectionInformation">
        <Arrow tittle="Education" />{" "}
        <div
          className="animationRendering"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Row>{renderEducation(educations)}</Row>
        </div>
      </div>
    </section>
  );
}
