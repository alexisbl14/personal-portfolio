import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/purple-cat.png";

function Banner() {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    // strings to rotate through
    const toRotate = ["Web Developer", "Software Engineer", "App Developer", "Gym Enthusiast", "Animal Lover"];
    // variable to set the text
    const [text, setText] = useState('');
    // time between new letters
    const [delta, setDelta] = useState(200 - Math.random() * 100)
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
            setDelta(100)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Alexis - `}<span className="txt-rotate-wrap">{text}</span></h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <a href="https://www.linkedin.com/in/alexis-lydon-477498223/">Let's Connect<ArrowRightCircle size={25} /></a>
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