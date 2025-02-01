import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import davisDotImg from "../assets/img/davis-dot2.PNG";
import littleLemonImg from  "../assets/img/little-lemon.png";
import d2dImg from "../assets/img/d2d-enzyme-rate-calculator.webp";
import trainingToolImg from "../assets/img/training-tool-login.PNG";
import fitnessTrackerImg from "../assets/img/fitness-tracker-app.png";
import foodOffImg from "../assets/img/food-off.webp";

function Projects() {

    const projects = [
        {
            projTitle: "DavisDot",
            role: "Developer",
            imgUrl: davisDotImg,
        },
        {
            projTitle: "Little Lemon Website",
            role: "Designer & Developer",
            imgUrl: littleLemonImg,
        },
        {
            projTitle: "Design 2 Data Enzyme Rate Calculator Website",
            role: "Frontend Developer",
            imgUrl: d2dImg,
        },
        {
            projTitle: "CodeLab Training Tool Website",
            role: "Developer",
            imgUrl: trainingToolImg,
        },
        {
            projTitle: "Fitness Tracker App",
            role: "Developer",
            imgUrl: fitnessTrackerImg,
        },
        {
            projTitle: "Food-Off App",
            role: "Developer",
            imgUrl: foodOffImg,
        }
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="/home" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Overview</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Descriptions</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp">
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                        Lorem Ipsum
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                        Lorem Ipsum
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Projects;