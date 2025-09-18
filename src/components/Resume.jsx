import React, { useEffect, useState } from 'react';
import { Container } from "react-bootstrap";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import resumePdf from "../assets/ZhiWangResume.pdf";
import Arrow from "../assets/image/arrow.png";
import "./Resume.css";

export const ResumeSection = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setIsReady(true);
    }, []);

    return (
        <div className="resume-section" id="resume">
            <Container className="resume-container">
                <div className="resume-header">Resume</div>
                <div className="pdf-viewer-container" style={{ width: '100%', maxWidth: 900, borderRadius: 20, overflow: 'hidden' }}>
                    {isReady && (
                        <Worker workerUrl="/pdf.worker.min.js">
                            <Viewer fileUrl={resumePdf} plugins={[defaultLayoutPluginInstance]} theme="dark" />
                        </Worker>
                    )}
                </div>
            </Container>
            <a className="up-arrow" href="#home"><img className="up-arrow" src ={Arrow} alt = "Down-Arrow">
                </img></a>
        </div>
    );
};