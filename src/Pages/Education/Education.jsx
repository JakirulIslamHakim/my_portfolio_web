import Container from "../../Components/Shared/Container";
import AOS from "aos";
import "aos/dist/aos.css";
import TextAnimation from "../../Components/TextAnimation/TextAnimation";
AOS.init({
  duration: 1200,
});

const Education = () => {
  return (
    <div id="education">
      <Container>
        <div className="flex justify-center mb-5">
          <h2 className="text-4xl text-center border-b-4 pb-4  px-5">
            <TextAnimation text={["Education"]} />
          </h2>
        </div>
        <div className="flex items-center w-full flex-col md:flex-row py- md:py-6 md:gap-10  rounded-xl">
          {/* Image */}
          <div
            data-aos="fade-right"
            className="text-center lg:text-left  md:w-1/2  mt-10 md:my-0 space-y-3 font-medium"
          >
            <img
              src="https://i.ibb.co/QnHNcj2/college.jpg"
              className="rounded-lg w-full"
              alt=""
            />
          </div>
          {/* Content */}
          <div
            data-aos="fade-left"
            className="card  w-full  md:w-1/2 p-5 text-justify"
          >
            <h3 className="text-xl font-bold mb-4">My Education</h3>
            <p className="text-sm md:text-base">
              I am 19 years old. I studied in Ishwarganj Government College, a
              reputed college in Ishwarganj. I am already educated in
              exceptional education and working in web development. I passed PSC
              in 2016 with GPA-5 from Fulkunri Kindergarten. Then I passed JSC
              and SSC with GPA 3.79 and GPA 4.28 (Humanities) in 2018 and 2023
              from reputed school Ishwarganj Bisweswari Government Pilot High
              School.
            </p>
          </div>
        </div>
      </Container>{" "}
    </div>
  );
};

export default Education;
