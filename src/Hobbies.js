import React from "react";
import { Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faArrowDown,
  faUtensils,
  faRulerVertical,
  faPlane,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import "./Hobbies.css";

export default function Hobbies() {
  return (
    <section id="hobbies" className="Hobbies">
      <h2 className="arrow">
        <FontAwesomeIcon icon={faArrowDown} />
      </h2>
      <h2>Hobbies</h2> <hr />{" "}
      <div className="HobbiesDescription">
        <div>
          <p>
            <FontAwesomeIcon icon={faSeedling} /> I'm vegetarian! <br></br>
            <FontAwesomeIcon icon={faUtensils} /> I love the good food,
            especially pasta.<br></br>
            <FontAwesomeIcon icon={faRulerVertical} /> Fanatic of creative
            design.
            <br></br>
            <FontAwesomeIcon icon={faPlane} /> If it comes to travel, I'm the
            first one looking for tickets!<br></br>
            <FontAwesomeIcon icon={faCamera} /> I love making photos, I like
            seeing everything through my lens.<br></br>
          </p>
        </div>
        <p className="photos">
          <FontAwesomeIcon icon={faArrowDown} /> Below, you will see a few
          pictures taken by my camera! <FontAwesomeIcon icon={faArrowDown} />
        </p>
      </div>
      <Carousel className="Carrousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./img/carrousel/DSC_0110.jpg")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./img/carrousel/DSC_0135.jpg")}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./img/carrousel/DSC_0147.jpg")}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./img/carrousel/DSC_0172.jpg")}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./img/carrousel/DSC_0199.jpg")}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./img/carrousel/DSC_0204.jpg")}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./img/carrousel/DSC_0210.jpg")}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./img/carrousel/DSC_0243.jpg")}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./img/carrousel/DSC_0292.jpg")}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./img/carrousel/DSC_0324.jpg")}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
