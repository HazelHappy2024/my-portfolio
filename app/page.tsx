import Navigation from "./components/Navigation";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Teaching from "./components/Teaching";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <div className="border-t border-gray-100" />
        <About />
        <div className="border-t border-gray-100" />
        <Experience />
        <div className="border-t border-gray-100" />
        <Projects />
        <div className="border-t border-gray-100" />
        <Teaching />
        <div className="border-t border-gray-100" />
        <Skills />
        <div className="border-t border-gray-100" />
        <Contact />
      </main>
    </>
  );
}
