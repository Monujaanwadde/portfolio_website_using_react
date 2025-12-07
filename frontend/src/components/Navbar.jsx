import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`nav ${open ? "nav-open" : ""}`}>
      <h2 className="logo glow-logo">Monujaan</h2>

      {/* Hamburger */}
      <button className="hamburger" onClick={() => setOpen(!open)}>
        <span className={open ? "bar rotate1" : "bar"}></span>
        <span className={open ? "bar hide" : "bar"}></span>
        <span className={open ? "bar rotate2" : "bar"}></span>
      </button>

      {/* Links */}
      <div className={`nav-links ${open ? "open" : ""}`}>
        {[
          "home",
          "about",
          "services",
          "skills",
          "gallery",
          "projects",
          "achievements",
          "certifications",
          "contact"
        ].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setOpen(false)}
            className="nav-item"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}
