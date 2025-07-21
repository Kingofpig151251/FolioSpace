import { SLIDE_IDS, SLIDE_POSITIONS } from '../../constants/slideIds';
import { USER_CONFIG } from '../../constants/userConfig';
import './TitleSlide.css';

const TitleSlide = () => {
  return (
    <div
      id={SLIDE_IDS.TITLE}
      className="step title-slide"
      data-x={SLIDE_POSITIONS.TITLE.x}
      data-y={SLIDE_POSITIONS.TITLE.y}
      data-z={SLIDE_POSITIONS.TITLE.z}
    >
      <div className="profile-section">
        <div className="avatar-container">
          <img
            src={USER_CONFIG.AVATAR_URL}
            alt={`${USER_CONFIG.NAME} Avatar`}
            className="profile-avatar"
          />
          <div className="status-indicator"></div>
        </div>

        <h1>
          <i className="fas fa-code"></i> {USER_CONFIG.NAME}
        </h1>
        <h2 className="real-name">{USER_CONFIG.REAL_NAME}</h2>
        <p className="job-title">{USER_CONFIG.JOB_TITLE}</p>
        <p className="bio">{USER_CONFIG.BIO}</p>

        <div className="contact-links">
          {USER_CONFIG.CONTACT_LINKS.map((link, index) => {
            if (link.isSpecial) {
              return (
                <div key={index} className="contact-link wechat-trigger">
                  <i className={link.icon}></i>
                  <span>{link.text}</span>
                  <div className="wechat-qr">
                    <div className="qr-placeholder">
                      <i className={link.icon}></i>
                      <p>微信: {USER_CONFIG.WECHAT_ID}</p>
                      <p className="qr-note">
                        请添加微信二维码图片到 /public/wechat-qr.png
                      </p>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <i className={link.icon}></i>
                <span>{link.text}</span>
              </a>
            );
          })}
        </div>
      </div>

      <p className="scroll-hint">
        <i className="fas fa-mouse"></i> 使用空格键或方向键导航
      </p>
    </div>
  );
};

export default TitleSlide;
