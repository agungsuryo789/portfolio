import { useState } from "react";
import Navbar from "./Components/Navbar";

import "./App.css";
import profilePicture from "./assets/profile-vector.jpg";
import codingPicture from "./assets/coding-vector.svg";

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
          <p className="text-base my-4 italic">
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

      <section className="grid grid-rows-2 items-center my-20 sm:grid-cols-4">
        <div className="col-span-2">
          <img
            className="h-full"
            src={codingPicture}
            alt="Man coding, vector style"
          />
        </div>
        <div className="col-span-2 tracking-widest">
          <h1 className="text-5xl uppercase font-bold tracking-widest">
            My Expertise
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse in
            natus rerum recusandae dicta omnis impedit, quam temporibus quae
            maiores officiis obcaecati placeat ab eius doloremque, enim, illum
            fugiat provident?
          </p>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse in
            natus rerum recusandae dicta omnis impedit, quam temporibus quae
            maiores officiis obcaecati placeat ab eius doloremque, enim, illum
            fugiat provident?
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
