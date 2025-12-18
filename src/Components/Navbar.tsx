import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {

  return (
    <nav className="left-0 top-0 z-10 sticky flex flex-col dark:bg-slate-950 px-4 py-4">
      <ul className="flex flex-row list-none justify-center flex-1 gap-4">
        <li className="mb-4 text-blue-400 dark:text-gray-100 hover:underline transition duration-150 delay-100">
          <Link className="text-lg" to="/">
            {"/Home"}
          </Link>
        </li>
        <li className="mb-4 text-blue-400 dark:text-gray-100 hover:underline transition duration-150 delay-100">
          <Link className="text-lg" to="/projects">
            {"/Projects"}
          </Link>
        </li>
        <li className="mb-4 text-blue-400 dark:text-gray-100 hover:underline transition duration-150 delay-100">
          <Link className="text-lg" to="/blog">
            {"/Blog"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
