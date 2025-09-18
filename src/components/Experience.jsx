import { Row, Container } from "react-bootstrap";
import { useState } from "react";
import { timelineData } from './TimelineData';
import "./Timeline.css";
import "./Experience.css";

export const Experience = () => {
    const [selected, setSelected] = useState(null);

    const handleClick = (event) => {
        setSelected(event === selected ? null : event);
    };
    return (
        <div className="experience-section" id="experience">
            <Container className="experience-container">
                <div className="experience-header">Experience / Education</div>
                <Row>
                  <div className="timeline">
                    <div className="timeline-line"></div>
                      {timelineData.map((event, index) => (
                        <div key={index} className={`timeline-item ${selected === event ? "active" : ""}`}
                          onClick={() => handleClick(event)}
                        >
                        <div className="timeline-dot"></div>
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
                {selected && (
                  <div className="timeline-detail-card">
                    <span className="location">{selected.location}</span>
                    <br></br>
                    {selected.description && (
                      <ul className="timeline-description">
                        {selected.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}
                    <button
                      className="btn-gradient"
                      onClick={() => setSelected(null)}
                    >
                      Return
                    </button>
                  </div>
                )}
            </Container>
        </div>
    )
}