import { Outlet } from "react-router-dom";

import Navbar from "./Components/Navbar";
import { ThemeProvider } from "./Utils/ThemeContext";

import "./App.css";

interface AppProps {
  className?: string;
}

const App: React.FC<AppProps> = () => {
  return (
    <ThemeProvider>
      <div className="grid grid-cols-1 xl:grid-cols-5 bg-gray-200 dark:bg-gray-950 xl:px-0 min-h-screen text-gray-900 dark:text-gray-300">
        <div className="col-span-3 xl:col-span-3 col-start-3 xl:col-start-2 p-0">
          <Navbar />

          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
