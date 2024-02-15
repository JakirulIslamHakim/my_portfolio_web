import { FaLink, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({
  image,
  name,
  descriptoin,
  tecnology,
  liveLink,
  gitLink,
}) => {
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/f8w57zP/Screenshot-38.png"
            alt="Shoes"
            className="border-4"
          />
        </figure>
        <div className="card-body text-justify">
          <h2 className="card-title font-bold justify-center border-b-2 mb-3">
            Job Hub
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            facilis doloremque adipisci, ullam dicta laborum? Voluptatibus sequi
            corrupti fugiat laudantium dignissimos? Similique ratione, quidem,
            repellendus eius velit consequatur rem accusantium neque rerum saepe
            sequi quisquam reiciendis minus maiores sed tenetur dignissimos
            eaque explicabo fuga esse! Libero molestias voluptatum dolorem
            dolor.
          </p>
          <div className="card-actions justify-center my-3">
            <button className="btn btn-primary hover:cursor-text">
              Javascript
            </button>
            <button className="btn btn-primary">Mongodb</button>
            <button className="btn btn-primary">Express</button>
            <button className="btn btn-primary">Buy Now</button>
            <button className="btn btn-primary">Buy Now</button>
            <button className="btn btn-primary">Buy Now</button>
          </div>
          <div className="flex justify-center gap-5 text-3xl my-6">
            <Link
              to={"https://job-hub-6e265.web.app/"}
              target="_blank"
              className="tooltip text-blue-500"
              data-tip="Live Link"
            >
              <FaLink title="Live Link" />
            </Link>
            <Link className="tooltip" data-tip="Code">
              <FaGithub />
            </Link>
            <Link ></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
