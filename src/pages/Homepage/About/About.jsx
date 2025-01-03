import React from "react";
import computerAnimation from "../../../assets/computer.json";
import Lottie from "lottie-react";

const About = () => {
  return (
    <div className="py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-24">
        <div className="flex justify-center md:justify-start">
          <div className="hover:scale-110 transform transition duration-300">
            <Lottie animationData={computerAnimation} />
          </div>
        </div>
        
        <div className="text-white space-y-6">
          <h1 className="text-5xl font-bold mb-4 text-center md:text-left">
            About Me
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            I’m Ansarul Islam, a frontend developer who began programming in 2020
            during the COVID lockdown. At first, I learned the basics of HTML,
            CSS, and Bootstrap, but I struggled with consistency and lacked proper
            guidance. Despite these challenges, my passion for programming pushed
            me to join the
            <span className="italic text-purple-400">
              Programming Hero web development course
            </span>
            . Alhamdulillah, my progress has been remarkable, and I've gained many
            valuable skills. I’m excited about the journey ahead and the
            opportunities to continue learning and growing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
