import React from "react";
import { Inputarea, Button, Glow } from "../components/components";
import { BannerOne } from "../assets/assets";
import { waitlistPageData } from "../metadata/waitlistPageData";

const JoinTheWaitListForm = () => {
  return (
    // The Modern Card: focus on spacing, border, and shadow for a clean look
    <div className="relative">
      <div className="absolute w-[85px] bottom-0 z-10 right-[-25px] md:left-[-44px]">
        <img src={BannerOne} alt="" />
      </div>
      <form className="group relative flex w-full max-w-sm flex-col gap-4 rounded-md shadow border-2 border-blue-300 dark:border-blue-500 p-6 bg-white dark:bg-neutral-800">
        {/* 1. Improved Typography and Hierarchy */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-neutral-700 dark:text-white">
            {waitlistPageData.forms.joinTheWaitListForm.heading}
          </h2>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            {waitlistPageData.forms.joinTheWaitListForm.subHeading}
          </p>
        </div>

        {/* 2. Inputs remain clean and simple */}
        <div className="flex flex-col gap-4">
          <Inputarea
            label={waitlistPageData.forms.joinTheWaitListForm.name.label}
            placeholder={waitlistPageData.forms.joinTheWaitListForm.name.placeholder}
          />
          <Inputarea
            label={waitlistPageData.forms.joinTheWaitListForm.email.label}
            placeholder={waitlistPageData.forms.joinTheWaitListForm.email.placeholder}
            type={waitlistPageData.forms.joinTheWaitListForm.email.type}
          />
          <Inputarea
            label={waitlistPageData.forms.joinTheWaitListForm.phone.label}
            placeholder={waitlistPageData.forms.joinTheWaitListForm.phone.placeholder}
          />
        </div>

        {/* 3. A stronger, more prominent Call-to-Action */}
        <Button
          variant={waitlistPageData.forms.joinTheWaitListForm.submit.variant}
          colorScheme={waitlistPageData.forms.joinTheWaitListForm.submit.colorScheme}
          className="mt-2 w-full py-3 text-base font-semibold"
        >
          {waitlistPageData.forms.joinTheWaitListForm.submit.label}
        </Button>

        <Glow />
      </form>
    </div>
  );
};

export default JoinTheWaitListForm;
