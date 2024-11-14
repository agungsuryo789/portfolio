import Resume from "../Resume";
import "./home.css";

const Home = () => {
  return (
    <>
      <section>
        <div className="flex flex-row">
          <img src="" alt="profile" className="border-1 bg-white mx-2 my-auto rounded-full h-24" />
          <div>
            <h3 className="my-6 px-1 font-bold text-3xl">hi.</h3>
            <p className="text-lg">
              I'm{" "}
              <span className="font-bold text-2xl">Agung Suryo Sundoro</span>
            </p>
            <p className="my-2">i like to code fun stuff.</p>
          </div>
        </div>
        <div>
		<h3 className="hover:border-1 hover:bg-green-400 my-6 px-1 border-b-2 border-b-green-500 border-solid text-3xl dark:hover:text-gray-900 cursor-default">
            whoami?
          </h3>
          <p>
            I'm a skilled front-end developer weaving magic with HTML, CSS, and
            JavaScript to create visually captivating interfaces. With a
            burgeoning interest in the full-stack landscape.
          </p>
          <p className="text-lg">
            Currently i work as Front End Developer at{" "}
            <a
              className="font-semibold text-xl"
              href="https://codr.id"
              target="_blank"
            >
              CODR
            </a>{" "}
            and focusing on deepening my knowledge for Fullstack development.
          </p>
        </div>
      </section>

      <Resume />
    </>
  );
};

export default Home;
