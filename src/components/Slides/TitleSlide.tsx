import React from 'react'

const TitleSlide = () => {
  return (
    <div
      id="title"
      className="step title-slide active"
      data-x="0"
      data-y="0"
      data-z="0"
    >
      <h1><i className="fas fa-code"></i> SimonAKing</h1>
      <p>全栈开发工程师 · 项目作品集</p>
      <p className="scroll-hint">
        <i className="fas fa-mouse"></i> 使用空格键或方向键导航
      </p>
    </div>
  )
}

export default TitleSlide