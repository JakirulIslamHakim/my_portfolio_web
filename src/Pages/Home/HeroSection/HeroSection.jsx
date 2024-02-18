import Container from "../../../Components/Shared/Container";
import { FaDownload } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import TextAnimation from "../../../Components/TextAnimation/TextAnimation";

AOS.init({
  duration: 1200,
});
const HeroSection = () => {
  return (
    <Container>
      <div className="hero rounded-lg pt-8 md:py-16  ">
        <div className="hero-content justify-start flex-col md:flex-row-reverse">
          {/* image  */}
          <div data-aos="fade-right" className=" p-6 ">
            <img
              src="https://i.ibb.co/NLk26Nz/hakim.jpg "
              className="max-w-sm rounded-lg shadow-2xl ring w-2/3 mx-auto md:w-full bg-white"
            />
          </div>
          {/* content */}
          <div data-aos="fade-left" className="lg:pr-16 md:flex-1">
            <h2 className="text-3xl md:text-5xl flex">Hello 👋,</h2>
            <h2 className=" text-xl md:text-4xl font-semibold mt-2 ">
              I&apos;m
              <span className="uppercase font-bold ">
                {" "}
                Jakirul isalm hakim.
              </span>
            </h2>
            {/* typeWriter */}
            <div className="text-xl md:text-3xl  mt-2 md:mt-3">
              <TextAnimation
                text={[
                  "Web Application Developer",
                  "Frontend Developer",
                  "Javascript Developer",
                  "React Developer",
                ]}
              />
            </div>
            <p className="md:w-3/4  my-3 text-sm md:text-lg text-justify">
              "Mastering the art of frontend development, I specialize in HTML,
              CSS, JavaScript, React, and more. With a passion for clean code
              and intuitive design, I bring projects to life with precision and
              creativity. Let's build something extraordinary."
            </p>
            <button className="btn ml-6 btn-sm md:btn-md outline outline-black mt-6 text-bold md:text-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
              Resume <FaDownload></FaDownload>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
