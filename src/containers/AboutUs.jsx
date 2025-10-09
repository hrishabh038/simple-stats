import React from "react";
import { Glow, SectionHeading } from "../components/components";
import { metadata } from "../metadata/metadata";

const AboutUs = () => {
  return (
    <SectionHeading heading={metadata.sectionHeadings.aboutUs.title} className={"flex flex-col gap-12"}>
      <div className="text-lg sm:text-xl text-center">
        {metadata.aboutUs.description}
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-neutral-400 font-bold text-center">
          {metadata.sectionHeadings.aboutUs.subSection.title.toUpperCase()}
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          {metadata.aboutUs.team.map((member, index) => (
            <FounderCard
              key={index}
              image={member.img}
              name={member.name}
              role={member.designation}
              company={member.company}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </SectionHeading>
  );
};

const FounderCard = ({ name, role, company, description, image }) => {
  const getInitials = (fullName) => {
    if (!fullName) return "";
    const names = fullName.trim().split(" ");
    const initials = names.map((n) => n[0].toUpperCase());
    return initials.slice(0, 2).join("");
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      className="group relative border border-neutral-300 dark:border-neutral-700 w-full flex flex-col gap-6 p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 group"
    >
      {/* Avatar */}
      <div className="flex flex-col items-center gap-4">
        {image ? (
          <img
            className="w-[100px] h-[100px] rounded-full"
            src={image}
            alt=""
          />
        ) : (
          <div className="w-[100px] h-[100px] rounded-full bg-blue-100 dark:bg-neutral-700 flex items-center justify-center text-2xl font-bold text-blue-500 dark:text-blue-300 shadow-md">
            {getInitials(name)}
          </div>
        )}
        <div className="flex flex-col text-center">
          <h3 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-100">
            {name}
          </h3>
          <p className=" text-neutral-500 dark:text-neutral-400">
            {role} @ <span className="font-medium">{company}</span>
          </p>
        </div>
      </div>

      {/* Description */}
      <p className=" text-neutral-600 dark:text-neutral-300 text-center leading-relaxed">
        {description}
      </p>

      <Glow />
    </div>
  );
};

export default AboutUs;
