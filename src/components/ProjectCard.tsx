import { useState } from "react";
import { Col } from "react-bootstrap";

type ProjectCardProps = {
    projTitle: string,
    role: string,
    imgUrl: string
    timeframe: string,
    projDesc: string,
    tasks: string[],
    skills: string[],
    link: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ projTitle, role, imgUrl, timeframe, projDesc, skills, link }) => {

    const [descriptionVisible, setDescriptionVisible] = useState(false);
    return (
        <Col size={12} sm={6} md={4}>
            <div>
                <div className="proj-imgbx" onClick={() => setDescriptionVisible(!descriptionVisible)}>
                    <img src={imgUrl} />
                    <div className="proj-txt">
                        <h3>{projTitle}</h3>
                        <span>{role}</span>
                    </div>
                </div>
                {descriptionVisible ?
                    <div className="desc-txt">
                        <h3>{projTitle}</h3>
                        <text><em>{timeframe}</em></text>
                        <br></br>
                        <text>{projDesc}</text>
                        <h4>Skills Developed/Tools Used</h4>
                        <div className="proj-skills-list">
                            {skills.map((skill, index) => (
                                <span key={index} className="proj-skill-item">{skill} </span>
                            ))}
                        </div>
                        <a href={link}>Link to Project</a>
                    </div>
                    :
                    <></>}
            </div>


        </Col>
    )
};