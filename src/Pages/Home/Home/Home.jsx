import Footer from "../../../Components/Shared/Footer";
import Navbar from "../../../Components/Shared/Navbar";
import AboutMe from "../../AboutMe/AboutMe";
import Contact from "../../Contact/Contact";
import Education from "../../Education/Education";
import Project from "../../Project/Project";
import Skills from "../../Skills/Skills";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Navbar></Navbar>
      <div id="hero-section">
        <HeroSection></HeroSection>
      </div>
      <div id="about-me">
        <AboutMe></AboutMe>
      </div>
      <div id="skills">
        <Skills></Skills>
      </div>
      <div id="projects">
        <Project></Project>
      </div>
      <div id="contact">
        <Contact></Contact>
      </div>
      <Education></Education>
      <Footer></Footer>
    </div>
  );
};

export default Home;
