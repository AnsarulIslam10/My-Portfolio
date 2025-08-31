import { FaBars } from "react-icons/fa";
import resume from "../../assets/Resume_of_Ansarul_Islam.pdf";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const navItems = [
    { name: "About Me", id: "about", type: "section" },
    { name: "Skills", id: "skills", type: "section" },
    { name: "Education", id: "education", type: "section" },
    { name: "Projects", id: "projects", type: "section" },
    { name: "Contact", id: "contact", type: "section" },
    { name: "Blog", id: "/blog", type: "page" },
  ];

  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        const scrollPos = window.scrollY + window.innerHeight / 2;
        let currentSection = navItems[0].id;
        navItems.forEach((item) => {
          if (item.type === "section") {
            const el = document.getElementById(item.id);
            if (el && scrollPos >= el.offsetTop) {
              currentSection = item.id;
            }
          }
        });
        setActiveItem(currentSection);
      };
      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      const pageItem = navItems.find(
        (item) => item.type === "page" && location.pathname === item.id
      );
      setActiveItem(pageItem ? pageItem.id : "");
    }
  }, [location.pathname]);

  const handleNavClick = (item) => {
    if (item.type === "section") {
      if (location.pathname === "/") {
        scroller.scrollTo(item.id, {
          smooth: true,
          duration: 500,
          offset: -80,
        });
      } else {
        navigate("/", { replace: false });
        setTimeout(() => {
          scroller.scrollTo(item.id, {
            smooth: true,
            duration: 500,
            offset: -80,
          });
        }, 100);
      }
    } else if (item.type === "page") {
      navigate(item.id);
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
              {navItems.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`cursor-pointer px-2 py-1 rounded-md transition duration-200 ${
                    activeItem === item.id
                      ? "bg-cyan-500 text-black font-bold"
                      : "text-white hover:text-cyan-500"
                  }`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Logo / Name */}
        <Link to={"/"}>
          <span className="text-xl font-bold text-cyan-500 tracking-wide">
            <span className="text-primary">{"<"}</span>Ansarul{" "}
            <span className="text-primary">{"/>"}</span>
          </span>
        </Link>
      </div>

      {/* Navbar Center - Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`cursor-pointer px-3 py-1 rounded-md transition duration-200 ${
                activeItem === item.id
                  ? "border-b rounded-none border-cyan-500 text-white font-bold"
                  : "text-white hover:text-cyan-500"
              }`}
            >
              {item.name}
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
