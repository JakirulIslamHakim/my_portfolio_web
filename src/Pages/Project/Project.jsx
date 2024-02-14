import Container from "../../Components/Shared/Container";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <Container>
      <div className="flex justify-center mb-5">
        <h2 className="text-4xl text-center font-bold border-b-4 pb-4 inline-block px-5">
          Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 lg:gap-16 py-4">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
    </Container>
  );
};

export default Project;
