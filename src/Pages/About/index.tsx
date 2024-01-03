import Navbar from "../../Components/Navbar";

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <div className={className}>
      <Navbar title="Agung.dev_" docTitle="Agung Suryo Sundoro | About" />
    </div>
  );
};

export default About;
