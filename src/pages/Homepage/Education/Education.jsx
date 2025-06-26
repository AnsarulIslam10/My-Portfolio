import React from "react";
import educationAnimation from "../../../assets/education.json";
import cnpi from "../../../assets/cnpi.jpeg";
import nub from "../../../assets/NUB.png"
import Lottie from "lottie-react";

const Education = () => {
  return (
    <section id="education" className="my-16 relative">
      <h2 className="text-5xl font-bold text-center mb-12 text-cyan-500">
        Education
      </h2>
      {/* Container with overlay */}
      <div
        className="flex flex-col md:flex-row items-center justify-around bg-slate-800 p-8 py-16 rounded-lg shadow-md relative overflow-hidden"
        style={{
          backgroundImage: `url(${nub})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-80 rounded-lg"></div>

        {/* Education Details */}
        <div className="relative z-10 w-full  mb-8 md:mb-0 text-center">
          {/* <h3 className="text-4xl font-semibold mb-6 text-cyan-500">
            Bachelor of Science
          </h3> */}
          <p className="text-3xl text-cyan-300 font-bold mb-2">
            Northern University Bangladesh
          </p>
          <p className="text-2xl text-cyan-300 font-bold mb-2">
            BSc in Computer Science & Engineering
          </p>
          <p className="text-xl text-cyan-200 mb-4">Semester: 1st</p>
          <p className="text-xl text-cyan-200 mb-2">Status: Ongoing</p>
        </div>

        {/* Relevant Coursework */}
        {/* <div className="relative z-10 w-full md:w-1/2">
          <h4 className="text-2xl font-semibold text-cyan-500 mb-4">
            Relevant Coursework:
          </h4>
          <ul className="list-disc list-inside text-lg text-cyan-200 space-y-2">
            <li className="">
              Data Structures and Algorithms
            </li>
            <li className="">
              Web Development
            </li>
            <li className="">
              Database Management Systems
            </li>
            <li className="">
              Networking
            </li>
          </ul>
        </div> */}

      </div>
    </section>
  );
};

export default Education;