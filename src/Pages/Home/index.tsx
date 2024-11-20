import Sidebar from "./Sidebar";
import LayoutMain from "./LayoutMain";

import "./home.css";


const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-8">
        <Sidebar/>

        <LayoutMain/>
      </div>
    </>
  );
};

export default Home;
