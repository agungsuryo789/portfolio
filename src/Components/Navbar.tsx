import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "./UI/Button";
import "./navbar.css";

type callbackType = (param1: string) => void;

interface Props {
  title: string;
  docTitle?: string;
  scrollToView: callbackType;
}

const Navbar: React.FC<Props> = ({ title, docTitle, scrollToView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  let progress: number;

  useEffect(() => {
    document.title = docTitle || "";

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToView = (element: string) => {
    scrollToView(element);
  };

  return (
    <nav className="flex flex-row justify-between sticky top-0 p-3 z-10">
      <Link to="/">
        <h1
          className="text-3xl lowercase font-extrabold tracking-wider"
          style={{ transform: isScrolled ? "scale(2)" : "scale(1)" }}
        >
          {(isScrolled && "a") || title}
        </h1>
      </Link>
      <div className="hidden lg:inline-block">
        <ul className="nav-ul flex flex-row justify-end list-none text-lg font-bold">
          <li className="m-2">
            <button
              className="nav-link"
              onClick={() => handleScrollToView("about")}
            >
              About
            </button>
          </li>
          <li className="m-2">
            <button
              className="nav-link"
              onClick={() => handleScrollToView("experience")}
            >
              Experience
            </button>
          </li>
          <li className="m-2">
            <button
              className="nav-link"
              onClick={() => handleScrollToView("projects")}
            >
              Projects
            </button>
          </li>
          <li className="m-2 text-xl">
            <a className="nav-link" href={`#`} target="__blank">
              <b className="text-cyan-500">Resume</b>
            </a>
          </li>
        </ul>
      </div>
      <div className="relative text-right lg:hidden">
        <Button
          className="bg-transparent m-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </Button>

        <div
          className={`absolute top-8 right-1 border-1 w-36 p-2 shadow-lg bg-white ${
            isOpen ? "display-block" : "hidden"
          }`}
        >
          <ul className="list-none text-lg">
            <li className="m-2">
              <Link to={`/about`}>
                <span className="text-gray-500">/</span>
                <b>About</b>
              </Link>
            </li>
            <li className="m-2">
              <Link to={`/experience`}>
                <span className="text-gray-500">/</span>
                <b>Experience</b>
              </Link>
            </li>
            <li className="m-2">
              <Link to={`/projects`}>
                <span className="text-gray-500">/</span>
                <b>Projects</b>
              </Link>
            </li>
            <li className="m-2 text-xl">
              <a href={`#`} target="__blank">
                <span className="text-gray-500">{`>`}</span>
                <b className="text-cyan-500">Resume</b>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="nav-bar"
        style={{
          width: `${scrollProgress}%`,
        }}
      />
    </nav>
  );
};

export default Navbar;
