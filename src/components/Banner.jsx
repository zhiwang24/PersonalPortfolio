import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FaceWithEyes from "./CursorTracking"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Fullstack Developer", "Backend Developer", "Frontend Developer", "Researcher"];
    const [text, setText] = useState('');
    const [speed, setSpeed] = useState(200);


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, speed)
        return () => {
            clearInterval(ticker);
        };
    },)

    const tick  = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0,text.length + 1);
        setText(updateText);

    
        if (!isDeleting && updateText === fullText) {
          setIsDeleting(true);
          setSpeed(200);
        } else if (isDeleting && updateText === '') {
          setIsDeleting(false);
          setSpeed(200);
          setLoopNum(loopNum + 1);
        }
    }

    
    return (
        <section className="banner" id="home">
            <Container className="bannerContainer">
                <div className="banner-rowbox">
                    <div className="banner-wordbox">
                        <span className="banner-wordbox greating">{"Hello "}</span>
                        <span className="banner-wordbox name">I'm Zhi Wang<br/></span>
                        <span className="banner-wordbox roles">
                          {"I'm a "}<span className="banner-wordbox roles text">{text}</span>
                        </span> 
                        <p className="banner-major-school">B.S. in Computer Science @ Georgia Tech</p>
                        <span className="banner-button-container">
                          <a href="https://www.linkedin.com/in/zhiwang24/"><button>Let's Connect!</button></a>
                          <button onClick={() => console.log('connect')}>View Resume!</button>
                        </span>
                    </div>
                    <FaceWithEyes></FaceWithEyes>
                </div>
            </Container>
        </section>
    )
}