import { Card, CardTitle } from "../../../Components/UI/Card";
import { Link } from "react-router-dom";

const CardBlog = () => {
  return (
    <>
      <Card className="relative z-10 flex flex-col border-[1px] border-black dark:border-white max-h-80 overflow-auto group dark:text-black">
        <CardTitle className="bg-gradient-to-b from-green-200 via-green-400 to-green-50 text-black flex gap-2">
          <i className="mr-2 fa fa-pencil-square-o" aria-hidden="true"></i>
          Latest Post
        </CardTitle>

        <div className="flex flex-col w-full overflow-auto">
          <Link to="/blog/coming-soon" className="no-underline text-inherit hover:cursor-pointer hover:underline">
            <div className="flex flex-row justify-between p-2 w-full gap-4">
              <div className="flex flex-col min-w-0 flex-1">
                <h4 className="font-bold text-md">Coming Soon</h4>
                <p className="text-sm mx-0 px-0 break-words">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores deleniti 
                </p>
              </div>
              <p className="text-sm text-gray-700 italic whitespace-nowrap">
                20.08.2025
              </p>
            </div>
          </Link>
          <Link to="/blog/coming-soon" className="no-underline text-inherit hover:cursor-pointer hover:underline">
            <div className="flex flex-row justify-between p-2 w-full gap-4">
              <div className="flex flex-col min-w-0 flex-1">
                <h4 className="font-bold text-md">Coming Soon</h4>
                <p className="text-sm mx-0 px-0 break-words">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores deleniti 
                </p>
              </div>
              <p className="text-sm text-gray-700 italic whitespace-nowrap">
                20.08.2025
              </p>
            </div>
          </Link>
          <Link to="/blog/coming-soon" className="no-underline text-inherit hover:cursor-pointer hover:underline">
            <div className="flex flex-row justify-between p-2 w-full gap-4">
              <div className="flex flex-col min-w-0 flex-1">
                <h4 className="font-bold text-md">Coming Soon</h4>
                <p className="text-sm mx-0 px-0 break-words">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores deleniti 
                </p>
              </div>
              <p className="text-sm text-gray-700 italic whitespace-nowrap">
                20.08.2025
              </p>
            </div>
          </Link>
        </div>
      </Card>
    </>
  );
};

export default CardBlog;
