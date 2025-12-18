import LayoutMain from "./LayoutMain";

import "./home.css";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-5">
        <LayoutMain />
      </div>
    </>
  );
};

export default Home;
