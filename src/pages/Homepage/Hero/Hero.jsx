import React from "react";
import riyadpfp from "../../../assets/ansarul.png";
import riyad from "../../../assets/2.jpg";
import resume from "../../../assets/Resume_of_Ansarul_Islam.pdf";
import back from "../../../assets/back.jpg";
import {
  FaCode,
  FaFacebook,
  FaGithub,
  FaLaptopCode,
  FaLinkedin,
} from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text1] = useTypewriter({
    words: [
      "Frontend Developer",
      "React & JavaScript Enthusiast",
      "Aspiring MERN Stack Developer",
    ],
    loop: true,
  });

  return (
    <div
      className="relative flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-8 text-white py-20 px-6"
      style={{
        backgroundImage: `url(${back})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 text-center md:text-left md:max-w-xl">
        <h1 className="text-5xl font-extrabold text-cyan-500 mb-4">
          Ansarul Islam
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl flex items-center gap-1 font-semibold text-cyan-200 mb-4">
          <FaCode />‎ {text1}
        </h2>
        <p className="max-w-lg mt-4 text-gray-300 text-lg">
          Passionate about creating interactive and user-friendly web
          experiences. Let's collaborate and turn ideas into reality!
        </p>

        <h3 className="uppercase mt-6 mb-4 text-gray-300">Connect with me</h3>
        <div className="flex justify-center md:justify-start text-4xl text-cyan-500 gap-6 mb-6">
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
          <button className="shiny-button btn btn-outline border-cyan-500 text-cyan-500 hover:text-cyan-600 font-bold uppercase rounded-md hover:bg-transparent mt-6">
            Download Resume
          </button>
        </a>
      </div>

      <div className="relative animate__animated animate__zoomIn z-10 mt-6 md:mt-0 w-[380px] h-[380px] rounded-3xl">
        <div className="absolute inset-0 rounded-full border-[8px] border-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 animate-spin-slow"></div>
        <img
          className="relative w-full h-full object-cover rounded-full p-2"
          src={riyad}
          alt="Ansarul Islam"
        />
      </div>
    </div>
  );
};

export default Hero;
