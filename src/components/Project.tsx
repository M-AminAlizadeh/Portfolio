const Project = ({ project }: { project: any }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options).replace(' ', '.');
  };

  const formattedDate = formatDate(project.date);

  return (
    <a href={project.demoLink} target="_blank">
      <section className="dark:text-white flex items-end flex-wrap md:flex-nowrap gap-1 sm:gap-2 justify-start">
        <h3 className="uppercase underline text-xl sm:text-2xl md:text-3xl lg:text-5xl 2xl:text-7xl">
          {project.name}
        </h3>
        <div className="flex text-xs lg:text-sm flex-wrap">
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
