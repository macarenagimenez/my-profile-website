import React from "react";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Arrow(props) {
  return (
    <>
      <h2 className="arrow">
        <FontAwesomeIcon icon={faArrowDown} />
      </h2>
      <h2>{props.tittle}</h2> <hr />
    </>
  );
}
