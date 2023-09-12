export default function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">Hi, I'm Dan</h1>
        <div className="home-hero__info">
          <p className="text-primary">
            I'm a dedicated React developer hailing from London, UK. With
            expertise in React JS and a flair for crafting user-friendly
            applications, I'm committed to creating engaging digital
            experiences.
          </p>
        </div>
        <div className="home-hero__cta">
          <a href="./#projects" className="btn btn--bg">
            Projects
          </a>
        </div>
      </div>
      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
    </section>
  );
}
