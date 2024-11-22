import { useRef } from "react";

import { Card, CardTitle } from "../../../Components/UI/Card";

const CardExperience = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleNext = () => {
    if (carouselRef.current) {
      const { offsetWidth, scrollLeft, scrollWidth } = carouselRef.current;

      carouselRef.current.scrollBy({
        left: offsetWidth,
        behavior: "smooth",
      });

      if (scrollLeft + offsetWidth >= scrollWidth - offsetWidth + 100) {
        carouselRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      const { offsetWidth, scrollLeft } = carouselRef.current;

      carouselRef.current.scrollBy({
        left: -offsetWidth,
        behavior: "smooth",
      });

      if (scrollLeft <= 0) {
        carouselRef.current.scrollTo({
          left: carouselRef.current.scrollWidth - offsetWidth,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <Card className="col-span-10 xl:col-span-5">
        <CardTitle>
          <i className="my-auto mr-2 fa fa-code" aria-hidden="true"></i>
          Experience
        </CardTitle>
        <div
          ref={carouselRef}
          className="flex flex-row p-2 max-w-full min-h-44 transition duration-150 delay-150 overflow-x-hidden overflow-y-hidden"
        >
          <div className="py-2 min-w-full h-44">
            <p>Frontend Developer</p>
            <a href="https://codr.id" target="_blank">
              <p>CODR</p>
            </a>
            <p className="text-slate-500 text-sm">
              February 2022 - August 2024
            </p>
            <div className="relative flex flex-row my-2">
              <div className="bg-slate-600 p-2 rounded-full w-8 h-8"></div>
              <div className="top-1/2 left-0 absolute bg-slate-600 w-full h-1"></div>
            </div>
          </div>
          <div className="py-2 min-w-full h-44">
            <p>Frontend Developer</p>
            <a href="https://sindata.net" target="_blank">
              <p>Sindata</p>
            </a>
            <p className="text-slate-500 text-sm">
              September 2021 - February 2022
            </p>
            <div className="relative flex flex-row my-2">
              <div className="bg-slate-600 p-2 rounded-full w-8 h-8"></div>
              <div className="top-1/2 left-0 absolute bg-slate-600 w-full h-1"></div>
            </div>
          </div>
          <div className="py-2 min-w-full h-44">
            <p>Web Developer</p>
            <a href="https://solusidigital.co.id" target="_blank">
              <p>Solusi Digital</p>
            </a>
            <p className="text-slate-500 text-sm">
              February 2020 - November 2020
            </p>
            <div className="relative flex flex-row my-2">
              <div className="bg-slate-600 p-2 rounded-full w-8 h-8"></div>
              <div className="top-1/2 left-0 absolute bg-slate-600 w-full h-1"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-3 p-2">
          <button onClick={handlePrev} className="shadow-md rounded-lg w-full">
            prev
          </button>
          <button onClick={handleNext} className="shadow-md rounded-lg w-full">
            next
          </button>
        </div>
      </Card>
    </>
  );
};

export default CardExperience;
