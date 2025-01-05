import axios from "axios";
import React, { useEffect, useState } from "react";
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
            className="group relative bg-slate-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-cyan-500">
                {project.name}
              </h3>
              <p className="text-gray-300 mt-2">
                {project.description.split(" ").slice(0, 20).join(" ")}...
              </p>

              {/* View More Button */}
              <Link
                to={`/projects/${project._id}`}
                className="absolute bottom-0 left-0 right-0 btn btn-lg bg-slate-900 transform translate-y-full transition-all duration-500 text-cyan-500 group-hover:translate-y-0"
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
