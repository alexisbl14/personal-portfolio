import { Container } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";


function Skills () {

    const skillList = ["React", "React Native", "JavaScript", "TypeScript", "Python", "C++", 
        "HTML", "CSS", "Kotlin", "MongoDB", "Figma", "Jira", "GitHub", "Agile Development", "Collaboration", 
        "Team Player"]

    return(
        <section className="skill" id="skills">
            <Container>
                <div className="skill-bx">
                    <h2>Skills</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="skill-list">
                        {skillList.map((skill, index) => (
                            <span key={index} className="skill-item">{skill}</span>
                        ))}
                    </div>
                </div>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
    );
}

export default Skills;