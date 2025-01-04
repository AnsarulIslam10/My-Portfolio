import { NavLink } from "react-router-dom";
import resume from "../../assets/Basic_Resume.docx.pdf";
import { Link } from 'react-scroll';
const Navbar = () => {
  const links = (
    <>
      <Link
        to={"/"}
        smooth={true}
        duration={500}
        className="relative px-2 cursor-pointer transition duration-200 hover:text-[#60f318]"
      >
        Home
      </Link>

      <Link
        to={"about"}
        smooth={true}
        duration={500}
        className="relative px-2 cursor-pointer transition duration-200 hover:text-[#60f318]"
      >
        About Me
      </Link>

      <Link
        to={"skills"}
        duration={500}
        className="relative px-2 cursor-pointer transition duration-200 hover:text-[#60f318]"
      >
        Skills
      </Link>

      <Link
        to={"projects"}
        duration={500}
        className="relative px-2 cursor-pointer transition duration-200 hover:text-[#60f318]"
      >
        Projects
      </Link>

      <Link
        to={"contact"}
        duration={500}
        className="relative px-2 cursor-pointer transition duration-200 hover:text-[#60f318]"
      >
        Contact
      </Link>
    </>
  );
  return (
    <div className="navbar  sticky top-0 z-20 backdrop-blur-lg">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Riyad</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a href={resume} download>
          <button className="btn btn-outline mt-6">Download Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
