import { Link } from "react-router-dom";
import Navbar from "./Components/Navbar";

import "./App.css";
import linkedIcon from "./assets/linkedin-svgrepo-com.svg";
import githubIcon from "./assets/github-svgrepo-com.svg";


interface AppProps {
  className?: string;
}

const App: React.FC<AppProps> = ({ className }) => {
  return (
    <div className={className}>
      <Navbar title="Agung.dev_" docTitle="Agung Suryo Sundoro" />

      <section className="flex flex-col justify-center items-center relative px-20 lg:flex-row sm:order-last">
        <div className="lg:flex-1 text-left tracking-widest my-10 lg:my-2">
          <span className="text-cyan-400 font-bold">Hi, my name is</span>
          <h1 className="text-3xl uppercase font-bold tracking-widest my-2">
            Agung Suryo Sundoro
          </h1>
		  <p className="text-xl font-semibold">I like to code fun stuff.</p>
          <p className="my-4 italic">
            I'm a skilled front-end developer weaving magic with HTML, CSS, and
            JavaScript to create visually captivating interfaces. With a
            burgeoning interest in the full-stack landscape.
          </p>

          <div className="flex flex-row">
            <a
              className="shadow-lg m-2 hover:shadow-xl"
              href="https://www.linkedin.com/in/agungsuryo/"
              target="_blank"
            >
              <img
                className="bg-white w-10 rounded-md border-2 border-black"
                src={linkedIcon}
                alt="linkedin icon"
              />
            </a>
            <a
              className="shadow-lg m-2 hover:shadow-xl"
              href="https://github.com/agungsuryo789"
              target="_blank"
            >
              <img
                className="bg-white w-10 rounded-md"
                src={githubIcon}
                alt="github icon"
              />
            </a>
          </div>
        </div>
        

        <Link
          to={`/about`}
          className="text-lg font-bold flex flex-row animate-bounce absolute left-20 bottom-32"
        >
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 m-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </section>
    </div>
  );
}

export default App;
