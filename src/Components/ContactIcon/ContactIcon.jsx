import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactIcon = () => {
  return (
    <div className="flex gap-4 md:gap-8 text-3xl md:text-5xl">
      <Link to={"https://github.com/JakirulIslamHakim"}>
        <FaGithub></FaGithub>
      </Link>
      <Link>
        <FaLinkedin></FaLinkedin>
      </Link>
      <Link to={"https://web.facebook.com/jakirulIslamHakim1"}>
        <FaFacebook></FaFacebook>
      </Link>
    </div>
  );
};

export default ContactIcon;
