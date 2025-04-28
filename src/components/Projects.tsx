import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import bakersHubImg from "../assets/img/bakers-hub.png";
import netflixImg from "../assets/img/netflix-project.PNG";
import davisDotImg from "../assets/img/davis-dot2.PNG";
import littleLemonImg from "../assets/img/little-lemon.png";
import d2dImg from "../assets/img/d2d-enzyme-rate-calculator.webp";
import trainingToolImg from "../assets/img/training-tool-login.PNG";
import fitnessTrackerImg from "../assets/img/fitness-tracker-app.png";
import foodOffImg from "../assets/img/food-off.webp";
import { ProjectDescription } from "./ProjectDescritption";

function Projects() {

    const projects = [
        {
            projTitle: "Baker's Hub (Tentative)",
            role: "Developer, Designer",
            imgUrl: bakersHubImg,
            timeframe: "April 2025 - present",
            projDesc: "This project is a web app designed for bakers (and eventually other craft-based microbusinesses) to manage their day-to-day operations—from ingredient tracking and recipe costs to sales and event prep, while also supporting learning (later add on) and business growth.",
            tasks: ["Set up user accounts using Django Rest Framework (DRF) with Token Authentication and permissions.",
                    "Set up models including Ingredients, Recipes, and RecipeIngredient.",
                    "Created API endpoints to create, list, update, and delete (CRUD).",
                    "Implemented Unit Tests with 100% code coverage.",
                    "Added views to give the user a suggested price based on a given profit margin, and to add and deduct ingredient amounts in inventory."
            ],
            skills: ["Python", "SQL", "Django", "DRF", "Unit Testing (TDD)", "RESTful API Development", "Authentication/Authorization", "Database Design & Management", "GitHub"],
            link: "https://github.com/alexisbl14/bakers-hub-backend"
        },
        {
            projTitle: "Netflix Content Data Analytics Project",
            role: "Data Analyst",
            imgUrl: netflixImg,
            timeframe: "March 2025 - April 2025",
            projDesc: "This project explores trends in Netflix's content from January 2008 to January 2020 using a cleaned and transformed dataset from Tableau Public. It analyzes growth trends, genre and rating distributions, and country-level contributions — offering insight into how Netflix’s global catalog has evolved.",
            tasks: ["Processed and cleaned 3 raw CSV datasets using SQL and Excel to normalize genres, unify content ratings, and integrate into a relational data model for efficient querying.",
                    "Built a multi-page Power BI dashboard with dynamic visuals (bar, line, treemap, KPI cards) using DAX measures for YoY growth and genre ranking.",
                    "Discovered that 65%+ of content from top-producing non-U.S. countries is classified as International, while the U.S. and Canada favored Comedy and Drama, revealing regional content preferences that could inform localization and licensing strategies.",
                    "Compiled a report documenting methodology, data transformations, and visual insights to communicate findings to both technical and non-technical stakeholders."
                ],
            skills: ["SQL", "Excel", "MySQL", "Power BI", "DAX", "Dashboard Design", "GitHub", "Technical Documentation", "Data Analysis Reporting"],
            link: "https://github.com/alexisbl14/netflix-content-analysis-2008-2020"
        },
        {
            projTitle: "DavisDot",
            role: "Developer",
            imgUrl: davisDotImg,
            timeframe: "Sept 2024 - Present",
            projDesc: "Working within a team of developers and designers to create a social media app that is designed to connect individuals through shared interests and organizations. Our intention is to make this highly beneficial for UC Davis clubs.",
            tasks: ["Translated Figma designs into fully functional pages using React Native and CSS, ensuring high fidelity to design specifications.",
                    "Integrated Expo Router for seamless navigation between pages within the React Native application.",
                    "Developed and implemented a robust Theme Context to maintain a consistent design system, including color schemes and typography.",
                    "Currently implementing the frontend for learning about different organizations or UC Davis Clubs."
                ],
            skills: ["React Native", "Figma", "TypeScript", "CSS", "HTML", "Expo", "GitHub"],
            link: "https://icarusalpha.com/projects"
        },
        {
            projTitle: "Little Lemon Website",
            role: "Designer & Developer",
            imgUrl: littleLemonImg,
            timeframe: "Sept 2024",
            projDesc: "Created a small table booking website for a fictional restaurant called Little Lemon for the Meta Frontend Developer Course.",
            tasks: ["Created a table booking website for a fictional restaurant called Little Lemon for the Meta Frontend Developer Course Capstone Project using React with JavaScript and CSS.",
                    "Created Mid-Fi and Hi-Fi designs for 4 pages of the website using Figma from a design system provided.",
                    "Implemented unit testing for functionality of the table booking with the Jest library."
                ],
            skills: ["React", "JavaScript", "HTML", "CSS", "Figma", "GitHub", "Jest"],
            link: "https://github.com/alexisbl14/little-lemon-website"
        },
        {
            projTitle: "Design 2 Data Enzyme Rate Calculator Website",
            role: "Frontend Developer",
            imgUrl: d2dImg,
            timeframe: "Sept 2023 - Dec 2023",
            projDesc: "Led the frontend development of a small web application to assist UC Davis's Design 2 Data Program in streamlining the calculation of enzyme reaction rates and generating graphs from these calculations.",
            tasks: ["Led the frontend implementation of a website that calculated Enzyme Rates for UC Davis’s Design 2 Data organization within an agile development team, using React with TypeScript and Tailwind CSS.",
                    "Efficiently executed the seamless transfer of 3 Figma designs to the website frontend to ensure a precise implementation.",
                    "Utilized data retrieval and processing skills to extract information from Google Sheets to calculate required enzyme rates.",
                    "Improved data accuracy by 50% for lab use by implementing automated enzyme rate calculations."
                ],
            skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "HTML", "Figma", "Jira", "GitHub"],
            link: "https://codelabdavis.medium.com/d2d-1d01c5c6772f"
        },
        {
            projTitle: "CodeLab Training Tool Website",
            role: "Developer",
            imgUrl: trainingToolImg,
            timeframe: "Oct 2022 - Nov 2022",
            projDesc: "Worked in an agile team of developers and designers to create a website hosting training tools for the CodeLab organization.",
            tasks: ["Contributed to the development of a website hosting training tools for the CodeLab organization using React.",
                    "Developed 4 backend API routes linking to MongoDB in JavaScript based on the specified backend model.",
                    "Provided assistance and support to team members to facilitate the completion of assigned tasks."
                ],
            skills: ["MongoDB", "JavaScript", "Express.js", "Node.js", "Next.js", "Insomnia", "GitHub"],
            link: "https://codelabdavis.medium.com/training-tool-courses-9bc308b02e8d"
        },
        {
            projTitle: "Fitness Tracker App",
            role: "Developer",
            imgUrl: fitnessTrackerImg,
            timeframe: "May 2022",
            projDesc: "Worked in a small team for a class project to create a mobile app to help users better track their fitness and workouts.",
            tasks: ["Built a fitness management application using Flutter, focusing on a responsive design and seamless user experience.",
                    "Crafted and debugged the UI layout for various screens, ensuring a well-designed and cohesive user interface that guaranteed functionality across devices.",
                    "Integrated a Bottom Navigation Bar for seamless screen switching and efficient transfer of information between screens."
                ],
            skills: ["Flutter", "Dart", "Github"],
            link: "https://github.com/alexisbl14/fitness_tracker_app"
        },
        {
            projTitle: "Food-Off App",
            role: "Developer",
            imgUrl: foodOffImg,
            timeframe: "Jan 2022 - May 2022",
            projDesc: "Worked within an Agile Development team of developers and designers to create a mobile application to help eliminate 'choice paralysis' for individuals choosing where to eat. The goal of the app was to help make the decision for you.",
            tasks: ["Developed a full-stack application using the MERN (MongoDB, Express.js, React, Node.js) stack to simplify dining decisions, incorporating intuitive navigation and user - friendly interfaces.",
                    "Implemented main UI elements and interfaces designed in Figma using React Native and CSS.",
                    "Utilized React props and navigation techniques to connect 5+ screens and facilitate smooth data flow."
                ],
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
                        <p>Below are my latest projects!</p>
                        <p>Click on each for an overview! Learn more about each project in the descriptions tab!</p>
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
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectDescription key={index} projTitle={project.projTitle} timeframe={project.timeframe} tasks={project.tasks} />
                                                )
                                            })
                                        }
                                    </Row>
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