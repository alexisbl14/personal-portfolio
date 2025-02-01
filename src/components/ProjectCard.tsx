import { Col } from "react-bootstrap";

type ProjectCardProps = {
    projTitle: string,
    role: string,
    imgUrl: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ projTitle, role, imgUrl}) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl}/>
                <div className="proj-txt">
                    <h4>{projTitle}</h4>
                    <span>{role}</span>
                </div>
            </div>
        </Col>
    )
};