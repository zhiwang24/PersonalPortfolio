import React from 'react';
import { Container } from "react-bootstrap";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import resumePdf from "../assets/ZhiWangResume.pdf";

export const ResumeSection = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div className="resume-section" id="resume">
            <hr></hr>
            <Container className="resume-container">
                <div className="resume-header">Resume</div>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                <div style={{ width: '100%', maxWidth: 900, borderRadius: 20, overflow: 'hidden'}}>
                <Worker workerUrl="/pdf.worker.min.js">
                    <Viewer fileUrl={resumePdf} plugins={[defaultLayoutPluginInstance]} />
                </Worker>
                </div>
                </div>
            </Container>
        </div>
    );
};