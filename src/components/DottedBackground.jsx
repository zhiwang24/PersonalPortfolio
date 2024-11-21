import { useEffect, useRef } from "react";

export const DottedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
    };

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgb(219, 207, 255)";

      const dotRadius = 1;
      const dotSpacing = 35;

      for (let x = dotSpacing; x < canvas.width; x += dotSpacing) {
        for (let y = dotSpacing; y < canvas.height; y += dotSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    setCanvasSize();
    drawDots();

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
        backgroundColor: "black",
        top: '0rem',
        left: '-.25rem',
        width: "100%",
        height: "100%",
      }}
      
    ></canvas>
  );
}

