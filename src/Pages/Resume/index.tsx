import Badge from "../../Components/UI/Badge";
import Project from "./projects";
import "./resume.css";

const Resume = () => {
  return (
    <section>
      <div>
        <h3 className="terminal__icon text-3xl border-b-2 border-gray-500 border-solid my-6">
          Experience
        </h3>
        <div className="my-4">
          <p className="terminal__icon hover:underline">
            <a className="font-bold" href="https://codr.id/" target="_blank">
              Front End Engineer - CODR
            </a>
          </p>
          <span>Feb 2022 - present</span>
          <div className="flex flex-col my-2 py-2 xl:flex-row">
            <Badge>React JS</Badge>
            <Badge>Redux</Badge>
            <Badge>Redux Thunk</Badge>
            <Badge>Javascript</Badge>
            <Badge>Chart JS</Badge>
            <Badge>HTML & SCSS</Badge>
          </div>
          <p>
            Build and maintain critical components used to construct CSI Admin
            Dashboard frontend, across the whole product. Work closely with
            cross-functional teams, including developers, QA, engineering
            manager and product managers, to implement and advocate for best
            practices in web accessibility.
          </p>
        </div>
        <div className="my-4">
          <p className="terminal__icon hover:underline">
            <a
              className="font-bold"
              href="https://sindata.net/"
              target="_blank"
            >
              Front End Engineer - Sindata
            </a>
          </p>
          <span>Sept 2021 - Feb 2022</span>
          <div className="flex flex-col my-2 py-2 xl:flex-row">
            <Badge>Vue JS</Badge>
            <Badge>Vuex</Badge>
            <Badge>HTML & SCSS</Badge>
            <Badge>Typescript</Badge>
          </div>
          <p>
            Developed and styled features of the Hotel Management System
            website, such as the cart and booking sections. Work closely with
            cross-functional teams, including developers, QA, and product
            managers, to implement and advocate for best practices in web
            accessibility.
          </p>
        </div>
      </div>

      <Project />
    </section>
  );
};

export default Resume;
