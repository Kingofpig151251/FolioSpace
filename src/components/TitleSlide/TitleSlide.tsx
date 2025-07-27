import { SLIDE_IDS, SLIDE_POSITIONS } from '../../constants/slideIds';
import { USER_CONFIG } from '../../constants/userConfig';
import { BlurFade } from '../ui/blur-fade';
import './TitleSlide.css';

const TitleSlide = () => {
  const handleSocialClick = (url: string, type: string) => {
    if (type === 'wechat') {
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id={SLIDE_IDS.TITLE}
      className="step title-slide"
      data-x={SLIDE_POSITIONS.TITLE.x}
      data-y={SLIDE_POSITIONS.TITLE.y}
      data-z={SLIDE_POSITIONS.TITLE.z}
    >
      <div className="profile-container">
        <div className="header-section">
          <div className="greeting-section">
            <BlurFade delay={0.15} inView>
              <h1 className="greeting">{USER_CONFIG.GREETING}</h1>
            </BlurFade>
          </div>
          <div className="avatar-section">
            <BlurFade delay={0.15} inView>
              <img
                src={USER_CONFIG.AVATAR_URL}
                alt={`${USER_CONFIG.NAME} Avatar`}
                className="profile-avatar"
              />
              <div className="status-indicator"></div>
            </BlurFade>
          </div>
        </div>

        <div className="bio-section">
          {USER_CONFIG.BIO.map((line, index) => (
            <BlurFade key={index} delay={0.25 * (index + 2)} inView>
              <p className="bio-line">{line}</p>
            </BlurFade>
          ))}
        </div>

        <div className="social-links">
          {USER_CONFIG.CONTACT_LINKS.map((link, index) => (
            <button
              key={index}
              onClick={() => handleSocialClick(link.url || '', link.type)}
              className={`social-link ${link.type === 'wechat' ? 'wechat' : ''}`}
              title={link.text}
            >
              <i className={link.icon}></i>
              <span>{link.text}</span>
              {link.type === 'wechat' && (
                <>
                  <img
                    src="/assets/wechat.png"
                    alt="微信二维码"
                    className="wechat-qr"
                  />
                </>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TitleSlide;
