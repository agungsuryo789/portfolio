import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="col-span-1 col-start-1 sticky border-2 bg-slate-300 top-0 p-0 py-2 z-10 xl:col-span-2 xl:col-start-2">
      <ul className="flex flex-row list-none">
        <li className="text-blue-800 font-bold ml-1 mr-4">
          <a href="/">[Home]</a>
        </li>
        <li className="text-blue-800 font-bold mr-4">
          <a href="/portfolio">[Portfolio]</a>
        </li>
        <li className="text-blue-800 font-bold mr-4">
          <a href="/blog">[Blog]</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
