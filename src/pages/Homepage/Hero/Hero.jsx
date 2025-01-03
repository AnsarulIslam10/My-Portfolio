import React from "react";
import image2 from "../../../assets/profile-pic (2).png";
import bg from "../../../assets/bg.jpg";
import back from "../../../assets/back.jpg";
const Hero = () => {
  return (
    <div
      className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-around gap-4 text-white py-20"
      style={{
        backgroundImage: `url(${back})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        backgroundSize: "cover",
         transform: "scaleX(1)"
      }}
    >
      <div className="text-center md:text-start">
        <h3 className="text-2xl">Hello, I'm</h3>
        <h1 className="text-5xl font-bold mb-2">Ansarul Islam</h1>
        <h1 className="text-3xl font-semibold ">Frontend Developer</h1>
        <p className="max-w-lg mt-4">
          Turning lines of code into captivating digital experiences. Let's
          build something amazing!
        </p>
        <button className="btn btn-outline mt-6">Download Resume</button>
      </div>
      <div>
        <img className="w-[300px]" src={image2} alt="" />
      </div>
    </div>
  );
};

export default Hero;
