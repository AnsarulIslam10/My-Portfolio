import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const { data } = await axios.get(
          "https://portfolio-server-sooty-eta.vercel.app/projects"
        );
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchAllPosts();
  }, []);

  return (
    <section id="projects" className="my-24">
      <h2 className="text-5xl font-bold text-cyan-500 text-center mb-12 ">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project._id}
            className="group relative flex flex-col bg-slate-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex-1">
              <h3 className="text-2xl font-semibold text-cyan-500">
                {project.name}
              </h3>
              <p className="text-gray-300 mt-2">
                {project.description.split(" ").slice(0, 20).join(" ")}...
              </p>
            </div>
            <div className="px-6 pb-6 flex justify-between">
              <a href={project.liveLink} target="_blank">
                <button className="btn bg-cyan-500 text-black hover:bg-cyan-600 border-none">
                  Live Site
                  <FaExternalLinkAlt />
                </button>
              </a>
              <Link
                to={`/projects/${project._id}`}
                className="btn btn-outline border-cyan-500 hover:bg-cyan-500 text-cyan-500"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
