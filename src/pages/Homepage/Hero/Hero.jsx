import React from "react";
import riyadpfp from "../../../assets/ansarul.png";
import riyad from "../../../assets/riyad.png";
import resume from "../../../assets/Basic_Resume.docx.pdf";
import back from "../../../assets/back.jpg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col-reverse md:flex-row items-center justify-center md:justify-around gap-4 text-white py-20 px-6"
      style={{
        backgroundImage: `url(${back})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-center md:text-start">
        <h3 className="text-2xl font-semibold text-gray-300">Hello, I'm</h3>
        <h1 className="text-5xl font-bold text-cyan-500 mb-2">Ansarul Islam</h1>
        <h2 className="text-3xl font-semibold text-cyan-200">
          Frontend Developer
        </h2>
        <p className="max-w-lg mt-4 text-gray-400 text-lg">
          Passionate about creating interactive and user-friendly web
          experiences. Let's collaborate and turn ideas into reality!
        </p>

        <h3 className="uppercase mt-6 mb-4 text-gray-300">Connect with me</h3>
        <div className="flex text-4xl text-cyan-500 gap-6 mb-6">
          <a
            href="https://www.facebook.com/ansarulislamriyad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="cursor-pointer hover:scale-125 transition-all duration-200" />
          </a>
          <a
            href="https://github.com/AnsarulIslam10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="cursor-pointer hover:scale-125 transition-all duration-200" />
          </a>
          <a
            href="https://www.linkedin.com/in/ansarul-islam-32a229318/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="cursor-pointer hover:scale-125 transition-all duration-200" />
          </a>
        </div>

        <a href={resume} download>
          <button className="btn btn-outline border-cyan-500 text-cyan-500 hover:text-cyan-600 font-bold uppercase rounded-md hover:bg-transparent mt-6">
            Download Resume
          </button>
        </a>
      </div>

      <div className="relative z-10 mt-6 md:mt-0">
        <img
          className="w-[380px] rounded-full border-8 border-cyan-600 transform transition duration-300 hover:scale-105"
          src={riyadpfp}
          alt="Ansarul Islam"
        />

      </div>
    </div>
  );
};

export default Hero;
