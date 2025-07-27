import { useEffect, useRef, useState } from 'react';
import { mapData } from '../../constants/projectsData';
import { SLIDE_IDS } from '../../constants/slideIds';
import './Toolbar.css';

const Toolbar = () => {
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [isMiniMapVisible, setIsMiniMapVisible] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const autoplayTimerRef = useRef<number | null>(null);
  const autoplayIntervalRef = useRef<number>(3000);

  useEffect(() => {
    const savedTheme =
      (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  useEffect(() => {
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleMiniMapToggle = () => {
      setIsMiniMapVisible((prev) => !prev);
    };

    window.addEventListener('toggleMiniMap', handleMiniMapToggle);

    return () => {
      window.removeEventListener('toggleMiniMap', handleMiniMapToggle);
    };
  }, []);

  const applyTheme = (newTheme: 'light' | 'dark') => {
    const root = document.documentElement;
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const getCurrentSlideIndex = (): number => {
    const activeSlide =
      document.querySelector('.step.present') ||
      document.querySelector('.step.active');
    if (activeSlide) {
      const currentId = activeSlide.id;
      return mapData.findIndex((item) => item.id === currentId);
    }
    return 0;
  };

  const goToNextSlide = () => {
    const currentIndex = getCurrentSlideIndex();
    const nextIndex = (currentIndex + 1) % mapData.length;
    const nextSlideId = mapData[nextIndex].id;

    if (window.impress) {
      window.impress().goto(nextSlideId);
    }
  };

  const startAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }

    autoplayTimerRef.current = setInterval(() => {
      goToNextSlide();
    }, autoplayIntervalRef.current);
  };

  const stopAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  };

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

  const handleOverview = () => {
    if (window.impress) {
      window.impress().goto(SLIDE_IDS.OVERVIEW);
    }
  };

  const toggleAutoplay = () => {
    const newAutoplayState = !isAutoplay;
    setIsAutoplay(newAutoplayState);

    if (newAutoplayState) {
      startAutoplay();
      console.log('自动播放已开启');
    } else {
      stopAutoplay();
      console.log('自动播放已关闭');
    }
  };

  const toggleMiniMap = () => {
    const event = new CustomEvent('toggleMiniMap');
    window.dispatchEvent(event);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const getThemeIcon = () => {
    return theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
  };

  const getThemeTitle = () => {
    return theme === 'light' ? '切换到深色主题' : '切换到明亮主题';
  };

  return (
    <div className="toolbar">
      <button
        className="toolbar-btn"
        onClick={handlePrev}
        data-tooltip="上一页"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        className="toolbar-btn"
        onClick={handleNext}
        data-tooltip="下一页"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
      <button
        className={`toolbar-btn ${isAutoplay ? 'autoplay-active' : ''}`}
        onClick={toggleAutoplay}
        data-tooltip={isAutoplay ? '暂停自动播放' : '自动播放'}
      >
        <i className={`fas ${isAutoplay ? 'fa-pause' : 'fa-play'}`}></i>
        {isAutoplay && <div className="autoplay-indicator"></div>}
      </button>
      <button
        className="toolbar-btn"
        onClick={handleOverview}
        data-tooltip="项目总览"
      >
        <i className="fas fa-th-large"></i>
      </button>
      <button
        className={`toolbar-btn ${isMiniMapVisible ? 'minimap-active' : ''}`}
        onClick={toggleMiniMap}
        data-tooltip={isMiniMapVisible ? '收起地图' : '展开地图'}
      >
        <i className="fas fa-map"></i>
        {isMiniMapVisible && <div className="minimap-indicator"></div>}
      </button>
      <button
        className="toolbar-btn theme-btn"
        onClick={toggleTheme}
        data-tooltip={getThemeTitle()}
      >
        <i className={getThemeIcon()}></i>
        <div className="theme-indicator"></div>
      </button>
    </div>
  );
};

export default Toolbar;
