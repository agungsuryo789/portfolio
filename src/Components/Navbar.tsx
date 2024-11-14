import { Link } from "react-router-dom";
import { useContext } from "react";

import { ThemeContext } from "../Utils/ThemeContext";

import "./navbar.css";

const Navbar = () => {
  const { toggleDarkMode } = useContext(ThemeContext);

  return (
    <nav className="top-0 z-10 sticky flex xl:flex-row justify-between bg-gray-200 dark:bg-gray-950 py-2 p-0">
      <ul className="flex flex-row list-none">
        <li className="mr-4 ml-1 font-bold text-gray-900 dark:text-green-500">
          <Link to="/">[Home]</Link>
        </li>
        <li className="mr-4 font-bold text-gray-900 dark:text-green-500">
          <Link to="/projects">[Projects]</Link>
        </li>
      </ul>
      <ul className="flex flex-row list-none">
        <li className={`mr-4 ml-1 font-bold dark:text-green-400 text-gray-900`}>
          <button onClick={toggleDarkMode}>
            <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
          </button>
        </li>
        <li className="mr-4 ml-1 font-bold text-gray-900 dark:text-green-500">
          <a href="mailto:agungsuryo645@gmail.com">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </li>
        <li className="mr-4 font-bold text-gray-900 dark:text-green-500">
          <a href="https://github.com/agungsuryo789" target="_blank">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </li>
        <li className="mr-4 font-bold text-gray-900 dark:text-green-500">
          <a href="https://www.linkedin.com/in/agungsuryo/" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
