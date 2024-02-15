import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactIcon = () => {
  return (
    <div className="flex gap-4 md:gap-8 text-3xl md:text-5xl">
      <Link to={"https://github.com/JakirulIslamHakim"} target="_blank">
        <FaGithub className="text-[#181717]"></FaGithub>
      </Link>
      <Link className="text-[#0077B5]" to={"https://bd.linkedin.com/in/jakirul-islam-hakim-882418279"} target="_blank" >
        <FaLinkedin></FaLinkedin>
      </Link>
      <Link className="text-[#1877F2]" to={"https://web.facebook.com/jakirulIslamHakim1"} target="_blank">
        <FaFacebook></FaFacebook>
      </Link>
    </div>
  );
};

export default ContactIcon;
