import axios from "axios";
import { useEffect, useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetchProjectData();
  }, [id]);

  const fetchProjectData = async () => {
    const url = `https://portfolio-server-sooty-eta.vercel.app/projects/${id}`;
    try {
      const { data } = await axios.get(url);
      setProject(data);
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  };

  if (!project) {
    return <div className="text-white text-center py-8">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-slate-800 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-4 text-yellow-500">
          {project.name}
        </h1>

        <img
          src={project.image}
          alt={project.name}
          className="w-full rounded-lg shadow-xl mb-6"
        />
        <div className="mt-8 flex justify-between items-center">
          <div>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 btn mb-4"
            >
              <FaLink/> View Live
            </a>
          </div>
          <div className="flex gap-6">
            {/* Conditionally render GitHub buttons */}
            {project.githubServer ? (
              <>
                <a
                  href={project.githubClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 btn btn-outline"
                >
                  <FaGithub/> Client Repo
                </a>
                <a
                  href={project.githubServer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 btn btn-outline "
                >
                  <FaGithub/> Server Repo
                </a>
              </>
            ) : (
              <a
                href={project.githubClient}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                <FaGithub/> GitHub Repo
              </a>
            )}
          </div>
        </div>

        <p className="text-lg text-gray-400 mb-6">{project.description}</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-6">
          {project.technologies.map((tech, index) => (
            <div key={index} className="text-center border p-4 flex flex-col items-center justify-center w-20 h-20">
              <img src={tech.logo} alt={tech.name} className="w-12 h-12 mb-2" />
              <p className="text-gray-400">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
          Features
        </h2>
        <ul className="list-disc pl-6 text-gray-400">
          {Object.entries(project.features).map(([key, value], index) => (
            <li key={index} className="mb-2">
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
          Challenges Faced
        </h2>
        <p className="text-gray-400">{project.challenges}</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
          Future Improvements
        </h2>
        <p className="text-gray-400">{project.futureImprovement}</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
          Creation Date
        </h2>
        <p className="text-gray-400">{project.creationDate}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
