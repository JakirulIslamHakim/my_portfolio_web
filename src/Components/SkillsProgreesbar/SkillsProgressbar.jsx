import { CircularProgressbarWithChildren } from "react-circular-progressbar";

const SkillsProgressbar = ({ parcent, icon: Icon, name, color, image }) => {
  return (
    <div className=" w-[100px] md:w-[150px] lg:w-[200px]  mx-auto">
      <CircularProgressbarWithChildren value={parcent}>
        {Icon ? (
          <Icon className={`text-2xl md:text-3xl lg:text-5xl ${color}`}></Icon>
        ) : (
          <img className="w-12 md:w-20"  src={image} alt="Icon" />
        )}
        <div className="text-base md:text-xl lg:text-2xl uppercase text-center">
          {name} <br /> <strong>{parcent}%</strong>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default SkillsProgressbar;
