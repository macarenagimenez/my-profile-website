import React from "react";

import Timeline from "./timeline.svg";
import "./Main.css";

export default function Main() {
  return (
    <div className="AboutMe">
      <div>
        <h1>Timeline</h1>
        <img className="Timeline" src={Timeline} alt="Timeline" />
      </div>
    </div>
  );
}
