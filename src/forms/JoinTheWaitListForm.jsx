import React from "react";
import { Inputarea, Button, Glow } from "../components/components";
import { BannerOne } from "../assets/assets";

const JoinTheWaitListForm = () => {
  return (
    // The Modern Card: focus on spacing, border, and shadow for a clean look
    <div className="relative">
      <div className="absolute w-[85px] bottom-0 z-10 right-[-25px] md:left-[-44px]">
        <img src={BannerOne} alt="" />
      </div>
      <form className="group relative flex w-full max-w-sm flex-col gap-4 rounded-md shadow border-2 border-blue-300 dark:border-blue-500 p-6 bg-white dark:bg-gray-800">
        {/* 1. Improved Typography and Hierarchy */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-white">
            Get Early Access
          </h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Join the waitlist to be the first to know when we launch.
          </p>
        </div>

        {/* 2. Inputs remain clean and simple */}
        <div className="flex flex-col gap-4">
          <Inputarea label="Full Name" placeholder="e.g., Jane Doe" />
          <Inputarea
            label="Email Address"
            placeholder="you@example.com"
            type="email"
          />
          <Inputarea
            label="Phone Number (Optional)"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        {/* 3. A stronger, more prominent Call-to-Action */}
        <Button
          variant="solid"
          colorScheme="primary"
          className="mt-2 w-full py-3 text-base font-semibold"
        >
          Notify Me When You Launch
        </Button>

        <Glow />
      </form>
    </div>
  );
};

export default JoinTheWaitListForm;
