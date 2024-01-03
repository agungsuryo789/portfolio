import Navbar from "./Components/Navbar";

import "./App.css";
import codingPicture from "./assets/coding-vector.svg";
import reactIcon from "./assets/react.svg";
import linkedIcon from "./assets/linkedin-svgrepo-com.svg";
import githubIcon from "./assets/github-svgrepo-com.svg";
import undrawWebsite from "./assets/undraw_website.svg";
import photoProfile from "./assets/vector-photo.svg";

interface Project {
  title: string;
  img: string;
  desc: string;
  url: string;
  tech: string[];
}

function App() {
  const data: Project[] = [
    {
      title: "Title 1",
      img: undrawWebsite,
      desc: "lorem ipsum dolor sit amet, consectetur",
      url: "https://github.com/",
      tech: ["react", "redux", "typescript"],
    },
    {
      title: "Title 2",
      img: undrawWebsite,
      desc: "lorem ipsum dolor sit amet, consectetur",
      url: "https://github.com/",
      tech: ["react", "redux", "typescript"],
    },
    {
      title: "Title 3",
      img: undrawWebsite,
      desc: "lorem ipsum dolor sit amet, consectetur",
      url: "https://github.com/",
      tech: ["react", "redux", "typescript"],
    },
  ];

  return (
    <>
      <Navbar title="Agung.dev_" docTitle="Agung Suryo Sundoro" />

      <section className="flex flex-col justify-center items-center lg:flex-row sm:order-last">
        <div className="lg:flex-1 text-left tracking-widest my-10 lg:my-2">
          <h1 className="text-4xl uppercase font-bold tracking-widest">
            Front-end Developer
          </h1>
          <p className="my-4 italic">
            Hi,{" "}
            <span className="font-extrabold hover:not-italic">
              i'm Agung Suryo
            </span>
            . I'm a Front-end Developer based in Indonesia. I like to craft
            solid and scalable frontend products with great user experiences.
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
        <div className="lg:flex-none order-first my-10 sm:order-last lg:my-2">
          <img
            className="rounded-full w-auto transform-gpu transition-transform duration-300 hover:scale-105 hover:rotate-6 hover:shadow-xl"
            src={photoProfile}
            alt="Profile Picture"
          />
        </div>
      </section>
{/* 
      <section className="tracking-widest">
        <h1 className="text-4xl text-center uppercase font-bold tracking-widest my-10">
          <span className="text-gray-500">/</span>My_Expertise
        </h1>
        <div className="grid grid-rows-2 border-double border-4 border-black sm:grid-cols-1">
          <div className="flex flex-row justify-center align-center p-6">
            <img src={reactIcon} alt="react icon" className="w-10" />
            <h1 className="tracking-widest uppercase font-bold text-2xl my-auto mx-2">
              <span className="custom-underline-blue">Frontend Dev</span>
              <br />
              React, Vue
            </h1>
          </div>
          <div className="font-bold text-center p-6">
            <p>
              Over 2 years of UI Development. Experienced in HTML, CSS,
              Javascript, React, Vue, Typescript, Nuxtjs, Tailwind CSS.
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-rows-2 items-center sm:grid-cols-4">
        <div className="col-span-2">
          <img
            className="h-full"
            src={codingPicture}
            alt="Man coding, vector style"
          />
        </div>
        <div className="col-span-2 tracking-widest">
          <h1 className="text-4xl uppercase font-bold tracking-widest">
            <span className="text-gray-500">/</span>Over_The_Years
          </h1>
          <p className="my-4">
            As Frontend Developer, I've built various websites and web
            application for companies ranging from marketing websites to complex
            solutions such as B2B E-Commerce apps with focus on fast, elegant
            and accessible user experiences.
          </p>
          <p>
            Currently, I work at CODR as a Frontend Engineer crafting thoughtful
            and inclusive experiences that adhere to web standards for B2B
            company.
          </p>
          <p className="my-4">
            Before now, I was Frontend Engineer at VHP Software(Sindata), where
            I worked on a suite of tools and services tailored towards Hotel
            Management Software for all need of the hotel industry.
          </p>
        </div>
      </section>

      <section>
        <h1 className="text-4xl text-center uppercase font-bold tracking-widest my-10">
          <span className="text-gray-500">/</span>Projects
        </h1>
        <div className="grid grid-rows-2 gap-4 sm:grid-cols-2">
          {data.map((item, i) => (
            <div className="p-4 shadow-md rounded-lg hover:shadow-xl" key={i}>
              <a href={item.url} target="_blank">
                <img className="w-1/2 m-auto" src={item.img} alt="" />
              </a>
              <h3 className="font-bold">{item.title}</h3>
              <p>{item.desc}</p>
              <div className="flex flex-row">
                {item.tech.length > 0
                  ? item.tech.map((tech) => (
                      <span className="p-2 shadow-lg rounded-sm font-bold">
                        {tech}
                      </span>
                    ))
                  : null}
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </>
  );
}

export default App;
