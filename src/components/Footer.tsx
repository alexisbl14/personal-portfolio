import { Col, Container, Row } from "react-bootstrap";
import navIcon from '../assets/img/nav-icon1.svg'


export const Footer = () => {

    const downloadResume = () => {
        const resumeUrl = "AlexisLydonResume.pdf";
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "AlexisLydonResume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <h1>Alexis Lydon</h1>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <Row className="align-items-center justify-content-end">
                            <Col md="auto">
                                <button onClick={downloadResume}>Resume</button>
                            </Col>
                            <Col md="auto">
                                <div className="social-icon">
                                    <a href="https://www.linkedin.com/in/alexis-lydon-477498223"><img src={navIcon} /></a>
                                </div>
                            </Col>
                        </Row>
                        <p>Copyright 2025. All Rights Reserved. Made with 💜.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}