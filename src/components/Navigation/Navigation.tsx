import { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isAutoplay, setIsAutoplay] = useState(false);

  const handlePrev = () => {
    if (window.impress) {
      window.impress().prev();
    }
  };

  const handleNext = () => {
    if (window.impress) {
      window.impress().next();
    }
  };

  const toggleAutoplay = () => {
    setIsAutoplay(!isAutoplay);
    console.log('Autoplay toggled:', !isAutoplay);
  };

  const toggleMiniMap = () => {
    const event = new CustomEvent('toggleMiniMap');
    window.dispatchEvent(event);
  };

  return (
    <div className="navigation">
      <button className="nav-btn" onClick={handlePrev} title="上一页">
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="nav-btn" onClick={handleNext} title="下一页">
        <i className="fas fa-chevron-right"></i>
      </button>
      <button
        className="nav-btn"
        onClick={toggleAutoplay}
        title={isAutoplay ? '暂停自动播放' : '自动播放'}
      >
        <i className={`fas ${isAutoplay ? 'fa-pause' : 'fa-play'}`}></i>
      </button>
      <button className="nav-btn" onClick={toggleMiniMap} title="展开/收起地图">
        <i className="fas fa-map"></i>
      </button>
    </div>
  );
};

export default Navigation;
