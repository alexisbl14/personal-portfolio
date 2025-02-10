import { Container } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";


function Skills() {

    const technicalSkillList = ["JavaScript", "TypeScript", "Python", "C++", "HTML", "CSS", "SQL", "Excel", "Kotlin", "Dart"];

    const frameworksList = ["React", "React Native", "MongoDB", "Figma", "Jira", "GitHub", "MySQL", "Tailwind CSS", "Flutter"];

    const softSkillList = ["Teamwork", "Communication", "Agile Development", "Collaboration", "Team Player", "Accountability",
        "Problem Solving", "Adaptability", "Time Management", "Critical Thinking", "Eager to Learn"];

    return (
        <section className="skill" id="skills">
            <Container>
                <div className="skill-bx">
                    <h2>Skills</h2>
                    <p>Here's a list of my technical and soft skills!</p>
                    <h3>Programming Languages</h3>
                    <div className="skill-list mb-5">
                        {technicalSkillList.map((skill, index) => (
                            <span key={index} className="skill-item">{skill}</span>
                        ))}
                    </div>
                    <h3>Frameworks and Tools</h3>
                    <div className="skill-list mb-5">
                        {frameworksList.map((skill, index) => (
                            <span key={index} className="skill-item">{skill}</span>
                        ))}
                    </div>
                    <h3>Soft Skills</h3>
                    <div className="skill-list">
                        {softSkillList.map((skill, index) => (
                            <span key={index} className="skill-item">{skill}</span>
                        ))}
                    </div>
                </div>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    );
}

export default Skills;