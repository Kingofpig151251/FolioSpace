import { useEffect } from 'react';
import './App.css';
import MiniMap from './components/MiniMap/MiniMap';
import Navigation from './components/Navigation/Navigation';
import ProgressBar from './components/ProgressBar/ProgressBar';
import ConclusionSlide from './components/Slides/ConclusionSlide';
import OverviewSlide from './components/Slides/OverviewSlide';
import ProjectSlide from './components/Slides/ProjectSlide';
import TitleSlide from './components/Slides/TitleSlide';
import { projectsData } from './constants/projectsData';

function App() {
  useEffect(() => {
    if (window.impress) {
      window.impress().init();
    }
  }, []);

  return (
    <div className="App">
      <ProgressBar />

      <div id="impress" data-transition-duration="1000" data-autoplay="0">
        <TitleSlide />

        <OverviewSlide projects={projectsData} />

        {projectsData.map((project, index) => (
          <ProjectSlide key={project.id} project={project} />
        ))}

        <ConclusionSlide />
      </div>

      <MiniMap />
      <Navigation />
    </div>
  );
}

export default App;
