import { useForm } from "react-hook-form";
import Container from "../../Components/Shared/Container";
import Typewriter from "typewriter-effect";
import { IoMailSharp } from "react-icons/io5";
import { FaWhatsappSquare } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1500,
});


const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  // console.log(errors);

  return (
    <Container>
      <div className="flex justify-center mb-5 ">
        <h2 className="text-4xl text-center font-bold border-b-4 pb-4 inline-block px-5">
          <Typewriter
            options={{
              strings: ["Contact"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </div>
      <div className="flex  items-center w-full flex-col-reverse md:flex-row-reverse py-5 md:py-12  rounded-xl">
        {/* Contact link */}
        <div data-aos="zoom-in-left" className="text-center lg:text-left md:w-1/2  mt-10 md:my-0 space-y-3 font-medium">
          {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
          <div className="flex gap-2  ">
            <IoMailSharp className="text-3xl  text-blue-600" />
            <a
              href="mailto:jakirulislamhakim@gmail.com"
              className="text-lg md:text-xl hover:text-blue-700 hover:underline"
            >
              jakirulislamhakim@gmail.com
            </a>
          </div>
          <div className="flex gap-2  ">
            <FaWhatsappSquare className="text-3xl text-[#25D366]" />
            <a
              href="tel:+8801736100945"
              className="text-lg md:text-xl  hover:text-blue-700 hover:underline"
            >
              +8801736100945
            </a>
            <span className="font-bold">(whatsapp)</span>
          </div>
        </div>
        {/* contact form */}
        <div data-aos="flip-right" className="card shrink-0 w-full max-w-sm mx-auto  shadow-2xl bg-base-100 md:w-1/2 ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered"
                {...register("name", { required: "Name Is Required" })}
              />
              <p className="text-red-500 font-semibold">
                {errors?.name?.message}
              </p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered"
                {...register("email", {
                  required: "Email Is Required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please write a valid email",
                  },
                })}
              />
              <p className="text-red-500 font-semibold">
                {errors?.email?.message}
              </p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-info"
                maxLength={200}
                rows={4}
                placeholder="Your message"
                {...register("message", {
                  required: "Message Is Required",
                  maxLength: {
                    value: 120,
                    message: "Please give me a sort message",
                  },
                })}
              ></textarea>
              <p className="text-red-500 font-semibold">
                {errors?.message?.message}
              </p>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
