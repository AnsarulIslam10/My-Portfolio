import { FaBars } from "react-icons/fa";
import resume from "../../assets/Resume_of_Ansarul_Islam.pdf";
import { Link } from 'react-scroll';
const Navbar = () => {
  const links = (
    <>
      <a
        href="#"
        className="relative text-white px-2 cursor-pointer transition duration-200 hover:text-cyan-500"
      >
        Home
      </a>

      <Link
        to={"about"}
        smooth={true}
        duration={500}
        offset={-80}
        className="relative text-white px-2 cursor-pointer transition duration-200 hover:text-cyan-500"
      >
        About Me
      </Link>

      <Link
        to={"skills"}
        duration={500}
        offset={-80}
        className="relative text-white px-2 cursor-pointer transition duration-200 hover:text-cyan-500"
      >
        Skills
      </Link>

      <Link
        to={"projects"}
        duration={500}
        offset={-80}
        className="relative text-white px-2 cursor-pointer transition duration-200 hover:text-cyan-500"
      >
        Projects
      </Link>

      <Link
        to={"contact"}
        duration={500}
        offset={-80}
        className="relative text-white px-2 cursor-pointer transition duration-200 hover:text-cyan-500"
      >
        Contact
      </Link>
    </>
  );
  return (
    <div className="navbar sticky top-0 z-20 backdrop-blur-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost px-0 mr-2 text-2xl lg:hidden text-cyan-500">
            <FaBars/>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 z-[1] mt-3 w-32 p-2 shadow text-lg space-y-2"
          >
            {links}
          </ul>
        </div>
        <a className=" text-cyan-500 font-bold text-lg md:text-3xl uppercase">Ansarul Islam</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a href={resume} download>
          <button className="btn btn-sm sm:btn-md animate__animated animate__pulse animate__infinite	infinite animate__slower	3s  shiny-button text-gray-900 font-bold uppercase rounded-md hover:bg-cyan-600 border-none bg-cyan-500">Download Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
