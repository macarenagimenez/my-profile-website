import React from "react";

import {
  faBuildingColumns,
  faCode,
  faLanguage,
  faBookOpen,
  faRuler,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import "./Education.css";
import Arrow from "./reuse_components/Arrow";
import Data from "./models/Data.ts";
import Information from "./reuse_components/Information";

export default function Education() {
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
        <Col className="renderInformation">
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
    <section id="education">
      <div className="sectionInformation">
        <Arrow tittle="Education" />
        <Row>{renderEducation(educations)}</Row>
      </div>
    </section>
  );
}
