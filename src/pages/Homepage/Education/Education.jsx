import React from "react";
import educationAnimation from "../../../assets/education.json";
import cnpi from "../../../assets/cnpi.jpeg";
import Lottie from "lottie-react";

const Education = () => {
  return (
    <section id="education" className="my-16 relative">
      <h2 className="text-5xl font-bold text-center mb-12 text-cyan-500">
        Education
      </h2>
      {/* Container with overlay */}
      <div
        className="flex items-center justify-around bg-slate-800 p-8 rounded-lg shadow-md relative"
        style={{
          backgroundImage: `url(${cnpi})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-85 rounded-lg"></div>

        <div className="relative z-10">
          <h3 className="text-4xl font-semibold mb-6 text-cyan-500">
            Diploma in Computer Technology
          </h3>
          <p className="text-xl text-cyan-200 mb-2">Chapainawabganj Polytechnic Institute</p>
          <p className="text-lg text-cyan-200">
            Current Semester: 8th (Final Semester)
          </p>
          <p className="text-lg text-cyan-200 mt-2">
            Expected Graduation: 2025
          </p>
        </div>
        <div className="relative hidden sm:block z-10">
          <Lottie className="w-44 md:w-64" animationData={educationAnimation} />
        </div>
      </div>
    </section>
  );
};

export default Education;
