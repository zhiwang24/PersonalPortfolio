import React, { useState, useEffect, useRef } from "react";
import faceImage from "../assets/image/bannerimage.png";
import "./CursorTracking.css";

const FaceWithEyes = () => {
    const faceRef = useRef(null);
    const leftEyeRef = useRef(null);
    const rightEyeRef = useRef(null);
  
    const [rotation, setRotation] = useState(0);
    const maxTilt = 5;
    const maxEyeMovement = 5; 
  
    const handleMouseMove = (event) => {
      const face = faceRef.current;
      const leftEye = leftEyeRef.current;
      const rightEye = rightEyeRef.current;
  
      if (face && leftEye && rightEye) {
        const faceRect = face.getBoundingClientRect();
        const faceCenterX = faceRect.left + faceRect.width / 2;
        const faceCenterY = faceRect.top + faceRect.height / 2;
  
        const deltaX = event.clientX - faceCenterX;
        const deltaY = event.clientY - faceCenterY;
  
        let tiltAngle = 0;
  
        if (deltaX < 0) {
          tiltAngle = deltaY > 0 ? -maxTilt : maxTilt;
        } else {
          tiltAngle = deltaY > 0 ? maxTilt : -maxTilt;
        }
  
        setRotation(tiltAngle);
  
        const moveEyes = (eye) => {
          const eyeRect = eye.getBoundingClientRect();
          const eyeCenterX = eyeRect.left + eyeRect.width / 2;
          const eyeCenterY = eyeRect.top + eyeRect.height / 2;
  
          const angleX = (event.clientX - eyeCenterX) / 20;
          const angleY = (event.clientY - eyeCenterY) / 20;
  
          const clampedX = Math.max(-maxEyeMovement, Math.min(maxEyeMovement, angleX));
          const clampedY = Math.max(-maxEyeMovement, Math.min(maxEyeMovement, angleY));
  
          eye.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
        };
  
        moveEyes(leftEye);
        moveEyes(rightEye);
      }
    };
  
    useEffect(() => {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
  
    return (
      <div
        className="face-container"
        ref={faceRef}
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: "transform .5s ease-out",
        }}
      >
        <img src={faceImage} alt="Face" className="face-image" />
        <div className="eye left-eye" ref={leftEyeRef}></div>
        <div className="eye right-eye" ref={rightEyeRef}></div>
      </div>
    );
  };
  
  export default FaceWithEyes;