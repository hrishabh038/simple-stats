import React from "react";
import {
  InfiniteCarousel,
  Button,
  Glow,
  Inputarea,
  Typewriter,
} from "../components/components";
import { waitlistPageData } from "../metadata/waitlistPageData";
import { JoinTheWaitListForm } from "../forms/forms";

const Banner = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col md:flex-row justify-between gap-12">
        <div className=" w-full text-center md:text-left flex flex-col items-center md:items-start gap-4">
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-blue-400">
              {waitlistPageData.banner.heading}
            </p>
            <p className="text-sm sm:text-base ">
              {waitlistPageData.banner.subTagLine}
            </p>
          </div>
          <p className="text-base sm:text-lg text-neutral-500">
            {waitlistPageData.banner.description}
          </p>
          <div className="min-w-[350px] h-[40px]">
            <Typewriter
              className={"sm:text-lg md:text-lg lg:text-lg"}
              words={waitlistPageData.typewriter.wordsSetOne}
            />
          </div>
          <InfiniteCarousel images={waitlistPageData.banner.rollingImages} />
        </div>
        <div className="max-w-[325px]">
          <JoinTheWaitListForm />
        </div>
      </div>
    </div>
  );
};

const FixedImage = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className="h-35 object-cover flex-shrink-0" />
  );
};

export default Banner;
