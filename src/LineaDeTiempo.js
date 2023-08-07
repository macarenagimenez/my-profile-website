import React from "react";
import "./LineadeTiempo.css";
import Arrow from "./reuse_components/Arrow";
import { useInView, useScroll } from "framer-motion";
import { useRef } from "react";

export default function LineadeTiempo() {
  const ref = useRef(null);
  useScroll({ container: ref });
  const isInView = useInView(ref, {
    amount: "some",
  });

  return (
    <div>
      <section id="timeline" ref={ref}>
        <div className="contenedorLineaDeTiempo">
          <div
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="Timeline"
          >
            <ul ref={ref}>
              <li>
                {" "}
                <img
                  src="/images/timeline-01.svg"
                  alt="start_university"
                  className="TimelineImg"
                />{" "}
              </li>
              <li>
                {" "}
                <img
                  src="/images/timeline-02.svg"
                  alt="Degree_Architecture"
                  className="TimelineImg"
                />{" "}
              </li>
              <li>
                {" "}
                <img
                  alt="Architecture"
                  src="/images/timeline-03.svg"
                  className="TimelineImg"
                />{" "}
              </li>
              <li>
                {" "}
                <img
                  alt="Gaia_Cirila"
                  src="/images/timeline-04.svg"
                  className="TimelineImg"
                />{" "}
              </li>
              <li>
                {" "}
                <img
                  src="/images/timeline-05.svg"
                  alt="change_career"
                  className="TimelineImg"
                />{" "}
              </li>
              <li id="laUltima">
                {" "}
                <img
                  src="/images/timeline-06.svg"
                  alt="nowadays"
                  className="TimelineImg"
                />{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
