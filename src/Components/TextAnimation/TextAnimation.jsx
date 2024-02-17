import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1000,
  // disable : 'mobile'
});

const TextAnimation = ({ text }) => {
  return (
    <>
      <div data-aos="flip-up" className="font-bold bg-gradient-to-r from-cyan-600 via-yellow-600 to-red-600 text-transparent bg-clip-text inline-block">
        <Typewriter
          options={{
            strings: text,
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </>
  );
};

export default TextAnimation;
