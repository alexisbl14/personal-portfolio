import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/purple-cat.png";

function Banner() {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    // strings to rotate through
    const toRotate = ["Web Developer", "Software Developer", "App Developer", "Gym Enthusiast", "Animal Lover", "Problem Solver"];
    // variable to set the text
    const [text, setText] = useState('');
    // time between new letters
    const [delta, setDelta] = useState(100)
    // time between new words added or subtracted
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text]);

    const tick = () => {
        // set index to current text in list
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        // create new text based on if it is deleting (subtract letter off end) or not (add letter to end)
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        // set Text
        setText(updatedText);
        // control whether to delete or not and how fast to delete text
        if (isDeleting) {
            setDelta(50)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(125);
        }
    }

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
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Alexis - `}<span className="txt-rotate-wrap">{text}</span></h1>
                        <p>Hey, I'm Alexis! I'm a UC Davis Computer Science grad who loves building intuitive web and mobile experiences. Whether it’s crafting sleek UIs in React or tackling backend logic, I enjoy turning ideas into reality. I thrive in collaborative teams, love learning new tech, and am always up for a challenge—especially if it means creating something awesome!</p>
                        <Row className="align-items-center">
                            <Col md="auto">
                                <a href="https://www.linkedin.com/in/alexis-lydon-477498223/">Let's Connect<ArrowRightCircle size={25} /></a>
                            </Col>
                            <Col>
                                <button onClick={downloadResume}>Resume</button>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;