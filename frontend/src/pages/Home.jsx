import { useEffect, useState } from "react";

export default function Home() {
  const words = [
    "Full Stack Developer",
    "React Developer",
    "Node.js Specialist",
    "UI/UX Engineer"
  ];
  
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typewriter effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 700);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section id="home" className="hero premium-hero reveal">

      {/* Premium particle layer */}
      <div className="premium-particles"></div>

      {/* Premium gradient glow */}
      <div className="premium-glow"></div>

      <div className="hero-content">
        <h1 className="premium-title">
          Hello, I’m <span>Monujaan</span>
        </h1>

        <h2 className="premium-typewriter">
          {words[index].substring(0, subIndex)}
          <span className="cursor">|</span>
        </h2>

        <p className="premium-desc">
          I create clean, scalable, and high-performance web applications.
          My focus is on blending elegant UI design with powerful functionality.
          Every project is crafted with attention to detail, speed, and user experience.
          I build digital experiences that feel smooth, modern, and intuitive.
        </p>

        <a href="#projects" className="premium-btn">
          Explore My Work
        </a>
      </div>
    </section>
  );
}
