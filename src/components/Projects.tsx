import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import davisDotImg from "../assets/img/davis-dot2.PNG";
import littleLemonImg from "../assets/img/little-lemon.png";
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
            timeframe: "Sept 2024 - Present",
            projDesc: "Working within a team of developers and designers to create a social media app that is designed to connect individuals through shared interests and organizations. Our intention is to make this highly beneficial for UC Davis clubs.",
            tasks: [""],
            skills: ["React Native", "Figma", "TypeScript", "CSS", "HTML", "Expo", "GitHub"],
            link: "https://icarusalpha.com/projects"
        },
        {
            projTitle: "Little Lemon Website",
            role: "Designer & Developer",
            imgUrl: littleLemonImg,
            timeframe: "Sept 2024",
            projDesc: "Created a small table booking website for a fictional restaurant called Little Lemon for the Meta Frontend Developer Course.",
            tasks: [""],
            skills: ["React", "JavaScript", "HTML", "CSS", "Figma", "GitHub", "Jest"],
            link: "https://github.com/alexisbl14/little-lemon-website"
        },
        {
            projTitle: "Design 2 Data Enzyme Rate Calculator Website",
            role: "Frontend Developer",
            imgUrl: d2dImg,
            timeframe: "Sept 2023 - Dec 2023",
            projDesc: "Led the frontend development of a small web application to assist UC Davis's Design 2 Data Program in streamlining the calculation of enzyme reaction rates and generating graphs from these calculations.",
            tasks: [""],
            skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "HTML", "Figma", "Jira", "GitHub"],
            link: "https://codelabdavis.medium.com/d2d-1d01c5c6772f"
        },
        {
            projTitle: "CodeLab Training Tool Website",
            role: "Developer",
            imgUrl: trainingToolImg,
            timeframe: "Oct 2022 - Nov 2022",
            projDesc: "Worked in an agile team of developers and designers to create a website hosting training tools for the CodeLab organization.",
            tasks: [""],
            skills: ["MongoDB", "JavaScript", "Express.js", "Node.js", "Next.js", "Insomnia", "GitHub"],
            link: "https://codelabdavis.medium.com/training-tool-courses-9bc308b02e8d"
        },
        {
            projTitle: "Fitness Tracker App",
            role: "Developer",
            imgUrl: fitnessTrackerImg,
            timeframe: "May 2022",
            projDesc: "Worked in a small team for a class project to create a mobile app to help users better track their fitness and workouts.",
            tasks: [""],
            skills: ["Flutter", "Dart", "Github"],
            link: "https://github.com/alexisbl14/fitness_tracker_app"
        },
        {
            projTitle: "Food-Off App",
            role: "Developer",
            imgUrl: foodOffImg,
            timeframe: "Jan 2022 - May 2022",
            projDesc: "Worked within an Agile Development team of developers and designers to create a mobile application to help eliminate 'choice paralysis' for individuals choosing where to eat. The goal of the app was to help make the decision for you.",
            tasks: [""],
            skills: ["React Native", "JavaScript", "MongoDB", "Express.js", "Node.js", "HTML", "CSS", "Figma", "GitHub"],
            link: "https://codelabdavis.medium.com/food-off-45fc338dd980"
        }
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Below are examples of my latest projects!</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="/home" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Overview</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Descriptions</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp">
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
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