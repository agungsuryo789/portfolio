import Navbar from "../../Components/Navbar";
import photoProfile from "../../assets/vector-photo.svg";

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <div className={className}>
      <Navbar title="Agung.dev_" docTitle="Agung Suryo Sundoro | About" />

      <section className="flex flex-col justify-center items-center px-20">
        <h1 className="text-4xl font-bold">
          <span className="text-gray-500">/</span>About Me.
        </h1>

        <div className="flex flex-col sm:flex-row justify-center items-center">
          <div className="basis-1/2">
            <p className="my-4">
              Hello! My name is Agung and I enjoy creating things that live on
              the internet. My interest in web development started back in 2016
              when I decided to try tinkering with CSS of a website and it did
              not take long to hook me in web development.
            </p>
            <p className="my-4">
              Fast-forward to today, and I’ve had the privilege of working at an
              Hotel software company, and a software house company. Currently
              i'm focusing on deepening my knowledge for Fullstack development
              and occasionaly learning other fun stuff such as game development
              or phyton.
            </p>
            <p className="my-4">
              Here are few technologies i've been working with recently.
            </p>
            <ul className="list-disc list-inside grid grid-cols-2">
              <li>Javascript (ES6+)</li>
              <li>React</li>
              <li>Vue</li>
              <li>Typescript</li>
              <li>Nodejs</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
          <div className="basis-1/2 my-10 sm:order-last lg:my-2">
            <img
              className="m-auto rounded-full transform-gpu transition-transform duration-300 hover:scale-105 hover:rotate-6 hover:shadow-xl"
              src={photoProfile}
              alt="Profile Picture"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
