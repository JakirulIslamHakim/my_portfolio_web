import Footer from "../../../Components/Shared/Footer";
import AboutMe from "../../AboutMe/AboutMe";
import Contact from "../../Contact/Contact";
import Education from "../../Education/Education";
import Project from "../../Project/Project";
import Skills from "../../Skills/Skills";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection></HeroSection>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
      <Education></Education>
      <Footer></Footer>
    </div>
  );
};

export default Home;
