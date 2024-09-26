import { useState, useEffect } from 'react';
import Project from './Project';

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => setProjectsData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <article className="h-[60vh] flex flex-col gap-10 overflow-y-scroll">
      {projectsData.map((project: { id: number }) => (
        <Project key={project.id} project={project} />
      ))}
    </article>
  );
};

export default Projects;
