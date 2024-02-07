import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sahil Kumar </span>
            from <span className="purple"> Bihar, India.</span>
            <br />
            I am currently pursuing my  engineering in Information Science in SIT Tumkur.
            <br />
            I have completed my <span className="purple"> Intermediate </span> from DPS, Bokaro, Jharkhand.
            <br />
            And have completed<span className="purple"> Matriculation </span>  from DAV Public School, Motihari, Bihar.
            <br />
            <br />
            Apart from coding, some other activities that I love to do !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking (Hobby) 🧑‍🍳
            </li>
            <li className="about-activity">
              <ImPointRight /> Trading (Part time) 📈
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling ✈︎
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference to you and society 🔥"
          </p>
          <footer className="blockquote-footer">Sahil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
