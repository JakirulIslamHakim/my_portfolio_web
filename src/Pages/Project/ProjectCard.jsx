import { FaLink, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const {
    image,
    name,
    description,
    technology = [],
    liveLink,
    gitLink,
    animations,
  } = project;

  return (
    <div data-aos={animations} className="flex flex-col">
      <div className="card bg-base-100 shadow-xl flex flex-col h-full">
        <figure>
          <img src={image} alt="projects" className="border-4" />
        </figure>
        <div className="card-body p-5 md:p-7 flex flex-col justify-between">
          <h2 className="card-title font-bold justify-center border-b-2 mb-3 uppercase">
            {name}
          </h2>
          <p className="text-sm flex-grow text-justify">{description}</p>
          <div className="card-actions justify-center my-3">
            {technology.map((tech, index) => (
              <button
                key={index}
                className="border-2 border-red-300 px-1 rounded-lg font-medium text-xs md:text-sm hover:cursor-text"
              >
                {tech}
              </button>
            ))}
          </div>
          <div className="flex justify-center gap-5 text-3xl my-6">
            <Link
              to={liveLink}
              target="_blank"
              className="tooltip text-blue-500"
              data-tip="Live Link"
            >
              <FaLink title="Live Link" />
            </Link>
            <Link
              to={gitLink}
              className="tooltip"
              target="_blank"
              data-tip="Code"
            >
              <FaGithub />
            </Link>
            <Link></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
