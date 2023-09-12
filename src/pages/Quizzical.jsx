import quizzicalImage from "../assets/png/quizzical.png"

export default function Quizzical() {
  return (
    <>
      <a id="top"></a>
      <section className="project-cs-hero">
        <div className="project-cs-hero__content">
          <h1 className="heading-primary">Quizzical</h1>
          <div className="project-cs-hero__info">
            <p className="text-primary">
              A simple multi-choice trivia quiz game.
            </p>
          </div>
          <div className="project-cs-hero__cta">
            <a
              href="https://dynamic-sherbet-0d8387.netlify.app/"
              className="btn btn--bg"
              target="_blank"
              rel="noreferrer"
            >
              Live Link
            </a>
          </div>
        </div>
      </section>
      <section className="project-details">
        <div className="main-container">
          <div className="project-details__content">
            <div className="project-details__showcase-img-cont">
              <img
                src={quizzicalImage}
                alt="Project Image"
                className="project-details__showcase-img"
              />
            </div>
            <div className="project-details__content-main">
              <div className="project-details__desc">
                <h3 className="project-details__content-title">
                  Project Overview
                </h3>
                <p className="project-details__desc-para">
                  Are you ready to embark on a journey of knowledge, fun, and
                  interactive learning? Look no further than Quizzical, a
                  dynamic and engaging quiz app that brings the world of trivia
                  to your fingertips. Created using React, Quizzical is the
                  perfect showcase of my web development skills, offering a
                  seamless and immersive quiz experience.
                </p>
              </div>
              <div className="project-details__tools-used">
                <h3 className="project-details__content-title">Tools Used</h3>
                <div className="skills">
                  <div className="skills__skill">HTML</div>
                  <div className="skills__skill">CSS</div>
                  <div className="skills__skill">JavaScript</div>
                  <div className="skills__skill">React</div>
                  <div className="skills__skill">API</div>
                </div>
              </div>
              <div className="project-details__links">
                <h3 className="project-details__content-title">See Live</h3>
                <a
                  href="https://dynamic-sherbet-0d8387.netlify.app/"
                  className="btn btn--med btn--theme project-details__links-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Link
                </a>
                <a
                  href="https://github.com/SaltySaff/quizzical"
                  className="btn btn--med btn--theme-inv project-details__links-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
