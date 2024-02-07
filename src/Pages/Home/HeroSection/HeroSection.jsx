import Container from "../../../Components/Shared/Container";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <Container>
      <div className="hero min-h-screen bg-base-200 ">
        {/*  */}
        <div className="hero-content justify-start flex-col-reverse md:flex-row-reverse">
          <div className="md:flex-1 p-6">
            <img
              src="https://i.ibb.co/NLk26Nz/hakim.jpg "
              className="max-w-sm rounded-lg shadow-2xl ring w-full bg-white"
            />
          </div>
          <div className="lg:pr-16 ">
            <h2 className="text-3xl md:text-5xl flex">Hello 👋,</h2>
            <h2 className=" text-xl md:text-4xl font-semibold mt-2">
              I'm
              <span className="uppercase font-bold "> Jakirul isalm hakim.</span>
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
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
