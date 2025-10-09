import React from "react";
import { JoinTheWaitListForm } from "../forms/forms";
import { BrandLogo } from "../components/components";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { metadata } from "../metadata/metadata";

const Footer = () => {
  return (
    <footer
      data-aos="fade-up"
      className="px-4 w-full flex justify-center border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-800/30"
    >
      <div className="w-[1000px] overflow-hidden">
        <div className=" py-8 flex flex-col-reverse md:flex-row justify-between gap-12">
          <div className="flex flex-col items-center md:items-start gap-6 w-full">
            <div className="w-fit h-[44px]">
              <BrandLogo />
            </div>
            <div className="text-lg sm:text-xl text-center md:text-start text-neutral-500">
              {metadata.footer.description}
            </div>
            <ul className="flex gap-6 w-fit">
              {metadata.footer.links.map((item, index) => (
                <li className="text-neutral-500 cursor-pointer hover:text-blue-500">
                  {item.title}
                </li>
              ))}
            </ul>
            <ul className="flex gap-3 w-fit text-2xl">
              {metadata.footer.socialMediaHandles.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li
                    key={index}
                    className="text-neutral-500 cursor-pointer hover:text-blue-500"
                  >
                    <Icon />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="max-w-[325px]">
            <JoinTheWaitListForm />
          </div>
        </div>
        <div className="text-center h-[75px] flex items-center justify-center px-4 text-neutral-500 border-t border-neutral-300 dark:border-neutral-700">
          {metadata.footer.catchPhrase}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
