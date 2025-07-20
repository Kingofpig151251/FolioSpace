import { useEffect, useState } from 'react';
import './Toolbar.css';

const Toolbar = () => {
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // 从本地存储读取主题设置，默认为明亮主题
    const savedTheme =
      (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: 'light' | 'dark') => {
    const root = document.documentElement;

    // 直接设置主题属性
    root.setAttribute('data-theme', newTheme);

    // 保存到本地存储
    localStorage.setItem('theme', newTheme);
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

  const toggleAutoplay = () => {
    setIsAutoplay(!isAutoplay);
    console.log('Autoplay toggled:', !isAutoplay);
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
      <button className="toolbar-btn" onClick={handlePrev} title="上一页">
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="toolbar-btn" onClick={handleNext} title="下一页">
        <i className="fas fa-chevron-right"></i>
      </button>
      <button
        className="toolbar-btn"
        onClick={toggleAutoplay}
        title={isAutoplay ? '暂停自动播放' : '自动播放'}
      >
        <i className={`fas ${isAutoplay ? 'fa-pause' : 'fa-play'}`}></i>
      </button>
      <button
        className="toolbar-btn"
        onClick={toggleMiniMap}
        title="展开/收起地图"
      >
        <i className="fas fa-map"></i>
      </button>
      <button
        className="toolbar-btn theme-btn"
        onClick={toggleTheme}
        title={getThemeTitle()}
      >
        <i className={getThemeIcon()}></i>
      </button>
    </div>
  );
};

export default Toolbar;
