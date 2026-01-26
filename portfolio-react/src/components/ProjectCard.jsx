function Tag({ children }) {
  return <span className="tag">{children}</span>
}

export default function ProjectCard({ project, onImageClick }) {
  const handleImageClick = () => {
    if (project.gallery && project.gallery.length > 0 && onImageClick) {
      onImageClick(project)
    }
  }

  return (
    <article className="card">
      <div 
        className={`card__media-wrapper ${project.gallery && project.gallery.length > 0 ? 'card__media-wrapper--clickable' : ''}`}
        onClick={handleImageClick}
        style={project.gallery && project.gallery.length > 0 ? { cursor: 'pointer' } : {}}
      >
        {project.video ? (
          <video className="card__media" src={project.video} alt="" loading="lazy" autoPlay loop muted playsInline />
        ) : (
          <img className="card__media" src={project.image} alt="" loading="lazy" />
        )}
        {project.gallery && project.gallery.length > 0 && (
          <div className="card__gallery-badge" title="Click to view gallery">
            {project.gallery.length} images
          </div>
        )}
      </div>
      <div className="card__body">
        <h3 className="h3">{project.title}</h3>
        <p className="muted">{project.description}</p>
        <div className="tags" aria-label="Project tags">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <div className="card__actions">
          <a className="btn btn--primary" href={project.links.demo} target="_blank" rel="noreferrer">
            Live demo
          </a>
          <a className="btn btn--ghost" href={project.links.code} target="_blank" rel="noreferrer">
            Source
          </a>
        </div>
      </div>
    </article>
  )
}
