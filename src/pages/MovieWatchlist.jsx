import watchlistImage from "../assets/png/watchlist.png";

export default function MovieWatchlist() {
  return (
    <>
      <a id="top"></a>
      <section className="project-cs-hero">
        <div className="project-cs-hero__content">
          <h1 className="heading-primary">Movie Watchlist</h1>
          <div className="project-cs-hero__info">
            <p className="text-primary">Keep track of your movie backlog!</p>
          </div>
          <div className="project-cs-hero__cta">
            <a
              href="https://silver-crostata-37f94e.netlify.app/"
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
                src={watchlistImage}
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
                  Crafted with React and enhanced by React Router for seamless
                  page navigation, Movie Watchlist is a robust and intuitive
                  application that allows movie enthusiasts to search, explore,
                  and manage their own personalized watchlist. Utilizing the
                  comprehensive OMDb API, the application offers users the
                  ability to search from a wide array of films, from classics to
                  the latest releases.
                </p>
              </div>
              <div className="project-details__tools-used">
                <h3 className="project-details__content-title">Tools Used</h3>
                <div className="skills">
                  <div className="skills__skill">HTML</div>
                  <div className="skills__skill">CSS</div>
                  <div className="skills__skill">JavaScript</div>
                  <div className="skills__skill">React</div>
                  <div className="skills__skill">React Router</div>
                  <div className="skills__skill">OMDb API</div>
                </div>
              </div>
              <div className="project-details__links">
                <h3 className="project-details__content-title">See Live</h3>
                <a
                  href="https://silver-crostata-37f94e.netlify.app/"
                  className="btn btn--med btn--theme project-details__links-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Link
                </a>
                <a
                  href="https://github.com/SaltySaff/movie-watchlist"
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
