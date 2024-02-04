interface ExperienceProps {
  className?: string;
}

const Resume: React.FC<ExperienceProps> = ({ className }) => {
  return (
    <div className={className}>
	  <section className="flex flex-col justify-center items-center px-20">
		<h2>Under Construction</h2>
	  </section>
    </div>
  );
};

export default Resume;
