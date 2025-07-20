import { Project } from '../../types/global';
import MiniProjectCard from '../MiniProjectCard/MiniProjectCard';

const OverviewSlide = ({ projects }: { projects: Project[] }) => {
  const handleCardClick = (projectId: string) => {
    if (window.impress) {
      window.impress().goto(projectId);
    }
  };

  return (
    <div
      id="global-overview"
      className="step"
      data-x="1500"
      data-y="0"
      data-z="0"
      data-scale="1.2"
    >
      <div className="overview-title">
        <h1>
          <i className="fas fa-th-large"></i> 项目概览
        </h1>
        <p>点击下方卡片了解更多项目详情</p>
      </div>
      <div className="overview-grid">
        {projects.map((project) => (
          <MiniProjectCard
            key={project.id}
            project={project}
            onClick={() => handleCardClick(project.id)}
          />
        ))}

        {/* 项目页卡片 */}
        <MiniProjectCard
          project={{
            id: 'projects',
            name: '项目页',
            title: '项目页',
            icon: 'fas fa-layer-group',
            status: 'completed',
            description:
              '当前所在的项目展示页面，采用 impress.js 构建的 3D 演示效果。',
            tech: ['impress.js', 'CSS3', '3D'],
          }}
          onClick={() => handleCardClick('projects')}
        />
      </div>
    </div>
  );
};

export default OverviewSlide;
