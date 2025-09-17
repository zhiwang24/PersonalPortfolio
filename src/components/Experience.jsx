import { Row, Container } from "react-bootstrap";
import { use3DTilt } from './3dTilt';
import { timelineData } from './TimelineData';
import "./Timeline.css";
import "./Experience.css";

export const Experience = () => {
    const myExperience = use3DTilt({ maxTilt: 12 });

    return (
        <div className="experience-section" id="experience">
            <hr></hr>
            <Container className="experience-container">
                <div className="experience-header">Experience / Education</div>
                <Row className={myExperience}>
                  <div className="timeline">
                    <div className="timeline-line"></div>
                      {timelineData.map((event, index) => (
                        <div key={index} className="timeline-item">
                        <div className={`timeline-dot ${event.color}`}
                        ></div>
                        <div className="timeline-content">
                            <p className="date">{event.date}</p>
                            <div className="timeline-subcontent"></div>
                            <span className="action">{event.action}
                            <span className="location">{event.location}</span>
                            <span className="role">{event.role}</span></span>
                        </div>
                        </div>
                    ))}
                  </div>
                </Row>
            </Container>
        </div>
    )
}