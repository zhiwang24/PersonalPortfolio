import { useEffect, useRef } from "react";

export const DottedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions to match the viewport and document height
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
    };

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#888"; // Dot color (light gray)

      const dotRadius = 1; // Radius of each dot
      const dotSpacing = 40; // Distance between dots

      for (let x = dotSpacing; x < canvas.width; x += dotSpacing) {
        for (let y = dotSpacing; y < canvas.height; y += dotSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    setCanvasSize();
    drawDots(); // Draw initial dots

    const handleResize = () => {
      setCanvasSize();
      drawDots();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        zIndex: -999,
        display: "block",
        backgroundColor: "#000000",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    ></canvas>
  );
}

