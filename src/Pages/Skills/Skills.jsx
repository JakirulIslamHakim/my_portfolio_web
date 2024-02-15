import Container from "../../Components/Shared/Container";
import "react-circular-progressbar/dist/styles.css";
import SkillsProgressbar from "../../Components/SkillsProgreesbar/SkillsProgressbar";
import { FaHtml5, FaCss3Alt, FaReact, FaGitSquare } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiPostman,
  SiMui,
} from "react-icons/si";
import Typewriter from 'typewriter-effect';

const Skills = () => {
  return (
    <Container>
{/*skills section  */}
      <div>
        <div className="flex justify-center mb-5">
          <h2 className="text-4xl text-center font-bold border-b-4 pb-4 inline-block px-5">
          <Typewriter
        options={{
          strings: ["Skills"],
          autoStart: true,
          loop: true,
        }}
      />
          </h2>
        </div>
        <div>
          <h3 className="text-lg md:text-2xl font-semibold text-center mb-5 md:mb-10 ">
            Technologies I've Explored and Utilized
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 justify-around ">
            <SkillsProgressbar
              name={"Html"}
              parcent={90}
              icon={FaHtml5}
              color={"text-yellow-500"}
            />
            <SkillsProgressbar
              name={"Css"}
              parcent={70}
              icon={FaCss3Alt}
              color={"text-blue-500"}
            />
            <SkillsProgressbar
              name={"tailwind"}
              parcent={80}
              icon={SiTailwindcss}
              color={"text-blue-400"}
            />
            <SkillsProgressbar
              name={"Javascript"}
              parcent={70}
              icon={IoLogoJavascript}
              color={"text-yellow-600"}
            />
            <SkillsProgressbar
              name={"Mui"}
              parcent={60}
              icon={SiMui}
              color={"text-blue-400"}
            />
            <SkillsProgressbar
              name={"react"}
              parcent={70}
              icon={FaReact}
              color={"text-blue-400"}
            />
            <SkillsProgressbar
              name={"Mongodb"}
              parcent={60}
              icon={SiMongodb}
              color={"text-green-700"}
            />
            <SkillsProgressbar
              name={"express"}
              parcent={60}
              icon={SiExpress}
              color={"text-black"}
            />
            <SkillsProgressbar
              name={"node"}
              parcent={60}
              image={
                "https://zisanurhaque.vercel.app/_next/image?url=%2Fskill%2Fnode.png&w=750&q=75"
              }
            />
            <SkillsProgressbar
              name={"firebase"}
              parcent={80}
              icon={SiFirebase}
              color={"text-yellow-500"}
            />
            <SkillsProgressbar
              name={"jwt"}
              parcent={50}
              image={
                "https://media.licdn.com/dms/image/D4D12AQFIP1Sz-eHRjg/article-cover_image-shrink_720_1280/0/1684876475366?e=2147483647&v=beta&t=0yrmkNwfutQLUDgkCOjX_ktg9ge4o_RjVlRxj5aNuvY"
              }
            />
            <SkillsProgressbar
              name={"git"}
              parcent={50}
              icon={FaGitSquare}
              color={"text-black"}
            />
            <SkillsProgressbar
              name={"Postman"}
              parcent={50}
              icon={SiPostman}
              color={"text-orange-400"}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Skills;
