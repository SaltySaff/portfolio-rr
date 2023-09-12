import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <span className="header__logo-sub">John Doe</span>
        </div>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <Link to="/#" className="header__link">
                Home
              </Link>
            </li>
            <li className="header__link-wrapper">
              <Link to="/#about" className="header__link">
                About
              </Link>
            </li>
            <li className="header__link-wrapper">
              <Link to="/#projects" className="header__link">
                Projects
              </Link>
            </li>
            <li className="header__link-wrapper">
              <Link to="/#contact" className="header__link">
                Contact
              </Link>
            </li>
          </ul>
          <div className="header__main-ham-menu-cont">
            <img
              src="./assets/svg/ham-menu.svg"
              alt="hamburger menu"
              className="header__main-ham-menu"
            />
            <img
              src="./assets/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              className="header__main-ham-menu-close d-none"
            />
          </div>
        </div>
      </div>
      <div className="header__sm-menu">
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <a href="./index.html"> Home </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./index.html#about"> About </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./index.html#projects"> Projects </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./index.html#contact"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
