import projectMockup from "../assets/jpeg/project-mockup-example.jpeg";
import quizzicalMockup from "../assets/jpeg/quizzical-mockup.jpg";
import todoMockup from "../assets/jpeg/todo-mockup.jpg";
import { Link } from "react-router-dom";

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
                This project entails a quiz application developed using ReactJS,
                utilizing the OpenTDB API to generate a variety of multi-choice
                quizzes across different subjects. The application emphasizes an
                enjoyable and easy-to-navigate user experience, allowing users
                to test their knowledge effortlessly.
              </p>

              <Link
                to="/quizzical"
                className="btn btn--med btn--theme dynamicBgClr"
              >
                Case Study
              </Link>
            </div>
          </div>
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src={todoMockup}
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">To Do</h3>
              <p className="projects__row-content-desc">
                This project demonstrates a ToDo application built with React,
                showcasing the implementation of react-beautiful-dnd for an
                interactive drag-and-drop experience. The application supports
                functionalities such as adding, deleting, and filtering tasks,
                providing a user-friendly interface for managing daily tasks.
              </p>
              <Link to="/todo" className="btn btn--med btn--theme dynamicBgClr">
                Case Study
              </Link>
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
              <h3 className="projects__row-content-title">Movie Watchlist</h3>
              <p className="projects__row-content-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                facilis tempora, explicabo quae quod deserunt eius sapiente
                praesentium.
              </p>
              <Link
                to="/movie-watchlist"
                className="btn btn--med btn--theme dynamicBgClr"
              >
                Case Study
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
