const Project = ({ project }: { project: any }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options).replace(' ', '.');
  };

  const formattedDate = formatDate(project.date);

  return (
    <section className="border-2 flex items-end flex-wrap">
      <a
        href={project.demoLink}
        target="_blank"
        className="uppercase underline text-6xl"
      >
        {project.name}
      </a>
      <div className="flex text-sm border-2 ml-2">
        <span>{formattedDate} /&nbsp;</span>
        <div>
          {project.stacks.map((stack: string) => (
            <span key={stack}>{stack}, </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
