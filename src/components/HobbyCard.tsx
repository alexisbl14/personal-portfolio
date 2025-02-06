import { Col } from "react-bootstrap";

type HobbyCardProps = {
    hobby: string,
    description: string
}

export const HobbyCard: React.FC<HobbyCardProps> = ({hobby, description}) => {
    return(
        <Col size={12} sm={6} md={4}>
            <div className="hobby-bx">
                <h4>{hobby}</h4>
                <text>{description}</text>
            </div>
        </Col>
    );
};