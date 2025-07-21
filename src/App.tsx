import { useEffect } from 'react';
import './App.css';
import MiniMap from './components/MiniMap/MiniMap';
import OverviewSlide from './components/OverviewSlide/OverviewSlide';
import ProgressBar from './components/ProgressBar/ProgressBar';
import ProjectSlide from './components/ProjectSlide/ProjectSlide';
import TitleSlide from './components/TitleSlide/TitleSlide';
import Toolbar from './components/Toolbar/Toolbar';
import { IMPRESS_CONFIG } from './constants/impressConfig';
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

      <div
        id="impress"
        data-transition-duration={IMPRESS_CONFIG.TRANSITION_DURATION}
        data-max-scale={IMPRESS_CONFIG.MAX_SCALE}
        data-min-scale={IMPRESS_CONFIG.MIN_SCALE}
        data-perspective={IMPRESS_CONFIG.PERSPECTIVE}
      >
        <TitleSlide />

        {projectsData.map((project) => (
          <ProjectSlide key={project.id} project={project} />
        ))}

        <OverviewSlide />
      </div>

      <MiniMap />
      <Toolbar />
    </div>
  );
}

export default App;
