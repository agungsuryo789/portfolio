import { Card, CardTitle } from "../../../Components/UI/Card";
import { Link } from "react-router-dom";

import imagecsi1 from "../../../assets/images/csi_admin_chat.png";
import imagetiarahijabers1 from "../../../assets/images/tiarahijabers_homepage.jpeg";

const CardProject = () => {
  return (
    <>
      <Card className="relative flex flex-col col-span-10 xl:col-span-5 min-h-80 overflow-hidden group">
        <CardTitle>
          <i className="my-auto mr-2 fa fa-code-fork" aria-hidden="true"></i>
          Projects
        </CardTitle>
        <div className="top-2/5 -z-40 absolute bg-cyan-300 p-2 rounded-xl w-full h-40 transition group-hover:-translate-y-6 duration-200 delay-100 -rotate-6">
          <img
            src={imagecsi1}
            alt="csi admin dashboard project"
            className="w-full h-auto"
          />
        </div>
        <div className="top-2/5 -z-50 absolute bg-amber-300 p-2 rounded-xl w-full h-40 transition group-hover:-translate-y-14 duration-200 delay-100 -rotate-6">
          <img
            src={imagetiarahijabers1}
            alt="csi admin dashboard project"
            className="w-full h-auto"
          />
        </div>

        <button className="bottom-2 left-2 absolute border-1 bg-white shadow-xl my-auto px-4 py-2 rounded-2xl w-max">
          <Link to="/projects">
            Read More
            <i className="fa-caret-right ml-2 fa" aria-hidden="true"></i>
          </Link>
        </button>
      </Card>
    </>
  );
};

export default CardProject;
