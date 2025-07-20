import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const isReverse = project.layout === 'reverse';

  const InfoSection = () => (
    <div className="project-info">
      <h2>
        <i className={project.icon}></i> {project.title}
      </h2>
      <p className="project-description">{project.description}</p>
      <div className="project-tech">
        {project.tech.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
      <div className="project-links">
        {project.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className={`project-link ${link.type === 'demo' ? '' : 'secondary'}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className={
                link.type === 'demo'
                  ? 'fas fa-external-link-alt'
                  : 'fab fa-github'
              }
            ></i>
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );

  const PreviewSection = () => (
    <div className="project-preview">
      <div className="project-image">
        <i className={project.icon}></i>
      </div>
      <div
        className={`project-status ${project.status === 'completed' ? 'status-completed' : 'status-progress'}`}
      >
        {project.status === 'completed' ? '已完成' : '开发中'}
      </div>
    </div>
  );

  return (
    <div className="project-card">
      {isReverse ? (
        <>
          <PreviewSection />
          <InfoSection />
        </>
      ) : (
        <>
          <InfoSection />
          <PreviewSection />
        </>
      )}
    </div>
  );
};

export default ProjectCard;
