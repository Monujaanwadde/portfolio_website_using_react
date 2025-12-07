import { useEffect, useRef } from "react";

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      desc: "Semantic markup, accessibility, and modern HTML5 features",
      level: 90,
      icon: "https://img.icons8.com/color/96/html-5.png"
    },
    {
      name: "CSS",
      desc: "Responsive design, animations, and modern CSS3 features",
      level: 85,
      icon: "https://img.icons8.com/color/96/css3.png"
    },
    {
      name: "JavaScript",
      desc: "ES6+, DOM manipulation, and asynchronous programming",
      level: 75,
      icon: "https://img.icons8.com/color/96/javascript.png"
    },
    {
      name: "React",
      desc: "Component-based architecture and state management",
      level: 70,
      icon: "https://img.icons8.com/color/96/react-native.png"
    }
  ];

  const barsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => entry.isIntersecting && animateBars());
      },
      { threshold: 0.3 }
    );

    barsRef.current.forEach(bar => observer.observe(bar));
    return () => observer.disconnect();
  }, []);

  const animateBars = () => {
    barsRef.current.forEach((bar, index) => {
      const target = skills[index].level;
      bar.style.width = target + "%";

      let start = 0;
      const animatePercent = () => {
        start++;
        if (start <= target) {
          bar.parentElement.parentElement.querySelector(".percent").innerText =
            start + "%";
          requestAnimationFrame(animatePercent);
        }
      };
      animatePercent();
    });
  };

  return (
    <section id="skills" className="section reveal">
      <div className="section-header">
        <h2 className="section-title">My Skills</h2>
        <div className="section-subtitle">_ what i know _</div>
      </div>

      <div className="skills-card-grid">
        {skills.map((skill, i) => (
          <div className="skill-box" key={i}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />

            <h3 className="skill-title">{skill.name}</h3>
            <p className="skill-desc">{skill.desc}</p>

            <div className="skill-progress-label">
              <span>Proficiency</span>
              <span className="percent">0%</span>
            </div>

            <div className="progress-wrapper">
              <div
                className="progress-fill"
                ref={(el) => (barsRef.current[i] = el)}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
