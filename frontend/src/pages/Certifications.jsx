import { useEffect, useState } from "react";

export default function ThreeDCarousel() {
  const certs = [
    { title: "Google UX Design", img: "https://picsum.photos/600/400?1", link: "#" },
    { title: "React Developer", img: "https://picsum.photos/600/400?2", link: "#" },
    { title: "Node.js Backend", img: "https://picsum.photos/600/400?3", link: "#" },
    { title: "JavaScript Mastery", img: "https://picsum.photos/600/400?4", link: "#" }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % certs.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [certs.length]);

  return (
    <section className="threeD-section section reveal">
      <div className="section-header">
        <h2 className="section-title">Certifications</h2>
        <div className="section-subtitle">_ my achievements _</div>
      </div>

      <div className="carousel-3d">
        {certs.map((c, i) => {
          const position =
            i === index
              ? "center"
              : i === (index + 1) % certs.length
              ? "right"
              : i === (index - 1 + certs.length) % certs.length
              ? "left"
              : "hidden";

          return (
            <div key={i} className={`card3d ${position}`}>
              <img src={c.img} alt={c.title} />
              <h3>{c.title}</h3>

              {/* ⭐ SHOW BUTTON ONLY FOR CENTER CARD ⭐ */}
              {position === "center" && (
                <a href={c.link} target="_blank" rel="noopener noreferrer" className="cert-btn">
                  View Certificate
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
