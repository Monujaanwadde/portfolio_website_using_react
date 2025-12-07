export default function ProjectCard({ title, desc, link }) {
    return (
        <article className="card">
            <h3>{title}</h3>
            <p>{desc}</p>
            {link && (
                <p style={{ marginTop: 12 }}>
                    <a href={link} target="_blank" rel="noreferrer">View project</a>
                </p>
            )}
        </article>
    );
}