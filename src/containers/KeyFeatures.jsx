import React from "react";
import { Glow, SectionHeading, Typewriter } from "../components/components";
import { FiCheckCircle } from "react-icons/fi"; // Optional icon
import { waitlistPageData } from "../metadata/waitlistPageData";

const KeyFeatures = () => {
  return (
    <SectionHeading
      heading={waitlistPageData.sectionHeadings.keyFeatures.title}
      className="w-full flex flex-col gap-12 px-1"
    >
      <div
        data-aos="zoom-in"
        className="group relative border border-neutral-300 dark:border-neutral-700 w-full bg-white dark:bg-neutral-800 py-8 rounded-md shadow-inner"
      >
        <div className="max-w-4xl mx-auto text-center text-neutral-600 dark:text-neutral-400 font-medium">
          <Typewriter words={waitlistPageData.typewriter.wordsSetOne} />
        </div>
        <Glow />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-1">
        {waitlistPageData.KeyFeatures.map((item, index) => (
          <Feature
            index={index}
            title={item.title}
            description={item.description}
            key={item.title}
          />
        ))}
      </div>
    </SectionHeading>
  );
};

const Feature = ({ title, description, index }) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay={index * 50}
      className="border border-neutral-300 dark:border-neutral-700 group relative overflow-hidden rounded-lg p-6 bg-white dark:bg-neutral-800 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:z-50"
    >
      <div className="flex items-center gap-3">
        <div className="text-blue-600 dark:text-blue-400 text-2xl">
          <FiCheckCircle />
        </div>
        <h3 className="text-sm sm:text-[17px] font-semibold text-neutral-700 dark:text-neutral-100">
          {title}
        </h3>
      </div>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
        {description}
      </p>

      <Glow />
    </div>
  );
};

export default KeyFeatures;
