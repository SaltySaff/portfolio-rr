export default function About() {
  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">About Me</span>
          <span className="heading-sec__sub">
            I'm a London-based frontend developer passionate about crafting
            user-friendly web apps that tackle real-world problems. With
            expertise in React JS, Tailwind CSS, and Styled Components, I'm
            driven to push the limits of web development. Join me on this
            journey of innovation and user-centric design.
          </span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Get to know me!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                <strong>Greetings!</strong> I'm <strong>Dan</strong>, a former
                Japanese-English translator and English teacher who swapped life
                in Japan for the UK to embark on a new journey in web
                development.
              </p>
              <p className="about__content-details-para">
                From <strong>bridging language gaps</strong> to building digital
                bridges, my career has taken a <strong>thrilling turn</strong>.
                Now, I'm passionate about crafting engaging online experiences,
                whether it's designing <strong>sleek user interfaces</strong> or
                enhancing user journeys.
              </p>
              <p className="about__content-details-para">
                Just like my past life connecting people through language, I'm
                now connecting users through <strong>code</strong>. If you share
                my enthusiasm for web development or simply want to chat about{" "}
                <strong>life's twists and turns</strong>, reach out! Let's
                connect in this ever-evolving digital world.
              </p>
            </div>
            <a
              href="./#contact"
              className="btn btn--med btn--theme dynamicBgClr"
            >
              Contact
            </a>
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              <div className="skills__skill">HTML</div>
              <div className="skills__skill">CSS</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">React</div>
              <div className="skills__skill">Tailwind CSS</div>
              <div className="skills__skill">Git</div>
              <div className="skills__skill">Netlify</div>
              <div className="skills__skill">Linux</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
