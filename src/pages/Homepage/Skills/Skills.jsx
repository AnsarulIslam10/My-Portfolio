import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

import html from "../../../assets/logos/html-5.svg";
import css from "../../../assets/logos/css.svg";
import firebase from "../../../assets/logos/firebase.svg";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        {
          name: "HTML",
          icon: <img src={html} alt="" />,
        },
        { name: "CSS", icon: <img src={css} alt="" /> },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="text-teal-400 text-4xl" />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-500 text-4xl" />,
        },
        { name: "React", icon: <FaReact className="text-cyan-500 text-4xl" /> },
      ],
    },
    {
      category: "Backend",
      items: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-500 text-4xl" />,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-gray-500 text-4xl" />,
        },
      ],
    },
    {
      category: "Database & Tools",
      items: [
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-700 text-4xl" />,
        },
        {
          name: "Firebase",
          icon: <img src={firebase} alt="" />,
        },
        {
          name: "Git",
          icon: <FaGitAlt className="text-orange-600 text-4xl" />,
        },
      ],
    },
  ];

  return (
    <div id="skills" className="my-16 px-4 md:px-12 lg:px-20">
      <h2 className="text-5xl font-bold text-center mb-12 text-white">
        My Skills
      </h2>
      <div className="space-y-12">
        {skills.map((skillCategory, index) => (
          <div key={index}>
            <h3 className="text-3xl font-semibold mb-6">
              {skillCategory.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skillCategory.items.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800 p-4 rounded-lg shadow-md text-center hover:shadow-lg hover:scale-110 duration-300 transition-all flex flex-col justify-center items-center"
                >
                  <div className="mb-4">{skill.icon}</div>
                  <p className="text-xl font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
