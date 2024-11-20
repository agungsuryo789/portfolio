import { Card, CardTitle } from "../../../Components/UI/Card";
import { Link } from "react-router-dom";

const CardProject = () => {
  return (
    <>
      <Card className="relative flex flex-col col-span-10 xl:col-span-5 min-h-80 overflow-hidden group">
        <CardTitle>
          <i className="my-auto mr-2 fa fa-code-fork" aria-hidden="true"></i>
          Projects
        </CardTitle>
        <div className="top-2/5 -z-40 absolute bg-gradient-to-bl from-sky-400 to-sky-200 bg-opacity-80 p-2 rounded-xl w-full h-40 transition group-hover:-translate-y-6 duration-200 delay-100 -rotate-6">
          <p className="font-semibold text-base text-sky-600">
            Under Development
          </p>
        </div>
        <div className="top-2/5 -z-50 absolute bg-gradient-to-bl from-amber-600 to-amber-300 bg-opacity-80 p-2 rounded-xl w-full h-40 transition group-hover:-translate-y-14 duration-200 delay-100 -rotate-6">
          <p className="font-semibold text-base text-sky-600">
            Under Development
          </p>
        </div>

        <button className="bottom-2 left-2 absolute border-1 bg-white shadow-xl my-auto px-4 py-2 rounded-2xl w-max">
          <Link to='/projects'>
            Read More
            <i className="fa-caret-right ml-2 fa" aria-hidden="true"></i>
          </Link>
        </button>
      </Card>
    </>
  );
};

export default CardProject;
