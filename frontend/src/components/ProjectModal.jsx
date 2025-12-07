export default function ProjectModal({ data, close }) {
  return (
    <div className="modal-backdrop" onClick={close}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <img src={data.img} className="modal-img" />

        <h2>{data.title}</h2>
        <p>{data.desc}</p>

        <a href={data.link} className="modal-btn">Open Project</a>

        <button className="modal-close" onClick={close}>Close</button>
      </div>
    </div>
  );
}
