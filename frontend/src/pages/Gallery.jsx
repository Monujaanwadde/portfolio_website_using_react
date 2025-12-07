import { useEffect, useRef, useState } from "react";

export default function Gallery() {
  const images = [
    "https://picsum.photos/800/600?1",
    "https://picsum.photos/800/600?2",
    "https://picsum.photos/800/600?3",
    "https://picsum.photos/800/600?4",
    "https://picsum.photos/800/600?5",
  ];

  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % images.length), 3000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!sliderRef.current) return;
    sliderRef.current.style.transform = `translateX(-${index * 100}%)`;
  }, [index]);

  const next = () => setIndex(i => (i + 1) % images.length);
  const prev = () => setIndex(i => (i - 1 + images.length) % images.length);

  return (
    <section id="gallery" className="section reveal">

      <div className="section-header">
        <h2 className="section-title">Gallery</h2>
        <div className="section-subtitle">_ my photos _</div>
      </div>

      <div className="slider-container framed-slider">
        <div className="slider" ref={sliderRef}>
          {images.map((src, i) => (
            <div className="slide" key={i}>
              <div className="frame">
                <img src={src} alt={`gallery-${i}`} className="slide-img" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-buttons">
        <button onClick={prev} aria-label="Previous">⟨</button>
        <button onClick={next} aria-label="Next">⟩</button>
      </div>
    </section>
  );
}
