import Contact from "../components/Contact";
import Hero from "../components/Hero"
import About from "../components/About";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <a id="top"></a>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
