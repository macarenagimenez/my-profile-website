import React from "react";
import Timeline from "./img/timeline2-01.svg";
import { useRef } from "react";

import "./LineadeTiempo.css";
import Arrow from "./reuse_components/Arrow";
import { useInView } from "framer-motion";

export default function LineadeTiempo() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: "some",
  });

  return (
    <div>
      <section id="timeline" ref={ref}>
        <div className="Timeline">
          <Arrow tittle="Timeline" />
          <div className="scrollingHorizontal">
            <div
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <img src={Timeline} alt="Timeline" className="TimelineImg" />{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
