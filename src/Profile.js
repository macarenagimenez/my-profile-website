import React from "react";
import { Link } from "react-scroll";
import Header from "./Header.js";
import Main from "./Main.js";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion, useScroll } from "framer-motion";
import "./Profile.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Col, Row } from "react-bootstrap";
import avatar from "./img/avatar.png";

export default function Profile() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="LandingPage sticky-sm-top ">
        <nav>
          <Row>
            <Col className="Name">
              <Link to="header">
                {" "}
                <span>macu gimenez.</span>
              </Link>
            </Col>
            <Col>
              <ul className="Menu">
                <li>
                  {" "}
                  <Link activeClass="active" spy to="aboutme">
                    {" "}
                    ABOUT{" "}
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link activeClass="active" spy to="timeline">
                    {" "}
                    TIMELINE
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link activeClass="active" spy to="education">
                    EDUCATION
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link activeClass="active" spy to="skills">
                    SKILLS
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" spy to="projects">
                    PROJECTS
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" to="contact" spy>
                    CONTACT ME{" "}
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </nav>
      </div>
      <Header />
      <Main />
      <section id="contact">
        <Row className="LandingPage">
          <Col className="ContactMe">
            Contact me{" "}
            <FontAwesomeIcon icon={faArrowRight} className="arrowright" />
          </Col>{" "}
          <Col>
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
          </Col>
        </Row>
      </section>
      <FloatingWhatsApp
        phoneNumber="5492657307339"
        accountName="Macu Gimenez"
        statusMessage="On Line"
        avatar={avatar}
        chatMessage="Hi! Could I help you?"
        allowEsc
        allowClickAway
      />
    </>
  );
}
