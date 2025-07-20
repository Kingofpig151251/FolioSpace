import { useEffect } from 'react';
import './App.css';
import MiniMap from './components/MiniMap/MiniMap';
import Navigation from './components/Navigation/Navigation';
import ProgressBar from './components/ProgressBar/ProgressBar';
import ProjectCard from './components/ProjectCard/ProjectCard';
import { projectsData } from './constants/projectsData';
import { Project } from './types/global';

const TitleSlide = () => {
  return (
    <div
      id="title"
      className="step title-slide active"
      data-x="0"
      data-y="0"
      data-z="0"
    >
      <h1>
        <i className="fas fa-code"></i> SimonAKing
      </h1>
      <p>全栈开发工程师 · 项目作品集</p>
      <p className="scroll-hint">
        <i className="fas fa-mouse"></i> 使用空格键或方向键导航
      </p>
    </div>
  );
};

const ProjectSlide = ({ project }: { project: Project }) => {
  const { position } = project;

  const slideProps: { [key: string]: string | number } = {
    'data-x': position.x,
    'data-y': position.y,
    'data-z': position.z || 0,
  };

  if (position.rotate) {
    slideProps['data-rotate'] = position.rotate;
  }
  if (position.rotateY) {
    slideProps['data-rotate-y'] = position.rotateY;
  }

  return (
    <div id={project.id} className="step" {...slideProps}>
      <ProjectCard project={project} />
    </div>
  );
};

const ConclusionSlide = () => {
  const handleOverviewClick = () => {
    if (window.impress) {
      window.impress().goto('global-overview');
    }
  };

  return (
    <div
      id="conclusion"
      className="step title-slide"
      data-x="0"
      data-y="-5000"
      data-z="0"
      data-rotate="180"
      data-scale="1.5"
    >
      <h1>
        <i className="fas fa-rocket"></i> 感谢观看
      </h1>
      <p>这些项目展示了我在前端、后端、3D 图形和用户体验方面的技能</p>
      <div
        className="project-links"
        style={{ justifyContent: 'center', marginTop: '40px' }}
      >
        <button
          onClick={handleOverviewClick}
          className="project-link"
          style={{ border: 'none', cursor: 'pointer' }}
        >
          <i className="fas fa-th-large"></i> 返回项目概览
        </button>
        <a
          href="https://simonaking.com"
          className="project-link secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-home"></i> 访问主页
        </a>
        <a
          href="https://github.com/SimonAKing"
          className="project-link secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
    </div>
  );
};

function App() {
  useEffect(() => {
    if (window.impress) {
      window.impress().init();
    }
  }, []);

  return (
    <div className="App">
      <ProgressBar />

      <div
        id="impress"
        data-transition-duration="1000"
        data-width="1024"
        data-height="768"
        data-max-scale="3"
        data-min-scale="0"
        data-perspective="1000"
        data-autoplay="7"
      >
        <TitleSlide />

        {projectsData.map((project, index) => (
          <ProjectSlide key={project.id} project={project} />
        ))}

        <ConclusionSlide />

        <div
          id="overview"
          className="step"
          data-x="1500"
          data-y="0"
          data-z="0"
          data-scale="10"
        ></div>
      </div>

      <MiniMap />
      <Navigation />
    </div>
  );
}

export default App;
