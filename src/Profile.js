import React from "react";
import { Link } from "react-scroll";
import Header from "./Header.js";
import Main from "./Main.js";
import { motion, useScroll } from "framer-motion";
import "./Profile.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";

import avatar from "./img/avatar.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Profile() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
        sticky-sm-bottom
      />
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        className="LandingPage"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home" className="Name">
            maca gimenez.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="Menu">
            <Nav>
              <Nav.Link>
                <Link activeClass="active" spy to="aboutme">
                  ABOUT
                </Link>{" "}
              </Nav.Link>{" "}
              <Nav.Link>
                {" "}
                <Link activeClass="active" spy to="projects">
                  PROJECTS
                </Link>{" "}
              </Nav.Link>{" "}
              <Nav.Link>
                {" "}
                <Link activeClass="active" spy to="skills">
                  SKILLS
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link activeClass="active" spy to="contact">
                  CONTACT ME{" "}
                </Link>{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Header />
      <Main />

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
