import { Col } from "react-bootstrap";

type ProjectCardProps = {
    title: string,
    description: string,
    imgUrl: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imgUrl}) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl}/>
                <div className="proj-txt">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
};