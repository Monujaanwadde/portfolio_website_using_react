import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Gallery from "./pages/Gallery";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {

  // Scroll Reveal Animation
  useEffect(() => {
    const sections = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach(section => observer.observe(section));
  }, []);

  return (
    <div>
      <Navbar />

      <main>
        <Home />
        <About />
        <Services />
        <Skills />
        <Gallery />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
