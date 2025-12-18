import { Outlet } from "react-router-dom";

import Navbar from "./Components/Navbar";
import { ThemeProvider } from "./Components/utils/ThemeContext";

import "./App.css";

interface AppProps {
  className?: string;
}

const App: React.FC<AppProps> = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col bg-white dark:bg-slate-950 px-0 min-h-screen text-gray-900 dark:text-gray-300">
        <div className="w-full">
          <Navbar />
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
