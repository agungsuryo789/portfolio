import Navbar from "../../Components/Navbar";

interface ExperienceProps {
  className?: string;
}

const Resume: React.FC<ExperienceProps> = ({ className }) => {
  return (
    <div className={className}>
      <Navbar title="Agung.dev_" docTitle="Agung Suryo Sundoro | Experience" />
    </div>
  );
};

export default Resume;
