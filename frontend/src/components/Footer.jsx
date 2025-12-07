import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <p className="footer-text">
        © {new Date().getFullYear()} 
        <span className="brand"> Monujaan</span> — Built with React ⚡ Vite ⚡ Node
      </p>

      <div className="footer-icons">
        <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="mailto:youremail@gmail.com">
          <FaEnvelope className="icon" />
        </a>
      </div>

    </footer>
  );
}
