import { FaBars } from "react-icons/fa";
import resume from "../../assets/Resume_of_Ansarul_Islam.pdf";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { name: "About Me", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        const scrollPos = window.scrollY + window.innerHeight / 2;
        let currentSection = sections[0].id;
        sections.forEach((sec) => {
          const el = document.getElementById(sec.id);
          if (el && scrollPos >= el.offsetTop) {
            currentSection = sec.id;
          }
        });
        setActiveSection(currentSection);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll(); // run once to set initial active section
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setActiveSection("");
    }
  }, [location.pathname]);

  const handleNavClick = (sectionId) => {
    if (location.pathname === "/") {
      scroller.scrollTo(sectionId, {
        smooth: true,
        duration: 500,
        offset: -80,
      });
    } else {
      navigate("/", { replace: false });
      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          smooth: true,
          duration: 500,
          offset: -80,
        });
      }, 100);
    }
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <div className="navbar sticky top-0 z-20 backdrop-blur-lg">
      {/* Navbar Start */}
      <div className="navbar-start flex items-center">
        {/* Mobile Dropdown */}
        <div className="dropdown lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost px-0 mr-2 text-2xl text-cyan-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </div>
          {menuOpen && (
            <ul className="menu menu-sm dropdown-content bg-base-100 z-[1] mt-3 w-40 p-2 shadow text-lg space-y-2 absolute left-0">
              {sections.map((sec) => (
                <li
                  key={sec.id}
                  onClick={() => handleNavClick(sec.id)}
                  className={`cursor-pointer px-2 py-1 rounded-md transition duration-200 ${
                    activeSection === sec.id
                      ? "bg-cyan-500 text-black font-bold"
                      : "text-white hover:text-cyan-500"
                  }`}
                >
                  {sec.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Logo / Name */}
        <a className="text-cyan-500 font-bold text-lg md:text-3xl uppercase">
          Ansarul Islam
        </a>
      </div>

      {/* Navbar Center - Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {sections.map((sec) => (
            <li
              key={sec.id}
              onClick={() => handleNavClick(sec.id)}
              className={`cursor-pointer px-3 py-1 rounded-md transition duration-200 ${
                activeSection === sec.id
                  ? "border-b rounded-none border-cyan-500 text-white font-bold"
                  : "text-white hover:text-cyan-500"
              }`}
            >
              {sec.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <a href={resume} download>
          <button className="btn btn-sm sm:btn-md animate__animated animate__pulse animate__infinite animate__slower shiny-button text-gray-900 font-bold uppercase rounded-md hover:bg-cyan-600 border-none bg-cyan-500">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
