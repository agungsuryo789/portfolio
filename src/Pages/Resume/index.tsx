import Badge from "../../Components/UI/Badge";
import Project from "./projects";
import "./resume.css";

const Resume = () => {
  return (
    <section>
      <div>
        <h3 className="border-2 border-gray-800 my-6 px-1 border-solid text-3xl">
          Experience
        </h3>
        <div className="my-4">
          <p className="hover:underline">
            <a className="font-bold text-lg" href="https://codr.id/" target="_blank">
              Front End Engineer - CODR
            </a>
          </p>
          <span className="font-bold">Feb 2022 - present</span>
          <div className="flex xl:flex-row flex-col my-2 py-2">
            <Badge>React JS</Badge>
            <Badge>Redux</Badge>
            <Badge>Redux Thunk</Badge>
            <Badge>Javascript</Badge>
            <Badge>Chart JS</Badge>
            <Badge>HTML & SCSS</Badge>
          </div>
          <p className="hidden">
            Build and maintain critical components used to construct CSI Admin
            Dashboard frontend, across the whole product. Work closely with
            cross-functional teams, including developers, QA, engineering
            manager and product managers, to implement and advocate for best
            practices in web accessibility.
          </p>
        </div>
        <div className="my-4">
          <p className="hover:underline">
            <a
              className="font-bold text-lg"
              href="https://sindata.net/"
              target="_blank"
            >
              Front End Engineer - Sindata
            </a>
          </p>
          <span className="font-bold">Sept 2021 - Feb 2022</span>
          <div className="flex xl:flex-row flex-col my-2 py-2">
            <Badge>Vue JS</Badge>
            <Badge>Vuex</Badge>
            <Badge>HTML & SCSS</Badge>
            <Badge>Typescript</Badge>
          </div>
          <p className="hidden">
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
