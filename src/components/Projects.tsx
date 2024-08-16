import { useState, useEffect } from 'react';
import Project from './Project';

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    fetch('/public/projects.json')
      .then((response) => response.json())
      .then((data) => setProjectsData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {projectsData.map((project: object) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
