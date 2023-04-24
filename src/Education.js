import React from "react";

import {
  faBuildingColumns,
  faCode,
  faLanguage,
  faBookOpen,
  faRuler,
} from "@fortawesome/free-solid-svg-icons";

import "./Education.css";
import Arrow from "./reuse_components/Arrow";
import Data from "./models/Data.ts";
import Information from "./reuse_components/Information";

export default function Education() {
  const education = [
    new Data(
      "2022",
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
      faRuler,
      "Architecture",
      "https://faud.unc.edu.ar",
      "Architecture degree",
      faBuildingColumns,
      null,
      "Universidad Nacional de Córdoba"
    ),
  ];

  const renderEducation = (education) => {
    const content = [];
    for (let i = 0; i < education.length; i++) {
      content.push(
        <Information
          year={education[i].year}
          iconName={education[i].iconName}
          url={education[i].url}
          name={education[i].name}
          description={education[i].description}
          icon={education[i].icon}
          gitHub={education[i].gitHub}
          origin={education[i].origin}
        />
      );
    }
    return content;
  };

  return (
    <section id="education">
      <div className="secctionProjects">
        <Arrow tittle="Education" />
        {renderEducation(education)}
      </div>
    </section>
  );
}
