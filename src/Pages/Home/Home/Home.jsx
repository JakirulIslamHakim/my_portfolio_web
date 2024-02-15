import AboutMe from "../../AboutMe/AboutMe";
import Contact from "../../Contact/Contact";
import Project from "../../Project/Project";
import Skills from "../../Skills/Skills";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
    </div>
  );
};

export default Home;
