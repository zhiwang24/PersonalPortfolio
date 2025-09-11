import { useEffect, useRef } from "react";

export const DottedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = document.body.scrollHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${document.body.scrollHeight}px`;
      ctx.scale(dpr, dpr);
    };
    

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(219, 207, 255, .5)";

      const dotRadius = 1;
      const verticalDotSpacing = Math.floor(35);
      const horizontalDotSpacing = Math.floor(35);

      for (let x = horizontalDotSpacing; x < canvas.width; x += horizontalDotSpacing) {
        for (let y = verticalDotSpacing; y < canvas.height; y += verticalDotSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    setCanvasSize();
    drawDots();

    const handleResize = debounce(() => {
      setCanvasSize();
      drawDots();
    }, 100);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function debounce(func, wait) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        zIndex: -999,
        display: "block",
        backgroundColor: "black",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    ></canvas>
  );
};
