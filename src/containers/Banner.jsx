import React from "react";
import {
  InfiniteCarousel,
  Button,
  Glow,
  Inputarea,
  Typewriter,
} from "../components/components";
import { metadata } from "../metadata/metadata";
import { JoinTheWaitListForm } from "../forms/forms";

const Banner = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col md:flex-row justify-between gap-12">
        <div className=" w-full text-center md:text-left flex flex-col items-center md:items-start gap-4">
          <p className="text-3xl sm:text-4xl font-bold">
            {metadata.banner.heading}
          </p>
          <p className="text-lg sm:text-xl text-neutral-500 md:text-justify">
            {metadata.banner.description}
          </p>
          <div className="min-w-[350px] h-[40px]">
            <Typewriter
              className={"sm:text-lg md:text-lg lg:text-lg"}
              words={metadata.typewriter.wordsSetOne}
            />
          </div>
          <InfiniteCarousel images={metadata.banner.rollingImages} />
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
