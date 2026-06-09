"use client";

import React, { useEffect, useRef } from "react";

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Matrix characters (Katakana, English alphabets, numbers)
    const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const charArr = chars.split("");

    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize) + 1;
    let drops: number[] = Array(columns).fill(1);

    // Re-initialize columns on resize
    const handleResize = () => {
      resizeCanvas();
      columns = Math.floor(canvas.width / fontSize) + 1;
      drops = Array(columns).fill(1);
    };
    window.addEventListener("resize", handleResize);

    let animationFrameId: number;
    let lastTime = 0;
    
    // Control frame rate for slower speed (e.g., 22 frames per second)
    const fps = 22; 
    const interval = 1000 / fps;

    const draw = () => {
      // Semi-transparent black overlay to create the trailing/fading effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Pick a random character
        const text = charArr[Math.floor(Math.random() * charArr.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Visual design: occasionally draw white characters at the head of the drop
        if (Math.random() > 0.975) {
          ctx.fillStyle = "#ffffff";
        } else {
          ctx.fillStyle = "#00ff41"; // Matrix green
        }

        ctx.fillText(text, x, y);

        // Reset drop to the top with a random delay if it goes past the screen height
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move down the drop (controls speed increment per frame)
        drops[i]++;
      }
    };

    const tick = (time: number) => {
      animationFrameId = requestAnimationFrame(tick);
      const delta = time - lastTime;
      if (delta >= interval) {
        draw();
        lastTime = time - (delta % interval);
      }
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-50 pointer-events-none opacity-20 bg-black"
    />
  );
}
