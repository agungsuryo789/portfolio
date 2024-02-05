import "./home.css";

const Home = () => {
  return (
    <>
      <section id="home" className="grid grid-rows-2 place-items-center">
        <div className="content grid grid-cols-2 overflow-hidden relative text-2xl px-4 py-2 xl:px-5">
          <p className="font-extrabold ">Hello</p>
          <div className="content__container overflow-hidden h-8">
            <ul className="content__container__list text-left font-extrabold  list-none">
              <li className="content__container__list__item ">world</li>
              <li className="content__container__list__item ">users</li>
              <li className="content__container__list__item ">everybody</li>
            </ul>
          </div>
        </div>
        <div>
          <p className="font-bold text-center text-8xl my-4">Agung Suryo</p>
          <p className="text-4xl text-center my-4">Frontend Developer</p>
        </div>
        {/* <div className="lg:flex-1 text-left tracking-widest my-10 lg:my-2">
          <span className="text-cyan-400 font-bold">Hi, my name is</span>
          <h1 className="text-3xl uppercase font-bold tracking-widest my-2">
            Agung Suryo Sundoro
          </h1>
          <p className="text-xl font-semibold">I like to code fun stuff.</p>
          <p className="my-4 italic">
            I'm a skilled front-end developer weaving magic with HTML, CSS, and
            JavaScript to create visually captivating interfaces. With a
            burgeoning interest in the full-stack landscape.
          </p>

          <div className="flex flex-row">
            <a
              className="shadow-lg m-2 hover:shadow-xl"
              href="https://www.linkedin.com/in/agungsuryo/"
              target="_blank"
            >
              <img
                className="bg-white w-10 rounded-md border-2 border-black"
                src={linkedIcon}
                alt="linkedin icon"
              />
            </a>
            <a
              className="shadow-lg m-2 hover:shadow-xl"
              href="https://github.com/agungsuryo789"
              target="_blank"
            >
              <img
                className="bg-white w-10 rounded-md"
                src={githubIcon}
                alt="github icon"
              />
            </a>
          </div>
        </div> */}

        {/* <button className="text-lg font-bold animate-bounce absolute left-20 bottom-32">
          Learn more
          <i className="fa fa-caret-square-o-right mx-2" aria-hidden="true"></i>
        </button> */}
      </section>
    </>
  );
};

export default Home;
