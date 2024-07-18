import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Resume from "./Pages/Resume";

import "./App.css";

interface AppProps {
  className?: string;
}

const App: React.FC<AppProps> = () => {
  return (
    <div className="grid grid-cols-1 relative xl:grid-cols-4 snap-y">
      <Navbar />

      <Home />

      <Resume />
    </div>
  );
};

export default App;
