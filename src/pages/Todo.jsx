import todoImage from "../assets/png/todo.png"

export default function Todo() {
  return (
    <>
      <a id="top"></a>
      <section className="project-cs-hero">
        <div className="project-cs-hero__content">
          <h1 className="heading-primary">TODO</h1>
          <div className="project-cs-hero__info">
            <p className="text-primary">
              A sleek, web-based todo app.
            </p>
          </div>
          <div className="project-cs-hero__cta">
            <a
              href="https://candid-kleicha-2cd693.netlify.app/"
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
                src={todoImage}
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
                Designed with user-friendliness in mind, this application allows you to effortlessly add, delete, filter, and even drag-and-drop your todos, making task management a breeze. Stay organized and boost productivity with ease using our intuitive web-based tool.
                </p>
              </div>
              <div className="project-details__tools-used">
                <h3 className="project-details__content-title">Tools Used</h3>
                <div className="skills">
                  <div className="skills__skill">HTML</div>
                  <div className="skills__skill">CSS</div>
                  <div className="skills__skill">JavaScript</div>
                  <div className="skills__skill">React</div>
                  <div className="skills__skill">Tailwind CSS</div>
                  <div className="skills__skill">React Beautiful DND</div>
                </div>
              </div>
              <div className="project-details__links">
                <h3 className="project-details__content-title">See Live</h3>
                <a
                  href="https://candid-kleicha-2cd693.netlify.app/"
                  className="btn btn--med btn--theme project-details__links-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Link
                </a>
                <a
                  href="https://github.com/SaltySaff/todo-app"
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
