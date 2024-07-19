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
          <div className="flex flex-row my-2">
            <span className="border-dotted border-2 border-black p-2 mr-2">
              React JS
            </span>
            <span className="border-dotted border-2 border-black p-2 mr-2">
              Redux
            </span>
            <span className="border-dotted border-2 border-black p-2 mr-2">
              Redux Thunk
            </span>
            <span className="border-dotted border-2 border-black p-2 mr-2">
              Javascript
            </span>
            <span className="border-dotted border-2 border-black p-2 mr-2">
              Chart JS
            </span>
            <span className="border-dotted border-2 border-black p-2 mr-2">
              HTML & SCSS
            </span>
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
          <div className="flex flex-row my-2">
            <span className="border-dotted border-2 border-black p-2 mr-2">
              Vue JS
            </span>
            <span className="border-dotted border-2 border-black p-2 mr-2">
              Vuex
            </span>
            <span className="border-dotted border-2 border-black p-2 mr-2">
              Typescript
            </span>
            <span className="border-dotted border-2 border-black p-2 mr-2">
              HTML & SCSS
            </span>
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
      <div>
        <h3 className="terminal__icon text-3xl border-b-2 border-gray-500 border-solid my-6">
          Relevant Projects
        </h3>

        <div className="flex flex-row border-dotted border-2 border-black p-2">
          <img className="w-60" src="" alt="" />
          <div>
            <a className="font-bold text-xl" href="" target="_blank">
              CSI Interactive Admin Dashboard
            </a>
            <p>
              Interactive admin dashboard for B2B ecommerce website with key
              features such as online chat, graphic chart, and interactive
              tables.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
