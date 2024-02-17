import Container from "../../Components/Shared/Container";
import ProjectCard from "./ProjectCard";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1200,
});

const Project = () => {
  return (
    <Container>
      <div className="flex justify-center mb-5">
        <h2 className="text-4xl text-center font-bold border-b-4 pb-4 inline-block px-5">
          <Typewriter
            options={{
              strings: ["Projects"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5 lg:gap-16 py-4">
        <div data-aos="flip-left">
          <ProjectCard></ProjectCard>
        </div>
        <div data-aos="flip-right">
          <ProjectCard></ProjectCard>
        </div>
        <div data-aos="flip-left">
          <ProjectCard></ProjectCard>
        </div>
      </div>
    </Container>
  );
};

export default Project;
