import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FaceWithEyes from "./CursorTracking"
import Arrow from "../assets/image/arrow.png";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Developer", "Designer", "Researcher"];
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
        // Pause for 5 seconds before starting to delete
        setIsDeleting(true);
        setSpeed(10000); // Speed while deleting (normal typing speed)

        setTimeout(() => {
            // After 5 seconds, switch back to typing speed and start deleting
            setSpeed(150); // Normal speed for typing
        }, 1500); // 5-second pause
        } else if (isDeleting && updateText === '') {
          setIsDeleting(false);
          setSpeed(150);
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
                        <span className="banner-major-school">Computer Science B.S. @ Georgia Tech</span>
                        <span className="banner-button-container">
                          <a href="https://www.linkedin.com/in/zhiwang24/"><button>Let's Connect!</button></a>
                          <a href="https://drive.google.com/file/d/1MTc92zkwNnQ4qomojxjc2C3xhd2ybD-I/view?usp=sharing"><button>View Resume!</button></a>
                        </span>
                    </div>
                    <FaceWithEyes></FaceWithEyes>
                </div>
                <a className="arrow" href="#about"><img className="arrow" src ={Arrow} alt = "Down-Arrow">
                    </img></a>
            </Container>
        </section>
    )
}