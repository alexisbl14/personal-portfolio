import { Col, Container, Row } from "react-bootstrap";

type ExperienceCardProps = {
    company: string,
    companyLogo: string,
    title: string,
    timeframe: string,
    companyDesc: string,
    duties: string[],
    link: string
}


export const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, companyLogo, title, timeframe, companyDesc, duties, link }) => {
    return(
        <Container>
            <Row>
                <Col md="auto">
                    <a href={link}><img src={companyLogo} /></a>
                </Col>
                <Col>
                    <h2>{title}</h2>
                    <a href={link}><h3>{company}</h3></a>
                    <text>{timeframe}</text>
                    <p>{companyDesc}</p>
                    <ul>
                        {
                            duties.map((duty, index) => {
                                return (
                                    <li key={index}>{duty}</li>
                                )
                            })
                        }
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}