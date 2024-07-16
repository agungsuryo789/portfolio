import "./home.css";

const Home = () => {
  return (
    <>
      <section className="col-span-1 col-start-1 p-0 xl:col-span-2 xl:col-start-2">
        <div>
          <h3 className="text-3xl font-bold my-6">hi.</h3>
          <p className="text-lg">I'm Agung, i like to code fun stuff.</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold border-b-2 border-black border-solid my-6">
            whoami?
          </h3>
          <p className="text-lg">
            I'm a skilled front-end developer weaving magic with HTML, CSS, and
            JavaScript to create visually captivating interfaces. With a
            burgeoning interest in the full-stack landscape.
          </p>
          <p className="text-lg">
            I’ve had the privilege of working at an Hotel software company, and
            a software house company.
          </p>
          <p className="text-lg">
            Currently i work as Front End Developer at{" "}
            <a href="https://codr.id" target="_blank">
              <b>CODR</b>
            </a>{" "}
            and focusing on deepening my knowledge for Fullstack development.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
