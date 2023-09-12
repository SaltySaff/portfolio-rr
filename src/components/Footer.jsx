import githubIcon from "../assets/png/github-ico.png"
import linkedinIcon from "../assets/png/linkedin-ico.png"

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/daniel-ash-7470b31ab/"
              >
                <img
                  className="main-footer__icon"
                  src={linkedinIcon}
                  alt="icon"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/saltysaff"
              >
                <img
                  className="main-footer__icon"
                  src={githubIcon}
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">Daniel Ash</h4>
            <p className="main-footer__short-desc">
              A translator, turned web developer looking for new oppurtunities!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
