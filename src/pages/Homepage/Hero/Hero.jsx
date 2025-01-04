import React from "react";
import riyadpfp from "../../../assets/riyad pfp.png";
import riyad from "../../../assets/Riyad.png";
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
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-center md:text-start">
        <h3 className="text-2xl font-semibold">Hello, I'm</h3>
        <h1 className="text-5xl font-bold mb-2">Ansarul Islam</h1>
        <h1 className="text-3xl font-semibold text-gray-300">
          Frontend Developer
        </h1>
        <p className="max-w-lg mt-4 text-lg">
          Turning lines of code into captivating digital experiences. Let's
          build something amazing!
        </p>
        <h3 className="uppercase mt-6 mb-4">Find me on</h3>
        <div className="flex text-4xl gap-4 mb-6">
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
        <a href={resume} download>
          <button className="btn btn-outline mt-6 hover:bg-white hover:text-black transition duration-300">
            Download Resume
          </button>
        </a>
      </div>

      <div className="relative z-10 mt-6 md:mt-0">
        <img
          className="w-[450px] bg-slate-400 border-t-cyan-500 border-t-[20px] border-r-[20px] border-r-cyan-500 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
          src={riyadpfp}
          alt="Ansarul Islam"
        />
      </div>
    </div>
  );
};

export default Hero;
