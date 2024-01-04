import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "./UI/Button";

interface Props {
  title: string;
  docTitle?: string;
}

const Navbar: React.FC<Props> = ({ title, docTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.title = docTitle || "";
  }, []);

  return (
    <nav className="flex flex-row justify-between">
      <div>
        <Link to={`/`}>
          <h1 className="text-3xl uppercase font-bold title-logo animate-pulse">
            {title}
          </h1>
        </Link>
      </div>
      <div className="hidden lg:inline-block">
        <ul className="flex flex-row justify-end list-none text-lg">
          <li className="m-2">
            <Link to="/about">
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
    </nav>
  );
};

export default Navbar;
