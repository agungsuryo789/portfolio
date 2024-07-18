import "./resume.css";

const Resume = () => {
  return (
    <section className="col-span-1 col-start-1 p-0 xl:col-span-2 xl:col-start-2">
      <div>
        <h3 className="terminal__icon text-3xl border-b-2 border-gray-500 border-solid my-6">
          Experience
        </h3>
        <a
          href="https://codr.id"
          target="_blank"
          className="flex flex-row justify-between font-semibold my-2 hover:bg-gray-300"
        >
          <span className="terminal__icon text-left my-auto">CODR</span>
          <span>Front End Engineer</span>
          <span>Feb 2022 - Present</span>
        </a>
        <a
          href="https://sindata.net"
          target="_blank"
          className="flex flex-row justify-between font-semibold my-2 hover:bg-gray-300"
        >
          <span className="terminal__icon text-left my-auto">Sindata</span>
          <span>Front End Engineer</span>
          <span>Sept 2021 - Feb 2022</span>
        </a>
        <a
          href="https://solusidigital.co.id/"
          target="_blank"
          className="flex flex-row justify-between font-semibold my-2 hover:bg-gray-300"
        >
          <span className="terminal__icon text-left my-auto">
            Solusi Digital
          </span>
          <span>Web Developer</span>
          <span>Feb 2020 - Oct 2020</span>
        </a>
      </div>
      <div className="flex flex-col">
        <h3 className="terminal__icon text-3xl border-b-2 border-gray-500 border-solid my-6">
          My Tech Stack
        </h3>
        <p className="quote__style">
          Apart from using HTML, CSS, and Javascript, i work with javascript
          framework such as:
        </p>
        <span className="terminal__icon my-1">React JS, Redux, Redux Thunk</span>
        <span className="terminal__icon my-1">Vue JS, Vuex</span>
        <p className="quote__style">
          Recently i'm in love with{" "}
          <span className="text-lg font-bold">Typescript</span> and plan to use
          it more!
        </p>
		<p className="quote__style my-1">In the journey of learning Fullstack development, i tinker with</p>
		<span className="terminal__icon my-1">Node JS</span>
		<span className="terminal__icon my-1">PostgreSQL</span>
		<span className="terminal__icon my-1">Prisma</span>
      </div>
    </section>
  );
};

export default Resume;
