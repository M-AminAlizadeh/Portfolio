const Project = ({ project }: { project: any }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options).replace(' ', '.');
  };

  const formattedDate = formatDate(project.date);

  return (
    <a href={project.demoLink} target="_blank">
      <section className="flex items-end flex-wrap gap-1 sm:gap-2 justify-start">
        <h3 className="uppercase underline text-xl sm:text-2xl md:text-4xl lg:text-6xl 2xl:text-7xl">
          {project.name}
        </h3>
        <div className="flex text-sm">
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
