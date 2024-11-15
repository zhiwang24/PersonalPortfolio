import { Row, Col, Container } from "react-bootstrap";
import { timelineData } from './TimelineData';
import "./Timeline.css"

export const Experience = () => {

    return (
        <div className="experience-section" id="experience">
            <hr></hr>
            <Container className="experience-container">
                <div className="experience-header">Experience / Education</div>
                <Row className="myExperience">
                  <div className="timeline">
                    <div className="timeline-line"></div>
                      {timelineData.map((event, index) => (
                        <div key={index} className="timeline-item">
                        <div className={`timeline-dot ${event.color}`}
                        ></div>
                        <div className="timeline-content">
                            <p className="date">{event.date}</p>
                            <span className="title">{event.title}</span>
                            <span className="action">{event.action}
                                <span className="description">{event.description}</span>
                                <span className="location">{event.location}</span>
                                <span className="role">{event.role}</span>
                            </span>
                        </div>
                        </div>
                    ))}
                  </div>
                </Row>
            </Container>
        </div>
    )
}