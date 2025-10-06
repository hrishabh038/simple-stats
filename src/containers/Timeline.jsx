import React from "react";
import SectionHeading from "../components/SectionHeading";

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
    <div data-aos={isLeft?("fade-left"): "fade-right"} className="relative bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 w-full">
      {/* Arrow Pointer - adapts its position and border for left/right and dark/light modes */}
      <div
        className={`absolute top-6 w-3 h-3 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transform rotate-45 
                    md:${
                      isLeft
                        ? "right-0 -translate-y-1/2 translate-x-1/2 border-t border-r"
                        : "left-0 -translate-y-1/2 -translate-x-1/2 border-b border-l"
                    }
                    left-0 -translate-y-1/2 -translate-x-1/2 border-b border-l md:border-b-0 md:border-l-0
                  `}
      />

      <div className="flex">
        {/* Main Content */}
        <div className="flex-grow pr-4">
          <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">
            {event.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
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
        <div className="flex-shrink-0 text-center border-l border-gray-200 dark:border-gray-600 pl-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">{month}</p>
          <p className="font-bold text-3xl text-gray-800 dark:text-gray-100">
            {day}
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{year}</p>
        </div>
      </div>
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
      <div className="relative w-1 flex-shrink-0 bg-gray-300 dark:bg-gray-600">
        <div className="absolute top-7 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900"></div>
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

const Timeline = ({ events }) => {
  return (
    <SectionHeading
      heading={"Our Timeline"}
      className={" dark:bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8"}
    >
      <div className="max-w-md md:max-w-3xl mx-auto">
        <div className="relative">
          {/* The vertical line is now part of the TimelineItem for better mobile alignment */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <TimelineItem key={index} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </SectionHeading>
  );
};

export default Timeline;
