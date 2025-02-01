import { Container, Row } from "react-bootstrap"
import colorSharp from "../assets/img/color-sharp.png";

export const Education = () => {
    const courseList = ["Object Oriented Programming", "Data Structures", "Computer Architecture",
        "Algorithm Design and Analysis", "Operating Systems", "Artificial Intelligence",
        "Machine Learning", "Android App Development", "Gameplay Programming"]
    return (
        <section className="education" id="education">
            <Container className="education-section">
                <div className="education-bx">
                    <h1>Education</h1>
                    <h2>University of California, Davis</h2>
                    <Row>
                        <text><em>2019 - 2023</em></text>
                        <text>Degree: Bachelor of Science in Computer Science</text>
                        <text>Minor: Psychology</text>
                    </Row>
                    <h3>Relevant Coursework</h3>
                    <div className="course-list">
                        {courseList.map((course, index) => (
                            <span key={index} className="course">{course}</span>
                        ))}
                    </div>
                    <h2>Technische Universität Berlin</h2>
                    <Row>
                        <text><em>Feb - July 2023</em></text>
                        <text>UCEAP Study Abroad Program</text>
                        <p>Studied German, and took classes in Cryptography and Brain Computer Interfacing</p>
                    </Row>
                </div>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
    );
};