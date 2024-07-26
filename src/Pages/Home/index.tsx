import "./home.css";

const Home = () => {
  return (
    <>
      <section>
        <div>
          <h3 className="my-6 font-bold text-3xl terminal__icon">hi.</h3>
          <p className="text-lg terminal__icon">
            I'm
            <pre className="text-sm lg:text-base xl:text-base">{`
▄▀█ █▀▀ █░█ █▄░█ █▀▀   █▀ █░█ █▀█ █▄█ █▀█   █▀ █░█ █▄░█ █▀▄ █▀█ █▀█ █▀█
█▀█ █▄█ █▄█ █░▀█ █▄█   ▄█ █▄█ █▀▄ ░█░ █▄█   ▄█ █▄█ █░▀█ █▄▀ █▄█ █▀▄ █▄█`}</pre>
          </p>
		  <p className="my-2 terminal__icon">i like to code fun stuff.</p>
        </div>
        <div>
          <h3 className="border-gray-500 my-6 border-b-2 border-solid text-3xl terminal__icon">
            whoami?
          </h3>
          <p className="text-lg terminal__icon">
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
    </>
  );
};

export default Home;
