import { Outlet } from "react-router-dom";

import Navbar from "./Components/Navbar";

import "./App.css";

interface AppProps {
  className?: string;
}

const App: React.FC<AppProps> = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 xl:px-0">
      <div className="col-span-1 xl:col-span-1 col-start-1 xl:col-start-2 p-0">
        <Navbar />

		<Outlet/>
      </div>
    </div>
  );
};

export default App;
