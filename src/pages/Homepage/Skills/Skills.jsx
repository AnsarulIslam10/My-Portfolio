import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact
} from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400 text-5xl" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-5xl" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-5xl" /> },
        { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white text-5xl" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-500 text-5xl" /> },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-5xl" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-200 text-5xl" /> },
      ],
    },
    {
      category: "Database & Tools",
      items: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-5xl" /> },
        { name: "Mongoose", icon: <SiMongoose className="text-red-500 text-5xl" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-600 text-5xl" /> },
        { name: "VS Code", icon: <VscVscode className="text-blue-600 text-5xl" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-600 text-5xl" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-600 text-5xl" /> },
      ],
    },
  ];

  return (
    <div id="skills" className="px-4 py-20">
      <h2 className="text-5xl font-bold text-center mb-16 text-cyan-500">
        My Skills
      </h2>
      <div className="space-y-16">
        {skills.map((skillCategory, index) => (
          <div key={index}>
            <h3 className="text-3xl text-cyan-400 font-semibold mb-8 border-l-4 border-cyan-500 pl-3">
              {skillCategory.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skillCategory.items.map((skill, idx) => (
                <Tilt
                  key={idx}
                  className="parallax-effect"
                  perspective={600}
                  scale={1.05}
                >
                  <div className="flex flex-col items-center justify-center bg-black/20 p-6 rounded-xl border border-cyan-500/20 transition-all duration-300 hover:scale-105 w-36 h-36 mx-auto">
                    <div className="mb-2">{skill.icon}</div>
                    <p className="text-base font-semibold text-gray-200 text-center">
                      {skill.name}
                    </p>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
