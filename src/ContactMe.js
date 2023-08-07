import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./ContactMe.css";

import { useInView } from "framer-motion";
import { useRef } from "react";
export default function ContactMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: "some",
  });
  return (
    <>
      <br></br>
      <section id="contact" ref={ref}>
        <div
          className="ContactMe"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <hr />
          <h2> Contact Me!</h2>
          <p>I hope we can work together!</p>
          <ul className="Footer">
            <li className="button">
              <a
                href="https://www.linkedin.com/in/maria-macarena-gimenez/"
                target="blank_"
              >
                {" "}
                <FontAwesomeIcon icon={faLinkedin} /> Linkedin
              </a>
            </li>
            <li className="button">
              {" "}
              <a href="https://github.com/macarenagimenez" target="blank_">
                {" "}
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
            </li>

            <li className="button buttonEmail ">
              {" "}
              <a
                href=""
                rel="noreferrer"
                onClick={(e) => {
                  window.location.href = "mailto:gimenez.macarena@outlook.com";
                }}
              >
                <FontAwesomeIcon icon={faEnvelope} /> E-mail{" "}
              </a>
            </li>
          </ul>
          <div className="Author">
            <p>
              <a href="https://github.com/macarenagimenez/my-profile-website">
                {" "}
                Open source code{" "}
              </a>{" "}
              created by me,{" "}
              <a href="https://www.linkedin.com/in/maria-macarena-gimenez/">
                Macu Gimenez.{" "}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
