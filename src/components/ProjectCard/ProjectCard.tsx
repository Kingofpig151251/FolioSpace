import { useEffect, useState } from 'react';
import { Link, Project } from '../../types/project';
import './ProjectCard.css';

const formatStarCount = (count: number): string => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
};

const ProjectCard = ({ project }: { project: Project }) => {
  const isReverse = project.layout === 'reverse';
  const [star, setStar] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (!project) {
      return;
    }
    const githubRepo = project.links.find(
      (link) => link.type === 'code' && link.githubRepo,
    )?.githubRepo;
    if (!githubRepo) {
      return;
    }
    fetch(`https://api.github.com/repos/${githubRepo}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setStar(data.stargazers_count);
        });
      }
    });
  }, [project]);

  const InfoSection = () => (
    <div className="project-info">
      <h2 className="cursor-target">{project.title}</h2>
      <p className="project-description">{project.description}</p>
      <div className="project-tech">
        {project.tech.map((tech: string, index: number) => (
          <span key={index} className="tech-tag cursor-target">
            {tech}
          </span>
        ))}
      </div>
      <div className="project-links">
        {project.links.map((link: Link, index: number) => {
          return (
            <a
              key={index}
              href={link.url}
              className={`project-link cursor-target ${link.type === 'demo' ? '' : 'secondary'}`}
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
              {star && link.type === 'code' && (
                <span className="star-count">
                  <i className="fas fa-star"></i>
                  {formatStarCount(star)}
                </span>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );

  const PreviewSection = () => (
    <div className="project-preview cursor-target">
      <img
        className="project-image"
        src={project.preview}
        alt={project.title}
      />
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
