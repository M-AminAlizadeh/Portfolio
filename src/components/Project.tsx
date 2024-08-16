const Project = ({ project }: { project: any }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options).replace(' ', '.');
  };

  const formattedDate = formatDate(project.date);

  return (
    <a href={project.demoLink} target="_blank">
      <section className="flex items-end flex-wrap">
        <h3 className="uppercase underline text-6xl">{project.name}</h3>
        <div className="flex text-sm ml-2">
          <span>{formattedDate} /&nbsp;</span>
          <div>
            {project.stacks.map((stack: string) => (
              <span key={stack}>{stack}, </span>
            ))}
          </div>
        </div>
      </section>
    </a>
  );
};

export default Project;
