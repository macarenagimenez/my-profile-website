import React from "react";
import Timeline from "./img/timeline2-01.svg";

import "./LineadeTiempo.css";
import Arrow from "./reuse_components/Arrow";

export default function LineadeTiempo() {
  return (
    <div>
      <section id="timeline">
        <div className="Timeline">
          <Arrow tittle="Timeline" />
          <img src={Timeline} alt="Timeline" className="TimelineImg" />{" "}
        </div>
      </section>
    </div>
  );
}
