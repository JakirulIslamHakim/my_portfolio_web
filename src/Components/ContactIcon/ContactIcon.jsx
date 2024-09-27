import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

const ContactIcon = () => {
   return (
      <div className="flex gap-4 md:gap-8 text-3xl md:text-5xl">
         <a
            href={'https://github.com/JakirulIslamHakim'}
            target="_blank"
            rel="noreferrer"
         >
            <FaGithub className="text-[#181717]"></FaGithub>
         </a>
         <a
            className="text-[#0077B5]"
            href={'https://bd.linkedin.com/in/jakirul-islam-hakim-882418279'}
            target="_blank"
            rel="noreferrer"
         >
            <FaLinkedin></FaLinkedin>
         </a>
         <a
            className="text-[#1877F2]"
            href={'https://m.facebook.com/jakirulIslamHakim1'}
            target="_blank"
            rel="noreferrer"
         >
            <FaFacebook></FaFacebook>
         </a>
      </div>
   );
};

export default ContactIcon;
