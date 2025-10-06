import React from "react";
import { twMerge } from "tailwind-merge";

const SectionHeading = ({
  heading,
  subheading,
  children,
  className,
  center = true, // control layout alignment
}) => {
  return (
    <section className="w-full flex flex-col items-center gap-10">
      {/* Heading & Optional Subheading */}
      <div className={twMerge("w-full", center ? "text-center" : "text-left")}>
        <div className="relative flex items-center justify-center w-full">
          {/* Left Divider */}
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />

          {/* Title */}
          <h2 className="px-4 py-1 text-lg sm:text-xl font-bold tracking-wide dark:text-gray-500 uppercase whitespace-nowrap">
            {heading}
          </h2>

          {/* Right Divider */}
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
        </div>

        {/* Subheading (optional) */}
        {subheading && (
          <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            {subheading}
          </p>
        )}
      </div>

      {/* Section Content */}
      <div className={twMerge("w-full", className)}>{children}</div>
    </section>
  );
};

export default SectionHeading;
