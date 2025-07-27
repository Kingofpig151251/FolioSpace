import { useEffect, useState } from 'react';
import { GITHUB_TOKEN } from '../../constants/userConfig';
import { GitHubRepoInfo, Link, Project } from '../../types/project';
import './ProjectCard.css';

const formatCount = (count: number): string => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const ProjectCard = ({ project }: { project: Project }) => {
  const isReverse = project.layout === 'reverse';
  const [repoInfo, setRepoInfo] = useState<GitHubRepoInfo | null>(null);
  const [loading, setLoading] = useState(false);

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

    setLoading(true);
    fetch(`https://api.github.com/repos/${githubRepo}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(`GitHub API error: ${res.status}`);
        }
      })
      .then((data) => {
        setRepoInfo({
          stars: data.stargazers_count || 0,
          forks: data.forks_count || 0,
          issues: data.open_issues_count || 0,
          language: data.language || '',
          license: data.license?.name || null,
          createdAt: data.created_at,
          updatedAt: data.updated_at,
        });
      })
      .catch((error) => {
        console.error('Failed to fetch GitHub repo info:', error);
        setRepoInfo({
          stars: 0,
          forks: 0,
          issues: 0,
          language: '',
          license: null,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      })
      .finally(() => {
        setLoading(false);
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

      {/* GitHub Repository Stats */}
      {project.links.find(
        (link) => link.type === 'code' && link.githubRepo,
      ) && (
        <div className="github-stats">
          {loading ? (
            <div className="loading-stats">
              <i className="fas fa-spinner fa-spin"></i>
              <span>Loading repository info...</span>
            </div>
          ) : repoInfo ? (
            <>
              <div className="repo-meta">
                {repoInfo.language && (
                  <div className="meta-item cursor-target">
                    {/* <i className="fas fa-code"></i> */}
                    <span>{repoInfo.language}</span>
                  </div>
                )}
                <div className="meta-item cursor-target">
                  {/* <i className="fas fa-calendar-plus"></i> */}
                  <span>Created {formatDate(repoInfo.createdAt)}</span>
                </div>
              </div>
            </>
          ) : (
            <div className="no-repo-info">
              <i className="fas fa-info-circle"></i>
              <span>GitHub repository info unavailable</span>
            </div>
          )}
        </div>
      )}

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
              {repoInfo && link.type === 'code' && (
                <span className="star-count">
                  <i className="fas fa-star"></i>
                  {formatCount(repoInfo.stars)}
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
