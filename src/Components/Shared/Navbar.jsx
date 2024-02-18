import ContactIcon from "../ContactIcon/ContactIcon";
import { Link, animateScroll as scroll } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link
          to="home"
          onClick={() => scroll.scrollToTop()}
          smooth={true}
          duration={500}
        >
          Home
        </Link>
      </li>
      <li>
        <Link to="about-me" smooth={true} duration={700} offset={-100}>
          About Me
        </Link>
      </li>
      <li>
        <Link to="skills" smooth={true} duration={500} offset={-80}>
          Skills
        </Link>
      </li>
      <li>
        <Link to="projects" smooth={true} duration={700} offset={-40}>
          Projects
        </Link>
      </li>
      <li>
        <Link to="contact" smooth={true} duration={1000} offset={-100}>
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="  bg-base-300 py-1 fixed left-0 right-0 z-50">
      <div className="navbar max-w-7xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase font-bold"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost btn-sm md:btn-md text-xl md:text-4xl cursor-wait font-bold italic bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
            H4K1[\/]
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 uppercase font-bold">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <ContactIcon></ContactIcon>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
