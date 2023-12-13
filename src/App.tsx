import { useState } from "react";
import Navbar from "./Components/Navbar";

import "./App.css";
import profilePicture from "./assets/profile-vector.jpg";
import codingPicture from "./assets/coding-vector.svg";
import reactIcon from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="py-4">
        <Navbar title="Title" />
      </header>

      <section className="grid grid-rows-2 items-center my-24 sm:grid-cols-4">
        <div className="col-span-2 text-left tracking-widest">
          <h1 className="text-4xl uppercase font-bold tracking-widest">
            Front-end React Developer
          </h1>
          <p className="my-4 italic">
            Hi,{" "}
            <span className="font-extrabold hover:not-italic">
              i'm Agung Suryo
            </span>
            . I'm a Front-end Developer based in Indonesia. I like to craft
            solid and scalable frontend products with great user experiences.
          </p>
        </div>
        <div className="col-span-2 order-first sm:order-last">
          <img
            className="rounded-full m-auto h-full"
            src={profilePicture}
            alt="Profile Picture"
          />
        </div>
      </section>

      <section className="tracking-widest my-20">
        <h1 className="text-4xl text-center uppercase font-bold tracking-widest my-10">
          My Expertise
        </h1>
        <div className="grid grid-rows-2 border-2 border-white sm:grid-cols-2">
          <div className="flex flex-row text-center p-6">
            <img src={reactIcon} alt="react icon" className="w-10" />
            <h1 className="underline decoration-teal-400 decoration-4 uppercase font-bold text-2xl m-auto">
              Frontend Developer
            </h1>
          </div>
          <div className="text-center p-6">
            <p className="code-editor-style">
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              accusantium at ullam perspiciatis tempore esse nostrum deserunt
              est laborum ea. Tenetur corporis velit repudiandae tempora, natus
              corrupti voluptatibus eveniet molestiae.
              <br />
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-rows-2 items-center my-20 sm:grid-cols-4">
        <div className="col-span-2">
          <img
            className="h-full"
            src={codingPicture}
            alt="Man coding, vector style"
          />
        </div>
        <div className="col-span-2 tracking-widest">
          <h1 className="text-4xl uppercase font-bold tracking-widest">
            Over The Years
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
    </>
  );
}

export default App;
