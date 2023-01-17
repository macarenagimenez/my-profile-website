import React from "react";

import Timeline from "./timeline.svg";
import "./Main.css";

export default function Main() {
  return (
    <div className="Main">
      <div>
        <h2>Timeline</h2> <hr />
        <img className="Timeline" src={Timeline} alt="Timeline" />
      </div>
    </div>
  );
}
