import { Container, Nav, Navbar } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from '../assets/img/logo.svg';
import navIcon from '../assets/img/nav-icon1.svg'


function NavBar() {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    // detect if user scrolled and define what happens if they do
    useEffect(() => {
        // function defining what happens if scroll occurs
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        // listens whenever user scrolls
        window.addEventListener("scroll", onScroll);

        // remove event listender
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    // function for updating active link
    const onUpdateActiveLink = (value: string) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <h1>Alexis Lydon</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}>Education</Nav.Link>
                        <Nav.Link href="#hobbies" className={activeLink === 'hobbies' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('hobbies')}>Hobbies</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/alexis-lydon-477498223"><img src={navIcon} alt="LinkedIn" /></a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;