export default function Services() {
  const SERVICES = [
    {
      title: "Frontend Development",
      desc: "I build modern, responsive, and visually appealing user interfaces using React, Vite, JavaScript, and advanced UI/UX practices.",
      icon: "🎨",
      btn: "Learn More"
    },
    {
      title: "Backend Development",
      desc: "I develop secure and scalable backend systems using Node.js, Express, MongoDB, APIs, authentication, and server-side logic.",
      icon: "🖥️",
      btn: "Learn More"
    },
    {
      title: "Ethical Hacking & Security Testing",
      desc: "I perform penetration testing, vulnerability assessment, phishing simulation, and security research on Android & Windows.",
      icon: "🛡️",
      btn: "Learn More"
    },
    {
      title: "IoT Project Development",
      desc: "I build real-world IoT systems using Arduino, ESP-32, Raspberry Pi, sensors, automation, and cloud-based monitoring solutions.",
      icon: "📡",
      btn: "View Projects"
    }
  ];

  return (
    <section id="services" className="section reveal">
      <h2 className="services-title">My Services</h2>
      <div className="services-subtitle">_ what i provide _</div>

      {/* GRID WRAPPER — REQUIRED */}
      <div className="services-grid">
        {SERVICES.map((item, i) => (
          <div className="service-card" key={i}>
            <div className="service-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <a className="service-btn">{item.btn}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
