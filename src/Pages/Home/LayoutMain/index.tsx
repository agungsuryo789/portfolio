import { Card, CardTitle } from "../../../Components/UI/Card";
import { Spotify } from "react-spotify-embed";
import MusicBars from "../../../Components/UI/MusicBar";
import CardProject from "./cardProject";
import CardTechstack from "./cardTechstack";
import CardBlog from "./cardBlog";

import map from "../../../assets/images/yogyakarta.png";

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
          <CardBlog />
        </div>
        <Card className="col-span-10 xl:col-span-5">
          <CardTitle>
            <i className="my-auto mr-2 fa fa-code" aria-hidden="true"></i>
            Experience
          </CardTitle>
          <p>Under Development</p>
        </Card>
        <CardProject />
        <CardTechstack />
        <div className="col-span-10 xl:col-span-4 h-fit">
          <CardTitle className="flex gap-2">
            <MusicBars />
            <span className="p-0 dark:text-gray-100">
              Currently Listening to
            </span>
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
