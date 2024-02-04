interface ProjectsProps {
  className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ className }) => {
  return (
    <div className={className}>
	  <section className="flex flex-col justify-center items-center px-20">
		<h2>Under Construction</h2>
	  </section>
    </div>
  );
};

export default Projects;
