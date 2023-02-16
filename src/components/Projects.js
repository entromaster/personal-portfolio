import {Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
export const Projects = () => {

  const projects = [
    {
      title: "Quickest Route In Delhi Metro",
      description: "A project that enables user to find shortest route and fare between two points in Delhi Metro by entering Source and Destination Station name.Built in C++ using data structures.",
      imgUrl: projImg1,
      link: <a href="https://github.com/entromaster/Quickest-Route-to-your-Destination-on-Delhi-Metro-"/>
    },
    {
      title: "Lyrics Finder",
      description: "It is the project using Musixmatch API in which a user can find lyrics to any song by typing song name.Tech used: HTML, CSS, JavaScript, React.Js",
      imgUrl: projImg2,
      link: <a href="https://github.com/entromaster/Quickest-Route-to-your-Destination-on-Delhi-Metro-"/>
    },
    {
      title: "Expense Monitor",
      description: "This Project help to monitor various expenses of our day-to-day life.This is full stack application using MongoDb as our database.Tech used: HTML, CSS, JavaScript, React.Js, NodeJs, Express, MongoDb",
      imgUrl: projImg3,
      link: <a href="https://github.com/entromaster/Quickest-Route-to-your-Destination-on-Delhi-Metro-"/>
    },
  ];
  return(
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>I have listed 3 projects here. 1.Quickest Route to your destination on Delhi Metro 2.Lyrics Finder 3.Expense Monitor. Source code of each of them can be viewed by clicking Github link from NavBar.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills"className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey = "first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return(
                          <ProjectCard
                                key={index}
                                {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">More Projects Coming Soon !</Tab.Pane>
                <Tab.Pane eventKey="third">More Projects Coming Soon !</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}