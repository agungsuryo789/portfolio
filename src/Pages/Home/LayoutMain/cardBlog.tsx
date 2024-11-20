import { Card, CardTitle } from "../../../Components/UI/Card";
const CardBlog = () => {
  return (
    <>
      <Card className="relative z-10 flex flex-col border-4 border-white min-h-80 overflow-hidden group">
        <CardTitle>
          <i className="mr-2 fa fa-pencil-square-o" aria-hidden="true"></i>
          Blog
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
          Read More
          <i className="fa-caret-right my-auto ml-2 fa" aria-hidden="true"></i>
        </button>
      </Card>
    </>
  );
};

export default CardBlog;
