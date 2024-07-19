import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="flex flex-col justify-between sticky border-2 bg-gray-300 top-0 p-0 py-2 z-10 xl:flex-row">
      <ul className="flex flex-row list-none">
        <li className="text-blue-800 font-bold ml-1 mr-4">
          <a href="/">[Home]</a>
        </li>
        <li className="text-blue-800 font-bold mr-4">
          <a href="/projects">[projects]</a>
        </li>
        <li className="text-blue-800 font-bold mr-4">
          <a href="/blog">[Blog]</a>
        </li>
      </ul>
      <ul className="flex flex-row list-none">
        <li className="text-blue-800 font-bold ml-1 mr-4">
          <a href="mailto:agungsuryo645@gmail.com">[agungsuryo645@gmail.com]</a>
        </li>
        <li className="text-blue-800 font-bold mr-4">
          <a href="https://github.com/agungsuryo789" target="_blank">
            [Github]
          </a>
        </li>
        <li className="text-blue-800 font-bold mr-4">
          <a href="https://www.linkedin.com/in/agungsuryo/" target="_blank">
            [LinkedIn]
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
