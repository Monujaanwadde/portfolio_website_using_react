import { useEffect, useRef } from "react";

export default function Achievements() {
  const counters = [
    { icon: "🏆", label: "Projects Completed", value: 50 },
    { icon: "😊", label: "Happy Clients", value: 20 },
    { icon: "⚡", label: "Hackathons Won", value: 5 },
    { icon: "🛠️", label: "Years Experience", value: 3 },
  ];

  const refs = useRef([]);
  const barRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) animateCounters();
      },
      { threshold: 0.3 }
    );

    refs.current.forEach(ref => observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    refs.current.forEach((counter, index) => {
      let start = 0;
      const end = counters[index].value;
      const speed = Math.ceil(end / 50);

      const updateCounter = () => {
        start += speed;
        if (start >= end) {
          counter.innerText = end + "+";
        } else {
          counter.innerText = start + "+";
          requestAnimationFrame(updateCounter);
        }
      };

      updateCounter();

      /* Animate progress bar */
      barRefs.current[index].style.width = end + "%";
    });
  };

  return (
    <section id="achievements" className="section reveal">

      {/* SECTION HEADER */}
      <div className="section-header">
        <h2 className="section-title">Achievements</h2>
        <div className="section-subtitle">_ milestones _</div>
      </div>

      <div className="counter-grid">
        {counters.map((c, i) => (
          <div key={i} className="counter-box">
            <div className="icon">{c.icon}</div>

            <h3 ref={(el) => (refs.current[i] = el)}>0+</h3>

            <p>{c.label}</p>

            {/* Progress bar */}
            <div className="count-bar">
              <div
                ref={(el) => (barRefs.current[i] = el)}
                className="bar-fill"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
