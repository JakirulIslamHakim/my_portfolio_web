import AboutMe from "../../AboutMe/AboutMe";
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
    </div>
  );
};

export default Home;
