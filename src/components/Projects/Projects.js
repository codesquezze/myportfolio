import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import myntra from "../../Assets/Projects/myntra.png";
import snapstay from "../../Assets/Projects/snapstay.png";
import newsadda from "../../Assets/Projects/newsadda.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snapstay}
              isBlog={false}
              title="SnapStay"
              description="Created a full-stack booking app like SnapStay using the MERN (MongoDB, Express.js, React, Node.js) stack.Implemented user registration and authentication to allow users to create accounts and log in securely.
              Provide users with the ability to create and manage their profiles, including personal information, booking history, and preferences.
             Implement a booking calendar with date and time selection.
             Integrate maps to provide users with a visual representation of the location of services they are booking."
              ghLink="https://github.com/codesquezze/bookingapp.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsadda}
              isBlog={false}
              title="NewsAdda"
              description="An interface of an React NewsApp which fetches real time news from the external API NewsApi
              It consists of different types of news may it be business,entertainment,science,technology etc.
              It also consists of Infinite Loader."
              ghLink="https://github.com/codesquezze/NewsAdda-React.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myntra}
              isBlog={false}
              title="Myntra Frontend Clone"
              description="Created a simple frontend of Myntra clone using HTML, CSS and JavaScript.
              Designed an intuitive and visually appealing user interface to highlight some products.
              User can also add/remove products from the cart and accordingly the total price will vary."
              ghLink="https://github.com/codesquezze/Myntra_Clone.git"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="Created a professional portfolio website using HTML, CSS, and JavaScript.
              Designed an intuitive and visually appealing user interface to highlight projects, achievements, contact form and personal information."
              ghLink="https://github.com/codesquezze/Portfolio.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
