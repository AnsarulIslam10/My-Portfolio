import React from "react";

const Education = () => {
  return (
    <section id="education" className="my-16 px-4 md:px-12 lg:px-20">
      <h2 className="text-5xl font-bold text-center mb-12 text-white">
        Education
      </h2>
      <div className="bg-slate-800 p-8 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold mb-4 text-teal-400">
          Diploma in Computer Technology
        </h3>
        <p className="text-xl mb-2">Chapainawabganj Polytechnic Institute</p>
        <p className="text-lg text-gray-300">
          Current Semester: 8th (Final Semester)
        </p>
        <p className="text-lg text-gray-400 mt-2">Expected Graduation: 2025</p>
      </div>
    </section>
  );
};

export default Education;
