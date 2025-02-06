import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col sm:flex-row justify-between items-center text-gray-300">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full sm:w-auto">
        <img
          className="w-12 sm:w-16"
          src="https://i.ibb.co.com/9ctxrKH/favicon.png"
          alt="Logo"
        />
        <p className="text-center sm:text-left text-sm sm:text-base">
          Copyright © {new Date().getFullYear()} - All Rights Reserved
        </p>
      </div>
      
      <div className="flex text-4xl text-cyan-500 gap-6 mt-4 sm:mt-0">
        <a
          href="https://www.facebook.com/ansarulislamriyad"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-all duration-200"
        >
          <FaFacebook className="cursor-pointer hover:scale-110 transition-all duration-200" />
        </a>
        <a
          href="https://github.com/AnsarulIslam10"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-all duration-200"
        >
          <FaGithub className="cursor-pointer hover:scale-110 transition-all duration-200" />
        </a>
        <a
          href="https://www.linkedin.com/in/ansarul-islam10"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition-all duration-200"
        >
          <FaLinkedin className="cursor-pointer hover:scale-110 transition-all duration-200" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
