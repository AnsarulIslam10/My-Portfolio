import Lottie from "lottie-react";
import educationAnimation from "../../../assets/education.json";
import nub from "../../../assets/NUB.png";

const Education = () => {
  return (
    <section id="education" className="my-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 text-cyan-500">
          Education
        </h2>

        {/* Education Card */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-cyan-900/30">
          {/* Background with overlay */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${nub})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-cyan-900/90 z-0"></div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center p-8 lg:p-12">
            {/* Animation Section */}
            <div className="w-full lg:w-2/5 mb-10 lg:mb-0 flex justify-center">
              <div className="w-64 h-64 lg:w-80 lg:h-80">
                <Lottie animationData={educationAnimation} loop={true} />
              </div>
            </div>

            {/* Education Details */}
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <div className="mb-6">
                <span className="inline-block px-4 py-1 text-sm font-semibold text-cyan-100 bg-cyan-700/30 rounded-full mb-4">
                  CURRENT EDUCATION
                </span>
                <h3 className="text-4xl font-bold text-cyan-400 mb-2">
                  Northern University Bangladesh
                </h3>
                <p className="text-2xl font-semibold text-cyan-300 mb-3">
                  BSc in Computer Science & Engineering
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mb-6">
                  <div className="flex items-center text-cyan-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>1st Semester</span>
                  </div>
                  <div className="flex items-center text-cyan-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Ongoing</span>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between text-cyan-200 text-sm mb-2">
                  <span>Degree Progress</span>
                  <span>8%</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full"
                    style={{ width: "8%" }}
                  ></div>
                </div>
              </div>

              {/* Relevant coursework */}
              <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/50">
                <h4 className="text-xl font-semibold text-cyan-400 mb-3 flex items-center justify-center lg:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Relevant Coursework
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center text-cyan-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2 text-cyan-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Data Structures & Algorithms
                  </div>
                  <div className="flex items-center text-cyan-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2 text-cyan-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Web Development
                  </div>
                  <div className="flex items-center text-cyan-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2 text-cyan-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Database Management
                  </div>
                  <div className="flex items-center text-cyan-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2 text-cyan-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Computer Networking
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
