import React, { useEffect, useState } from "react";
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
    <nav className="grid grid-cols-4">
      <div className="col-span-2 justify-start">
        <a href={`/`}>
          <h1 className="text-3xl uppercase font-bold title-logo animate-pulse">
            {title}
          </h1>
        </a>
      </div>
      <div className="col-span-2 hidden lg:inline-block">
        <ul className="flex flex-row justify-end list-none">
          <li className="m-2">
            <a href={`/about`}>
              <span className="text-gray-500">/</span>
              <b>About</b>
            </a>
          </li>
          <li className="m-2">
            <a href={`/resume`}>
              <span className="text-gray-500">/</span>
              <b>Experience</b>
            </a>
          </li>
          <li className="m-2">
            <a href={`/projects`}>
              <span className="text-gray-500">/</span>
              <b>Projects</b>
            </a>
          </li>
        </ul>
      </div>
      <div className="col-span-2 text-right lg:hidden">
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
      </div>
    </nav>
  );
};

export default Navbar;
