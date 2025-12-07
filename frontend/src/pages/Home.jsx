import { useEffect, useState, useRef } from "react";

export default function Home() {
  const words = ["Full Stack Developer", "React Expert", "Cyber UI Architect", "Node.js Engineer"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  const canvasRef = useRef(null);

  // ⭐ TYPEWRITER EFFECT
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 600);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (reverse ? -1 : 1)),
      reverse ? 40 : 90
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // ⭐ PARTICLE ENGINE + BEAMS
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 70 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.6,
      speedY: (Math.random() - 0.5) * 0.6,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      // 🔥 NEON BEAMS
      for (let i = 0; i < 8; i++) {
        ctx.fillStyle = "rgba(0, 150, 255, 0.08)";
        ctx.fillRect((w / 8) * i + 40, 0, 4, h);
      }

      // ✨ PARTICLES
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > w) p.speedX *= -1;
        if (p.y < 0 || p.y > h) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 200, 255, 0.9)";
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#00eaff";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section id="home" className="hero reveal">

      {/* ⭐ Canvas Behind Everything */}
      <canvas ref={canvasRef} className="neon-canvas"></canvas>

      {/* 🧊 HUD Behind Name */}
      <div className="hud-container">
        <div className="hud-ring ring1"></div>
        <div className="hud-ring ring2"></div>
        <div className="hud-ring ring3"></div>
      </div>

      {/* ⭐ CONTENT */}
      <div className="hero-content">
        <h1 className="cyber-title">
          Hi, I'm <span>Your Name</span>
        </h1>

        <h2 className="typewriter">
          {words[index].substring(0, subIndex)}
          <span className="cursor">|</span>
        </h2>

        <p>Crafting highly futuristic digital experiences.</p>

        <a className="cta-btn glow-hover" href="#projects">
          Explore My Work
        </a>
      </div>
    </section>
  );
}
