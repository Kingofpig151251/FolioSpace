import { useEffect } from 'react';
import './App.css';
import MiniMap from './components/MiniMap/MiniMap';
import ProgressBar from './components/ProgressBar/ProgressBar';
import ProjectCard from './components/ProjectCard/ProjectCard';
import Toolbar from './components/Toolbar/Toolbar';
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
      <div className="profile-section">
        <div className="avatar-container">
          <img
            src="https://avatars.githubusercontent.com/u/31370133?v=4"
            alt="SimonAKing Avatar"
            className="profile-avatar"
          />
          <div className="status-indicator"></div>
        </div>

        <h1>
          <i className="fas fa-code"></i> SimonAKing
        </h1>
        <h2 className="real-name">Simon Aking</h2>
        <p className="job-title">全栈开发工程师 · 项目作品集</p>
        <p className="bio">专注于现代Web技术栈，热爱开源和技术分享</p>

        <div className="contact-links">
          <a
            href="https://github.com/SimonAKing"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <i className="fab fa-github"></i>
            <span>GitHub</span>
          </a>

          <a href="mailto:hello@simonaking.com" className="contact-link">
            <i className="fas fa-envelope"></i>
            <span>邮箱</span>
          </a>

          <a
            href="https://simonaking.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <i className="fas fa-blog"></i>
            <span>博客</span>
          </a>

          <a
            href="https://x.com/simonaking"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <i className="fab fa-x-twitter"></i>
            <span>X (Twitter)</span>
          </a>

          <a
            href="https://t.me/simonaking"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <i className="fab fa-telegram"></i>
            <span>Telegram</span>
          </a>

          <div className="contact-link wechat-trigger">
            <i className="fab fa-weixin"></i>
            <span>微信</span>
            <div className="wechat-qr">
              <div className="qr-placeholder">
                <i className="fab fa-weixin"></i>
                <p>微信: SimonAking</p>
                <p className="qr-note">
                  请添加微信二维码图片到 /public/wechat-qr.png
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
        // data-width="1024"
        // data-height="768"
        data-max-scale="3"
        data-min-scale="0"
        data-perspective="1000"
      >
        <TitleSlide />

        {projectsData.map((project, index) => (
          <ProjectSlide key={project.id} project={project} />
        ))}

        <div
          id="overview"
          className="step"
          data-x="0"
          data-y="0"
          data-z="0"
          data-scale="4"
        ></div>
      </div>

      <MiniMap />
      <Toolbar />
    </div>
  );
}

export default App;
