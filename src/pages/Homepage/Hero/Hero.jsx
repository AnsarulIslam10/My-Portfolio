import React from "react";
import image2 from "../../../assets/profile-pic (2).png";
import resume from "../../../assets/Basic_Resume.docx.pdf";
import back from "../../../assets/back.jpg";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col-reverse md:flex-row items-center justify-center md:justify-around gap-4 text-white py-20 px-6"
      style={{
        backgroundImage: `url(${back})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-center md:text-start">
        <h3 className="text-2xl font-semibold">Hello, I'm</h3>
        <h1 className="text-5xl font-bold mb-2">Ansarul Islam</h1>
        <h1 className="text-3xl font-semibold text-gray-300">Frontend Developer</h1>
        <p className="max-w-lg mt-4 text-lg">
          Turning lines of code into captivating digital experiences. Let's
          build something amazing!
        </p>
        <a href={resume} download>
          <button className="btn btn-outline mt-6 hover:bg-white hover:text-black transition duration-300">
            Download Resume
          </button>
        </a>
      </div>
      
      <div className="relative z-10 mt-6 md:mt-0">
        <img
          className="w-[300px] rounded-full shadow-lg transform transition duration-300 hover:scale-105"
          src={image2}
          alt="Ansarul Islam"
        />
      </div>
    </div>
  );
};

export default Hero;
