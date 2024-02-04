import { useEffect, useState } from "react";

import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

import "./App.css";

interface AppProps {
  className?: string;
}

const App: React.FC<AppProps> = () => {
  const [isVisibleScroll, setIsVisibleScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisibleScroll(true);
      } else {
        setIsVisibleScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToView = (element: string) => {
    const targetElement = document.getElementById(element);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const handleScrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`snap-y`}>
      <Navbar
        title="Agung"
        docTitle="Agung Suryo Sundoro"
        scrollToView={handleScrollToView}
      />

      <Home />

      <section
        id="about"
        className="flex flex-col snap-start justify-center items-center relative px-20 lg:flex-row sm:order-last"
      >
        <h1 className="uppercase text-5xl font-extrabold tracking-widest">
          About
        </h1>
      </section>

      <section
        id="experience"
        className="flex flex-col snap-start justify-center items-center relative px-20 lg:flex-row sm:order-last"
      >
        <h1 className="uppercase text-5xl font-extrabold tracking-widest">
          Experience
        </h1>
      </section>

      <section
        id="projects"
        className="flex flex-col snap-start justify-center items-center relative px-20 lg:flex-row sm:order-last"
      >
        <h1 className="uppercase text-5xl font-extrabold tracking-widest">
          Projects
        </h1>
      </section>

      <button
        className={`fixed bottom-10 right-0 rounded-full p-2 border-2 border-cyan-900 z-50 m-2 w-14 h-14 ${!isVisibleScroll ? "hidden" : "block"}`}
        onClick={handleScrolltoTop}
      >
        <i className="fa fa-angle-double-up" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default App;
