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

export default ConclusionSlide;
