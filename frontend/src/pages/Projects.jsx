import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {

  const CATEGORIES = ["All", "Design", "Development", "Security"];

  // ⭐ Example Large Dataset
  const PROJECTS = [
    {
      title: "Electronic Device Control using ESP-32",
      desc: "A home automation system using ESP-32 and Android app.",
      img: "https://picsum.photos/900/600?1",
      category: "Development",
      link: "https://github.com/your-project"
    },
    {
      title: "Portfolio Website",
      desc: "Modern portfolio built with React + Vite.",
      img: "https://picsum.photos/900/600?2",
      category: "Design",
      link: "https://yourportfolio.com"
    },
    {
      title: "Cyber Security Toolkit",
      desc: "Pen-testing toolkit for exploit & scanning research.",
      img: "https://picsum.photos/900/600?3",
      category: "Security",
      link: "https://github.com/security-toolkit"
    },
    {
      title: "E-Commerce UI",
      desc: "Responsive frontend shopping experience.",
      img: "https://picsum.photos/900/600?4",
      category: "Design",
      link: "https://github.com/ecommerce-ui"
    },
  {
    title: "Penetration Testing & Vulnerability Analysis",
    desc: "Security assessment including exploit testing, scanning, and risk analysis.",
    img: "https://picsum.photos/900/600?10",
    category: "Security",
    link: "https://github.com/your-penetration-testing"
  },
  {
    title: "Embedded Systems & Sensor Integration",
    desc: "Microcontroller projects using ESP32, Arduino, IoT sensors, and automation.",
    img: "https://picsum.photos/900/600?11",
    category: "Development",
    link: "https://github.com/embedded-systems"
  },
  {
    title: "Smart Home & Hardware Projects",
    desc: "IoT-based home automation including relays, sensors, and wireless control.",
    img: "https://picsum.photos/900/600?12",
    category: "Development",
    link: "https://github.com/smart-home-projects"
  },
  {
    title: "Database Design & Management",
    desc: "Structured database solutions with optimized queries and schema modeling.",
    img: "https://picsum.photos/900/600?13",
    category: "Development",
    link: "https://github.com/database-projects"
  },
  {
    title: "Cloud Integration & Deployment",
    desc: "Deploying apps to Firebase, AWS, and cloud CI/CD with real-time sync.",
    img: "https://picsum.photos/900/600?14",
    category: "Development",
    link: "https://github.com/cloud-integration"
  },
  {
    title: "Custom Software Development",
    desc: "Building tailored desktop, mobile, and web applications.",
    img: "https://picsum.photos/900/600?15",
    category: "Design",
    link: "https://github.com/custom-software"
  },
  {
    title: "Scripting & Workflow Automation",
    desc: "Python/bash automation scripts to simplify workflows and reduce manual tasks.",
    img: "https://picsum.photos/900/600?16",
    category: "Development",
    link: "https://github.com/workflow-automation"
  },
  {
    title: "Website Maintenance & Optimization",
    desc: "Frontend fixes, SEO optimization, and performance improvements.",
    img: "https://picsum.photos/900/600?17",
    category: "Design",
    link: "https://github.com/web-optimization"
  },
  {
    title: "Tech Support & Troubleshooting",
    desc: "Fixing network, software, hardware, and configuration issues.",
    img: "https://picsum.photos/900/600?18",
    category: "Security",
    link: "https://github.com/tech-support"
  }

  ];

  const [active, setActive] = useState("All");
  const [modalData, setModalData] = useState(null);
  const [visible, setVisible] = useState(9);   // Show 9 projects initially

  // Filter category
  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  // Reset visible count when category changes
  useEffect(() => {
    setVisible(9);
  }, [active]);


  return (
    <>
      <section id="projects" className="section reveal">

        {/* HEADER */}
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <div className="section-subtitle">_ what I built _</div>
        </div>

        {/* FILTER BUTTONS */}
        <div className="project-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={active === cat ? "filter-btn active" : "filter-btn"}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECT GRID WITH LOAD MORE */}
        <motion.div layout className="projects-showcase">
          <AnimatePresence>
            {filtered.slice(0, visible).map((p) => (
              <motion.div
                key={p.title}
                className="project-card-v2"
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.35 }}
                onClick={() => setModalData(p)}
              >
                <img src={p.img} className="project-img" alt="" />
                <div className="project-overlay">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <button className="project-btn-view">View Project</button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* LOAD MORE BUTTON */}
        {visible < filtered.length && (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              className="load-more-btn"
              onClick={() => setVisible(visible + 9)}
            >
              Load More
            </button>
          </div>
        )}

      </section>

      {/* MODAL */}
      <AnimatePresence>
        {modalData && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalData(null)}
          >
            <motion.div
              className="modal-box"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={modalData.img} className="modal-img" alt="" />

              <h2>{modalData.title}</h2>
              <p>{modalData.desc}</p>

              <div className="modal-actions">
                <a
                  href={modalData.link}
                  className="modal-open-btn modal-btn"
                  target="_blank"
                >
                  Open Project
                </a>
                <button
                  className="modal-close modal-btn"
                  onClick={() => setModalData(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
