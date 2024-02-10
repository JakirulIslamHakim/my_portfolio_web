import { CircularProgressbar, CircularProgressbarWithChildren } from "react-circular-progressbar";
import Container from "../../Components/Shared/Container";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  return (
    <Container>
      <div>
        <div className="flex justify-center mb-5">
          <h2 className="text-4xl text-center font-bold border-b-4 pb-4 inline-block px-5">
            Skills
          </h2>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-center">Frontend</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
            <CircularProgressbarWithChildren value={66}>
              {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
              <img
                style={{ width: 40, marginTop: -5 }}
                src="https://i.imgur.com/b9NyUGm.png"
                alt="doge"
              />
              <div style={{ fontSize: 12, marginTop: -5 }}>
                <strong>66%</strong> mate
              </div>
            </CircularProgressbarWithChildren>
            ;
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Skills;
