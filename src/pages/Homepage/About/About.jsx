import Lottie from "lottie-react";
import computerAnimation from "../../../assets/computer.json";

const About = () => {
  return (
    <div id="about" className="px-6 my-24">
      <h1 className="text-5xl mb-8 text-cyan-500 font-bold text-center">
        About Me
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center justify-items-center ">
        <div className="flex justify-center md:justify-start">
          <div className="hover:scale-110 transform transition duration-300">
            <Lottie animationData={computerAnimation} />
          </div>
        </div>

        <div className="text-white space-y-6">
          <p className="text-lg md:text-xl text-center lg:text-start text-gray-300 leading-relaxed text-">
            I'm <strong>Ansarul Islam</strong>, an aspiring Developer currently pursuing a BSc in Computer Science and Engineering at Northern University Bangladesh. I’m dedicated to crafting intuitive, responsive, and visually engaging web applications. I specialize in translating designs into seamless user interfaces while solving complex UI challenges with clean and efficient code. I'm quick to adapt to new technologies and evolving project needs, always aiming to enhance user experience and drive real engagement through thoughtful development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
