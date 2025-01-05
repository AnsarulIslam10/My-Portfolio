import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaCalendar, FaGithub, FaLink } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

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
    return <Loading></Loading>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-white">
      <div className="text-center">
        <div className="flex justify-between items-center mb-4">
          <Link
            to="/"
            className="btn btn-sm btn-outline border-cyan-500 text-cyan-500 hover:bg-transparent hover:text-cyan-600 hover:border-cyan-600 rounded-md flex items-center gap-2"
          >
            <FaArrowLeft /> Go Back
          </Link>
          <h1 className="text-2xl md:text-4xl font-semibold text-cyan-500">
            {project.name}
          </h1>
        </div>

        <img
          src={project.image}
          alt={project.name}
          className="w-full rounded-lg shadow-xl mb-6 object-cover h-64 sm:h-80 md:h-full"
        />
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 btn mb-4 sm:mb-0"
          >
            <FaLink /> View Live
          </a>
          <div className="flex gap-4">
            {project.githubServer ? (
              <>
                <a
                  href={project.githubClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 btn btn-outline flex items-center gap-2"
                >
                  <FaGithub /> Client Repo
                </a>
                <a
                  href={project.githubServer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 btn btn-outline flex items-center gap-2"
                >
                  <FaGithub /> Server Repo
                </a>
              </>
            ) : (
              <a
                href={project.githubClient}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 btn btn-outline flex items-center"
              >
                <FaGithub /> GitHub Repo
              </a>
            )}
          </div>
        </div>

        <p className="text-lg text-gray-400 mb-6 text-justify">{project.description}</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-6 text-cyan-500">
          Technologies Used
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {project.technologies.map((tech, index) => (
            <div
              key={index}
              className="text-center shadow-lg bg-cyan-900 p-4 flex flex-col items-center justify-center"
            >
              <img src={tech.logo} alt={tech.name} className="w-12 h-12 mb-2" />
              <p className="text-gray-300">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-500">Features</h2>
        <ul className="list-disc pl-6 text-gray-400">
          {Object.entries(project.features).map(([key, value], index) => (
            <li key={index} className="mb-2">
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-500">
          Challenges Faced
        </h2>
        <p className="text-gray-400 text-justify">{project.challenges}</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-500">
          Future Improvements
        </h2>
        <p className="text-gray-400 text-justify">{project.futureImprovement}</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-500">
          Creation Date
        </h2>
        <p className="text-gray-400 flex items-center gap-2">
          <FaCalendar className="text-cyan-500" /> {project.creationDate}
        </p>
      </div>
    </div>
  );
};

export default ProjectDetails;
