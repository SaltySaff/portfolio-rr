import { Link } from "react-router-dom";
import projectMockup from "../assets/jpeg/project-mockup-example.jpeg";
import quizzicalMockup from "../assets/jpeg/quizzical-mockup.jpg";

export default function Projects() {
  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Projects</span>
          <span className="heading-sec__sub">
            Each of my projects features links to both the code and live
            versions. Click the button to delve deeper into each of them.
          </span>
        </h2>

        <div className="projects__content">
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src={quizzicalMockup}
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Quizzical</h3>
              <p className="projects__row-content-desc">
                A ReactJS app that leverages the OpenTDB API to create engaging
                multi-choice quizzes. Test your knowledge on various subjects
                with ease and fun in this user-friendly quiz application.
              </p>

              <a
                href="./quizzical"
                className="btn btn--med btn--theme dynamicBgClr disable-smooth-scroll"
              >
                Case Study
              </a>
            </div>
          </div>
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src={projectMockup}
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">To Do</h3>
              <p className="projects__row-content-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                facilis tempora, explicabo quae quod deserunt eius sapiente
                praesentium.
              </p>
              <a
                href="./project-2.html"
                className="btn btn--med btn--theme dynamicBgClr"
                target="_blank"
              >
                Case Study
              </a>
            </div>
          </div>
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src={projectMockup}
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Project 3</h3>
              <p className="projects__row-content-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                facilis tempora, explicabo quae quod deserunt eius sapiente
                praesentium.
              </p>
              <a
                href="./project-3.html"
                className="btn btn--med btn--theme dynamicBgClr"
                target="_blank"
              >
                Case Study
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
