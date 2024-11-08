import { Row, Col, Container } from "react-bootstrap";
import AboutMePic from "../assets/image/AboutMe.png";
import AboutMePic2 from "../assets/image/AboutMe2.png";
import AboutMePic3 from "../assets/image/AboutMe3.png";
export const AboutMe = () => {

    return (
        <div className="aboutme-section" id="about">
            <hr className="section-bar"></hr>
            <Container className="aboutme-container">{"About Me"}
            <Row className="aboutme-content-holder">
                <Col className="aboutme-imageholder">
                    <div className="aboutme-imageholder large-container">
                      <img className={"aboutMeImageMain"}  src = {AboutMePic} alt = "AboutMePicMain"/>
                    </div>
                    <div className="aboutme-imageholder side-container">
                        <img className="aboutMeImage2" src={AboutMePic2} alt = "AboutMePic2"/>
                        <img className="aboutMeImage3" src={AboutMePic3} alt = "AboutMePic3"/>
                    </div>
                </Col>
                <Col className="aboutMe-header description-container">
                    <div>
                    My name is Zhi, I am currently a computer science student at the Georgia Institute of Technology, driven by a passion for making technology accessible and efficient for everyone.<br/><br/>
                    Growing up in an environment where many struggled with complex interfaces has fueled my desire to simplify technology. 
                    I aim to leverage my skills and creativity to develop applications that connect with people on a meaningful level. 
                    I have experience in full-stack development and academic research, equipping me with a diverse skill set.<br/><br/>
                    Outside of my studies, I enjoy traveling, fishing, exploring fashion, and food! Feel free to check out my contacts linked below, and I hope you enjoy my page!<br/><br/>
                    </div>
                    <a href="https://www.linkedin.com/in/zhiwang24/"><button>Let's Connect!</button></a>
                </Col>
            </Row> 
        </Container>
        </div>
    )
}