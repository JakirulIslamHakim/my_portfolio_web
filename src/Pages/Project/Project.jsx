import { useEffect, useState } from "react";
import Container from "../../Components/Shared/Container";
import TextAnimation from "../../Components/TextAnimation/TextAnimation";
import ProjectCard from "./ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1200,
});

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("./projectDetails.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <Container>
      <div className="flex justify-center mb-5">
        <h2 className="text-4xl text-center font-bold border-b-4 pb-4 inline-block px-5">
          <TextAnimation text={["Projects"]} />
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5 lg:gap-16 py-4">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
    </Container>
  );
};

export default Project;
