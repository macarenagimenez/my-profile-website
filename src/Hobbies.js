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

export default function Hobbies() {
  return (
    <section id="hobbies" className="Hobbies">
      <h2 className="arrow">
        <FontAwesomeIcon icon={faArrowDown} />
      </h2>
      <h2>Hobbies</h2> <hr />
      <p>
        <FontAwesomeIcon icon={faSeedling} /> I'm vegetarian! <br></br>
        <FontAwesomeIcon icon={faUtensils} /> I love the good food, especially
        pasta.<br></br>
        <FontAwesomeIcon icon={faRulerVertical} /> Fanatic of creative design.
        <br></br>
        <FontAwesomeIcon icon={faPlane} /> If it comes to travel, I'm the first
        one looking for tickets!<br></br>
        <FontAwesomeIcon icon={faCamera} /> I love making photos, I like seeing
        everything through my lens.<br></br>
      </p>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1673992455497-eb627bc4936d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1674164969153-9585afeef473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1674072310759-d0cafcabbb6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
