import React from "react";
import SectionHeading from "../components/SectionHeading";
import { Glow } from "../components/components";
import { waitlistPageData } from "../metadata/waitlistPageData";

// Helper function to format the date
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = new Date(dateString);
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  const [month, day, year] = formattedDate.replace(",", "").split(" ");
  return { month, day, year };
};

const TimelineItem = ({ event, index }) => {
  const { month, day, year } = formatDate(event.date);
  // On medium screens and up, alternate. On small screens, all are on the right.
  const isLeft = index % 2 === 0;

  const Card = () => (
    <div
      data-aos={isLeft ? "fade-left" : "fade-right"}
      className="group relative bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-neutral-300 dark:border-neutral-700 w-full"
    >
      <div className="flex">
        {/* Main Content */}
        <div className="flex-grow pr-4">
          <h3 className="font-bold text-lg text-neutral-800 dark:text-neutral-100">
            {event.title}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            {event.description}
          </p>

          {/* Optional Images */}
          {event.images && (
            <div className="flex space-x-2 mt-3">
              {event.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${event.title} detail ${i + 1}`}
                  className="w-16 h-12 object-cover rounded-md"
                />
              ))}
            </div>
          )}
        </div>

        {/* Date Section */}
        <div className="flex-shrink-0 text-center border-l border-neutral-200 dark:border-neutral-600 pl-4">
          <p className="text-neutral-500 dark:text-neutral-400 text-sm">
            {month}
          </p>
          <p className="font-bold text-3xl text-neutral-800 dark:text-neutral-100">
            {day}
          </p>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm">
            {year}
          </p>
        </div>
      </div>
      <Glow />
    </div>
  );

  return (
    // Timeline Item Container
    <div className="flex w-full">
      {/* --- DESKTOP VIEW --- */}
      {/* Left side content or spacer, hidden on mobile */}
      <div
        className={`hidden md:flex md:w-1/2 ${
          isLeft ? "pr-8 justify-end" : "pl-8"
        }`}
      >
        {isLeft && <Card />}
      </div>

      {/* Centerline and Dot */}
      <div className="relative w-1 flex-shrink-0 bg-neutral-300 dark:bg-neutral-600">
        <div className="absolute top-7 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-neutral-900"></div>
      </div>

      {/* Right side content or spacer, hidden on mobile */}
      <div className={`hidden md:flex md:w-1/2 ${!isLeft ? "pl-8" : "pr-8"}`}>
        {!isLeft && <Card />}
      </div>

      {/* --- MOBILE VIEW --- */}
      {/* On mobile, all cards are on the right side */}
      <div className="md:hidden w-full ml-8">
        <Card />
      </div>
    </div>
  );
};

const OurTimeline = () => {
  return (
    <SectionHeading
      heading={waitlistPageData.sectionHeadings.ourTimeline.title}
      className={" dark:bg-neutral-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8"}
    >
      <div className="max-w-md md:max-w-3xl mx-auto">
        <div className="relative">
          {/* The vertical line is now part of the TimelineItem for better mobile alignment */}
          <div className="space-y-12">
            {waitlistPageData.timelineData.map((event, index) => (
              <TimelineItem key={index} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </SectionHeading>
  );
};

export default OurTimeline;
