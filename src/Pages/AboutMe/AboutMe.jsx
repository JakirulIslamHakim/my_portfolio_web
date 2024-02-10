import Container from "../../Components/Shared/Container";

const AboutMe = () => {
  return (
    <Container>
      <div className="md:w-2/3 mx-auto space-y-4 text-center ">
        <h2 className="text-4xl font-semibold ">About Me</h2> <hr className="border-b-2 w-1/2 mx-auto border-slate-300" />
        <h4 className="text-2xl font-bold text-cente">
          🚀 Driven MERN Stack Web Developer 🚀
        </h4>
        <div className="text-xl space-y-5 text-justify">
          <p>
            I'm <span className="font-bold">Jakirul Islam Hakim</span>, an enthusiastic MERN stack
            web developer on a quest for digital excellence. With a toolbox
            packed with HTML, CSS, JavaScript, React, Bootstrap, Firebase,
            MongoDB, and Express JS, I embark on every project with a fervent
            dedication to innovation.{" "}
          </p>
          <p>
            Beyond coding, I'm a relentless learner, constantly seeking new
            challenges to broaden my expertise and refine my craft. Whether it's
            optimizing user experiences or architecting robust backend
            solutions, I thrive on pushing boundaries and delivering
            unparalleled results.
          </p>
          <p>
            Driven by a passion for problem-solving and a commitment to
            exceeding expectations, I'm eager to collaborate on groundbreaking
            web development endeavors. Let's embark on a journey of digital
            transformation together and create something truly extraordinary!
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
