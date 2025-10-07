import React from "react";
import {
  AutoCarousel,
  Button,
  Glow,
  Inputarea,
  Typewriter,
} from "../components/components";
import { Words } from "../metadata/metadata";
import { JoinTheWaitListForm } from "../forms/forms";
import {
  imgFive,
  imgFour,
  imgOne,
  imgSeven,
  imgThree,
  imgTwo,
} from "../assets/assets";
import FixedImageCarousel from "../components/InfiniteCarousel";

const Banner = () => {
  const ALL_IMAGES = [
    imgOne,
    imgTwo,
    imgThree,
    imgFour,
    imgFive,
    imgSeven,
  ];
  return (
    <div className="w-full">
      <div className="w-full flex flex-col md:flex-row justify-between gap-12">
        <div className=" w-full text-center md:text-left flex flex-col items-center md:items-start gap-4">
          <p className="text-3xl sm:text-4xl font-bold">
            The Fastest, Privacy-First Analytics for Modern Websites
          </p>
          <p className="text-lg sm:text-xl text-neutral-500 md:text-justify">
            Ditch complex, intrusive web analytics for Fathom - a better Google
            Analytics alternative. Experience ease of use, forever data
            retention, and complete, worry-free GDPR compliance - all while
            protecting your time and your visitors' digital privacy.
          </p>
          <div className="min-w-[350px] h-[40px]">
            <Typewriter
              className={"sm:text-lg md:text-lg lg:text-lg"}
              words={Words}
            />
          </div>
          <AutoCarousel images={ALL_IMAGES} />
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
