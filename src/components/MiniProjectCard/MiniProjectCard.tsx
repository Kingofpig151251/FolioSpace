import { Project } from '../../types/global';
import './MiniProjectCard.css';

const MiniProjectCard = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) => {
  const statusClass =
    project.status === 'completed'
      ? 'mini-status-completed'
      : 'mini-status-progress';

  return (
    <div className="mini-project-card" onClick={onClick}>
      <div className="mini-project-header">
        <div className="mini-project-icon">
          <i className={project.icon}></i>
        </div>
        <h3 className="mini-project-title">{project.title || project.name}</h3>
        <div className={`mini-project-status ${statusClass}`}>
          {project.status === 'completed' ? '已完成' : '开发中'}
        </div>
      </div>
      <p className="mini-project-description">{project.description}</p>
      <div className="mini-project-tech">
        {project.tech?.slice(0, 3).map((tech, index) => (
          <span key={index} className="mini-tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MiniProjectCard;
