import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetchProjectData();
  }, [id]);

  const fetchProjectData = async () => {
    const url = `https://portfolio-server-sooty-eta.vercel.app/projects/${id}`;
    console.log("Requesting:", url);
    const { data } = await axios.get(url);
    setProject(data);
  };
  console.log(project);
  return (
    <div className="max-w-7xl mx-auto px-2">
      <h1> hello {project.name}</h1>
    </div>
  );
};

export default ProjectDetails;
