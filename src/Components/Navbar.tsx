import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="top-0 z-10 sticky flex xl:flex-row justify-between border-2 bg-gray-300 py-2 p-0">
      <ul className="flex flex-row list-none">
        <li className="mr-4 ml-1 font-bold text-blue-800">
          <a href="/">[Home]</a>
        </li>
        <li className="mr-4 font-bold text-blue-800">
          <a href="/projects">[Projects]</a>
        </li>
      </ul>
      <ul className="flex flex-row list-none">
        <li className="mr-4 ml-1 font-bold text-blue-800">
          <a href="mailto:agungsuryo645@gmail.com">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </li>
        <li className="mr-4 font-bold text-blue-800">
          <a href="https://github.com/agungsuryo789" target="_blank">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </li>
        <li className="mr-4 font-bold text-blue-800">
          <a href="https://www.linkedin.com/in/agungsuryo/" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
