import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faHandPointRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Information.css";

export default function Information(props) {
  return (
    <div className="">
      <p>
        {" "}
        <strong>
          <FontAwesomeIcon icon={faCalendarDays} /> {props.year} <br />
          <FontAwesomeIcon icon={props.iconName} />
          <a href={props.url} target="blank">
            {" "}
            {props.name}
          </a>
        </strong>
        <br />
        <br />
        <FontAwesomeIcon icon={faHandPointRight} /> {props.description}
        <br />
        <FontAwesomeIcon icon={props.icon} />{" "}
        <a href={props.gitHub} target="blank">
          {" "}
          {props.origin}{" "}
        </a>
      </p>
    </div>
  );
}
