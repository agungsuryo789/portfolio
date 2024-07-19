import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Resume from "./Pages/Resume";

import "./App.css";

interface AppProps {
  className?: string;
}

const App: React.FC<AppProps> = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 snap-y">
      <div className="col-span-1 col-start-1 p-0 xl:col-span-1 xl:col-start-2">
        <Navbar />

        <Home />

        <Resume />
      </div>
    </div>
  );
};

export default App;
