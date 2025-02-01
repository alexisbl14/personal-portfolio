import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon from '../assets/img/nav-icon1.svg'


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/alexis-lydon-477498223"><img src={navIcon}/></a>
                        </div>
                        <p>Copyright 2025. All Rights Reserved. Made with 💜.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}