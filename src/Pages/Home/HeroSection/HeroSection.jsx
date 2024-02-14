import Container from "../../../Components/Shared/Container";
import Typewriter from "typewriter-effect";
import { FaDownload } from "react-icons/fa";

const HeroSection = () => {
  return (
    <Container>
      <div className="hero rounded-lg py-4 md:py-12 bg-base-200 ">
        {/*  */}
        <div className="hero-content justify-start flex-col md:flex-row-reverse">
          {/* image  */}
          <div className=" p-6 ">
            <img
              src="https://i.ibb.co/NLk26Nz/hakim.jpg "
              className="max-w-sm rounded-lg shadow-2xl ring w-2/3 mx-auto md:w-full bg-white"
            />
          </div>
          {/* content */}
          <div className="lg:pr-16 md:flex-1">
            <h2 className="text-3xl md:text-5xl flex">Hello 👋,</h2>
            <h2 className=" text-xl md:text-4xl font-semibold mt-2">
              I&apos;m
              <span className="uppercase font-bold ">
                {" "}
                Jakirul isalm hakim.
              </span>
            </h2>
            {/* typeWriter */}
            <div className="text-xl md:text-3xl font-extrabold mt-2 md:mt-3">
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "Javascript Developer",
                    "React Developer",
                    "MERN Stack Developer",
                    "Node Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className="md:w-3/4  my-3 text-sm md:text-lg text-justify">
              "Mastering the art of frontend development, I specialize in HTML,
              CSS, JavaScript, React, and more. With a passion for clean code
              and intuitive design, I bring projects to life with precision and
              creativity. Let's build something extraordinary."
            </p>
            <button className="btn ml-6 bg-red-700 btn-sm md:btn-md outline outline-black mt-6 text-bold md:text-xl text-white">
              Resume <FaDownload></FaDownload>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
