import { Card, CardTitle } from "../../../Components/UI/Card";
import { Spotify } from "react-spotify-embed";
import MusicBars from "../../../Components/UI/MusicBar";

import map from "../../../assets/images/yogyakarta.png";
import iconjs from "../../../assets/icon dev/js.png";
import iconreact from "../../../assets/icon dev/atom.png";
import iconnodejs from "../../../assets/icon dev/nodejs.png";
import iconpostgre from "../../../assets/icon dev/postgre.png";
import iconts from "../../../assets/icon dev/typescript.png";
import iconvue from "../../../assets/icon dev/vuejs.png";

const LayoutMain = () => {
  return (
    <>
      <section className="gap-2 xl:gap-4 grid grid-cols-10 grid-flow-row col-span-1 xl:col-span-6 p-2">
        <div className="flex flex-col gap-2 col-span-10 md:col-span-5 lg:col-span-3 xl:col-span-3 h-auto">
          <Card className="border-4 border-white">
            <CardTitle>
              <i className="mr-4 fa fa-podcast" aria-hidden="true"></i>Status
            </CardTitle>
            <p className="my-4 font-bold text-2xl uppercase">
              <i
                className="mr-4 text-orange-500 animate-pulse fa fa-circle"
                aria-hidden="true"
              ></i>
              Away
            </p>
          </Card>
          <Card className="border-4 border-white">
            <CardTitle>
              <i className="mr-4 fa fa-commenting" aria-hidden="true"></i>React
              out to me at
            </CardTitle>
            <div className="flex flex-row gap-4 ml-2">
              <a
                className="hover:scale-110 transition delay-100"
                href="mailto:agungsuryo645@gmail.com"
              >
                <i className="text-2xl fa fa-envelope" aria-hidden="true"></i>
              </a>
              <a
                className="hover:scale-110 transition delay-100"
                href="https://github.com/agungsuryo789"
                target="_blank"
              >
                <i className="text-2xl fa fa-github" aria-hidden="true"></i>
              </a>
              <a
                className="hover:scale-110 transition delay-100"
                href="https://www.linkedin.com/in/agungsuryo/"
                target="_blank"
              >
                <i
                  className="text-2xl fa fa-linkedin-square"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </Card>
        </div>
        <div className="col-span-10 md:col-span-5 lg:col-span-3 xl:col-span-3">
          <Card className="relative border-8 border-white min-h-80">
            <img
              src={map}
              alt="map of yogyakarta, indonesia"
              className="w-full h-full"
            />
            <div className="top-1/3 left-2/5 absolute border-4 border-white bg-gradient-to-bl from-red-600 to-rose-500 shadow-gradient px-4 py-2 rounded-full animate-bounce">
              <i className="fa-map-marker text-xl fa" aria-hidden="true"></i>
            </div>
          </Card>
        </div>
        <div className="flex flex-col gap-2 col-span-10 lg:col-span-4 xl:col-span-4">
          <Card className="relative z-10 flex flex-col border-4 border-white min-h-80 overflow-hidden">
            <CardTitle>
              <i className="mr-2 fa fa-pencil-square-o" aria-hidden="true"></i>
              Blog
            </CardTitle>
            <div className="top-2/5 -z-50 absolute bg-gradient-to-bl from-sky-400 to-sky-200 bg-opacity-80 p-2 rounded-xl w-full h-40 transition hover:-translate-y-20 duration-200 delay-100 -rotate-6">
              <p className="font-semibold text-base text-sky-600">
                Under Development
              </p>
            </div>

            <button className="bottom-2 left-2 absolute border-1 bg-white shadow-xl my-auto px-4 py-2 rounded-2xl w-max">
              Read More
              <i className="fa-caret-right ml-2 fa" aria-hidden="true"></i>
            </button>
          </Card>
        </div>
        <Card className="col-span-10 xl:col-span-5">
          <CardTitle>
            <i className="my-auto mr-2 fa fa-code" aria-hidden="true"></i>
            Experience
          </CardTitle>
          <p>Under Development</p>
        </Card>
        <Card className="col-span-10 xl:col-span-5">
          <CardTitle>
            <i className="my-auto mr-2 fa fa-code" aria-hidden="true"></i>
            Projects
          </CardTitle>
          <p>Under Development</p>
        </Card>
        <Card className="col-span-10 xl:col-span-5 h-fit">
          <CardTitle>
            <i className="my-auto mr-2 fa fa-code" aria-hidden="true"></i>Tech
            Stack I used
          </CardTitle>
          <ul className="gap-4 grid grid-cols-2 py-4">
            <li>
              <i className="mr-2 fa fa-html5" aria-hidden="true"></i>
              HTML, CSS
            </li>
            <li className="flex">
              <img
                src={iconjs}
                alt="icon of Javascript"
                className="my-auto mr-2 w-4 h-4"
              />
              Javascript
            </li>
            <li className="flex">
              <img
                src={iconts}
                alt="icon of Typescript"
                className="my-auto mr-2 w-4 h-4"
              />
              Typescript
            </li>
            <li className="flex">
              <img
                src={iconnodejs}
                alt="icon of Node JS"
                className="my-auto mr-2 w-4 h-4"
              />
              Node JS
            </li>
            <li className="flex">
              <img
                src={iconreact}
                alt="icon of ReactJS"
                className="my-auto mr-2 w-4 h-4"
              />
              ReactJS
            </li>
            <li className="flex">
              <img
                src={iconreact}
                alt="icon of Next JS"
                className="my-auto mr-2 w-4 h-4"
              />
              Next JS
            </li>
            <li className="flex">
              <img
                src={iconvue}
                alt="icon of VueJs"
                className="my-auto mr-2 w-4 h-4"
              />
              VueJs
            </li>
            <li className="flex">
              <img
                src={iconpostgre}
                alt="icon of VueJs"
                className="my-auto mr-2 w-4 h-4"
              />
              Postgre SQL
            </li>
          </ul>
        </Card>

        <div className="col-span-10 xl:col-span-4 h-fit">
          <CardTitle className="flex gap-2">
            <MusicBars />
            Currently Listening to
          </CardTitle>
          <Spotify
            height="200px"
            className="hover:scale-105 hover:transition hover:duration-300 hover:delay-150"
            link="https://open.spotify.com/track/0BxE4FqsDD1Ot4YuBXwAPp?si=793be8adfd6542d3"
          />
        </div>
      </section>
    </>
  );
};

export default LayoutMain;
