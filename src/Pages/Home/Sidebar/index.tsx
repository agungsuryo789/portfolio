import { useState } from "react";

import ava from "../../../assets/images/avatar.svg";
import ava_smile from "../../../assets/images/avatar_smile.svg";

const Sidebar = () => {
  const [isHover, setHover] = useState(false);

  return (
    <>
      <section className="col-span-1 xl:col-span-2 bg-slate-100 dark:bg-gray-800 shadow-lg dark:shadow-sky-800 px-2 py-4">
        <div className="flex flex-col">
          <img
            src={isHover ? ava_smile : ava}
            alt="profile avatar"
            onMouseMove={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="mx-auto lg:mx-0 xl:mx-0 my-auto w-56 h-full hover:scale-110 transition duration-75 delay-75"
          />
          <div>
            <h3 className="mx-0 my-6 p-0 font-bold text-3xl">
              <i className="fa fa-hand-peace-o" aria-hidden="true"></i>Hi! i'm
              Agung
              <span className="m-0 p-0 font-bold text-3xl animate-blink">
                |
              </span>
            </h3>
            <p className="mx-0 my-2 p-0">
              <span className="p-0 font-bold">Frontend Developer</span> based in
              Yogyakarta, Indonesia.
              <br />
              <span className="p-0 font-semibold text-lg">
                I like to code fun stuff!!
              </span>
              <br />I am also adept at modern frameworks like
              <span className="font-bold text-sky-500">React Js</span>,
              <span className="font-bold text-slate-900 dark:text-green-600">Next JS</span> and
              <span className="font-bold text-emerald-500">Vue Js</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
