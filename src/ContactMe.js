import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./ContactMe.css";
import Arrow from "./reuse_components/Arrow";

export default function ContactMe() {
  return (
    <>
      <br></br>
      <section id="contact">
        <div className="ContactMe">
          <Arrow tittle="Contact Me" />"
          <p>If you enjoyed my profile, I can be found on ...</p>
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
              <div
                onClick={(e) => {
                  window.location.href = "mailto:macuugimenez@gmail.com";
                }}
              >
                <FontAwesomeIcon icon={faEnvelope} /> E-mail{" "}
              </div>
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
