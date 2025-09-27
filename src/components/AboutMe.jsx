import { Row, Container } from "react-bootstrap";
import { use3DTilt } from './3dTilt';
import AboutMePic from "../assets/image/AboutMe.png";
import AboutMePic2 from "../assets/image/AboutMe2.png";
import AboutMePic3 from "../assets/image/AboutMe3.png";
import AboutMePic4 from "../assets/image/AboutMe4.png";
import "./AboutMe.css"


export const AboutMe = () => {

    return (
        <div className="aboutme-section" id="about">
            <Container className="aboutme-container">
                <div className="aboutme-header">About Me
                </div>
                <Row className="aboutme-content-holder">
                  <div className="aboutme-imageholder">
                    <div className="aboutme-imageholder large-container">
                      <img className={"aboutMeImageMain"}  src = {AboutMePic} alt = "AboutMePicMain"/>
                      <img className="aboutMeImage4" src={AboutMePic4} alt = "AboutMePic4"/>
                    </div>
                    <div className="aboutme-imageholder side-container">
                        <img className="aboutMeImage2" src={AboutMePic2} alt = "AboutMePic2"/>
                        <img className="aboutMeImage3" src={AboutMePic3} alt = "AboutMePic3"/>
                    </div>
                </div>
                <div className="aboutMe-header description-container">
                  <div className="window-topbar">
                    <div className="window-items">
                        <div className="circle red"></div>
                        <div className="circle orange"></div>
                        <div className="circle green"></div>
                    </div>
                  </div>
                  <div className="aboutMe-header description">
                  Welcome to my page! My name is Zhi, I am a computer science student at Georgia Tech, focusing on creating intuitive and efficient solutions.<br></br><br></br>
                  Through a mix of research, internships, and projects, I’ve developed the skills to adapt to different requirements and unfamiliar territory, allowing me to create solutions to serve any customer.<br></br><br></br>
                  Feel free to check out my contacts linked below, and I hope you enjoy my page!
                  </div>
                </div>
                
                <a className="AboutMeConnectButton" href="https://www.linkedin.com/in/zhiwang24/"><button>Let's Connect!</button></a>
            </Row> 
        </Container>
        </div>
    )
}