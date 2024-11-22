import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { ThemeContext } from "./utils/ThemeContext";

import "./navbar.css";

const Navbar = () => {
  const { toggleDarkMode } = useContext(ThemeContext);
  const [isDark, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  const toggleDark = () => {
    toggleDarkMode();
    setDarkMode(!isDark);
  };

  return (
    <nav className="top-0 z-10 sticky flex xl:flex-row justify-between dark:border-0 bg-slate-100 dark:bg-gray-800 shadow-md dark:shadow-sky-900 px-2 py-4 border-b-2">
	  <ul className="flex flex-row list-none">
        <li className="mr-4 ml-1 font-bold text-gray-900 dark:text-gray-100 hover:-rotate-12 transition duration-150 delay-100">
          <Link className="text-lg" to="/">
            {"/Home"}
          </Link>
        </li>
        <li className="mr-4 font-bold text-gray-900 dark:text-gray-100 hover:-rotate-12 transition duration-150 delay-100">
          <Link className="text-lg" to="/projects">
            {"/Projects"}
          </Link>
        </li>
      </ul>
      <ul className="flex flex-row list-none">
        <li className={`mr-4 ml-1 font-bold dark:text-gray-100 text-gray-900 hover:rotate-12 transition duration-150 delay-100`}>
          <button onClick={toggleDark}>
            {isDark ? (
              <i className="text-2xl fa fa-sun-o" aria-hidden="true"></i>
            ) : (
              <i className="text-2xl fa fa-moon-o" aria-hidden="true"></i>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
