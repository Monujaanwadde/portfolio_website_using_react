import { useState } from "react";

export default function About() {
  const [tab, setTab] = useState("experience");

  return (
    <section id="about" className="section reveal about-section">

      {/* NEW GLOBAL HEADER */}
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <div className="section-subtitle">_ who i am _</div>
      </div>

      <div className="about-container">
        
        <div className="about-left">
          <img
            src="https://picsum.photos/600/700"
            alt="profile"
            className="about-img"
          />
        </div>

        <div className="about-right">
          <h3 className="about-heading">
            I'm <span className="highlight">Monujaan Wadde</span>, a Developer and a{" "}
            <span className="highlight">Creative Coder</span>
          </h3>

          <p className="about-text">
            I’m a computer science enthusiast with a passion for building modern web
            applications, exploring ethical hacking, and experimenting with IoT
            systems.
          </p>

          <p className="about-text">
            I completed my schooling from <strong>Ramakrishna Mission Vivekananda Vidyapeeth, Narayanpur</strong>.
            Later I completed <strong>B.Sc. in Computer Science</strong> at
            <strong> Ramakrishna Mission Vidyamandira, Belur Math</strong>.
          </p>

          <p className="about-text">
            Currently in <strong>M.Sc. Computer Science</strong> at 
            <strong> RKM Residential College, Narendrapur</strong>.
          </p>

          {/* TABS */}
          <div className="about-tabs">
            <button
              onClick={() => setTab("experience")}
              className={tab === "experience" ? "active" : ""}
            >
              Experience
            </button>

            <button
              onClick={() => setTab("education")}
              className={tab === "education" ? "active" : ""}
            >
              Education
            </button>
          </div>

          {/* TIMELINE */}
          <div className="timeline">
            {tab === "experience" ? (
              <>
                <div className="timeline-item">
                  <div className="dot"></div>
                  <div>
                    <h4 className="timeline-year">2023 – 2025</h4>
                    <h3 className="timeline-title">Web Development Projects</h3>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="dot"></div>
                  <div>
                    <h4 className="timeline-year">2023 – 2025</h4>
                    <h3 className="timeline-title">Ethical Hacking Research</h3>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="timeline-item">
                  <div className="dot"></div>
                  <div>
                    <h4 className="timeline-year">2021 – 2024</h4>
                    <h3 className="timeline-title">B.Sc. Computer Science</h3>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="dot"></div>
                  <div>
                    <h4 className="timeline-year">2024 – Present</h4>
                    <h3 className="timeline-title">M.Sc. Computer Science</h3>
                  </div>
                </div>
              </>
            )}
          </div>

          <a href="/cv.pdf" download className="cv-btn">Download CV</a>
        </div>
      </div>
    </section>
  );
}
