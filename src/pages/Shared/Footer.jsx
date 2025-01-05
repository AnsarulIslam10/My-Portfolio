import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-2 flex flex-col sm:flex-row justify-between bg-slate-800 items-center gap-4 p-6">
      <aside className="flex flex-col sm:flex-row items-center">
        <img
          className="w-10"
          src="https://i.ibb.co.com/9ctxrKH/favicon.png"
          alt=""
        />
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
        <div className="flex text-3xl text-cyan-500 gap-4">
          <a href="https://www.facebook.com/ansarulislamriyad" target="_blank">
            <FaFacebook className="cursor-pointer hover:scale-125 transition-all duration-200" />
          </a>
          <a href="https://github.com/AnsarulIslam10" target="_blank">
            <FaGithub className="cursor-pointer hover:scale-125 transition-all duration-200" />
          </a>
          <a
            href="https://www.linkedin.com/in/ansarul-islam-32a229318/"
            target="_blank"
          >
            <FaLinkedin className="cursor-pointer hover:scale-125 transition-all duration-200" />
          </a>
        </div>
    </footer>
  );
};

export default Footer;
