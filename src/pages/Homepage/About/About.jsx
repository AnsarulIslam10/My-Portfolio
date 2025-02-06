import React from "react";
import computerAnimation from "../../../assets/computer.json";
import Lottie from "lottie-react";

const About = () => {
  return (
    <div id="about" className="px-6 my-24">
      <h1 className="text-5xl mb-8 text-cyan-500 font-bold text-center">
        About Me
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
        <div className="flex justify-center md:justify-start">
          <div className="hover:scale-110 transform transition duration-300">
            <Lottie animationData={computerAnimation} />
          </div>
        </div>

        <div className="text-white space-y-6">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-">
            Hi, I’m <strong>Ansarul Islam</strong>, a Frontend Web Developer. I
            have a Diploma in <em>Computer Technology</em> and I'm passionate
            about building dynamic and interactive web applications. I initially
            learned HTML, CSS, and Bootstrap on my own but lacked proper
            guidance. My real progress began when I joined the{" "}
            <span className="italic text-purple-400">Programming Hero's</span>{" "}
            web development course, which helped me refine my skills in
            JavaScript, React, and front-end development. I enjoy
            problem-solving, optimizing website performance, and creating
            user-friendly applications. Some of my projects include a Medical
            Camp website, a Volunteer Management system, and a Game Review Site.
            I love turning ideas into reality with clean and efficient code.
            Beyond coding, I’m into gaming, and reading comics. I believe in
            writing clean code, keeping things efficient, and always learning.
            Let’s connect and build something awesome!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
