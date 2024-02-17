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
         <TextAnimation text={["Education"]}/>
        </h2>
      </div>
      <div className="flex items-center w-full flex-col md:flex-row py- md:py-6 md:gap-10  rounded-xl">
        {/* Image */}
        <div
          data-aos="fade-right"
          className="text-center lg:text-left  md:w-1/2  mt-10 md:my-0 space-y-3 font-medium"
        >
          <img
            src="https://scontent.fdac3-1.fna.fbcdn.net/v/t39.30808-6/275426596_681752789807040_4908994656486190322_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=173fa1&_nc_eui2=AeHvX4gYk7Ef5shGEJXOLwPi2HO1amC0PezYc7VqYLQ97NAprIvpcDsNr-Kdr_bTIYNXyGNf5d27Z9O1Xx_9QahV&_nc_ohc=gAyjNcwz3A0AX-DUC_n&_nc_zt=23&_nc_ht=scontent.fdac3-1.fna&oh=00_AfA-X41URxL6vi2T5z7cj9yzpcMJPYCNqgg7fs2dk7Bv9Q&oe=65D319EF"
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
          <p>
            I am 19 years old. I studied in Ishwarganj Government College, a
            reputed college in Ishwarganj. I am already educated in exceptional
            education and working in web development. I passed PSC in 2016 with
            GPA-5 from Fulkunri Kindergarten. Then I passed JSC and SSC with GPA
            3.79 and GPA 4.28 (Humanities) in 2018 and 2023 from reputed school
            Ishwarganj Bisweswari Government Pilot High School.
          </p>
        </div>
      </div>
    </Container>  </div>
  );
};

export default Education;
