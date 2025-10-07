import React from "react";
import { JoinTheWaitListForm } from "../forms/forms";
import { BrandLogo } from "../components/components";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              consectetur tempora quae recusandae impedit quibusdam illum atque
              saepe est, vero ipsam ut soluta nobis beatae voluptas, quisquam
              eos maiores quos accusamus! Iste ab modi incidunt, doloribus iusto
              obcaecati unde ipsa.
            </div>
            <ul className="flex gap-6 w-fit">
              <li className="text-neutral-500 cursor-pointer hover:text-blue-500">
                Privacy
              </li>
              <li className="text-neutral-500 cursor-pointer hover:text-blue-500">
                Terms
              </li>
              <li className="text-neutral-500 cursor-pointer hover:text-blue-500">
                Blogs
              </li>
            </ul>
            <ul className="flex gap-3 w-fit text-2xl">
              <li className="text-neutral-500 cursor-pointer hover:text-blue-500">
                <FaTwitter />
              </li>
              <li className="text-neutral-500 cursor-pointer hover:text-blue-500">
                <FaLinkedin />
              </li>
              <li className="text-neutral-500 cursor-pointer hover:text-blue-500">
                <FaFacebook />
              </li>
              <li className="text-neutral-500 cursor-pointer hover:text-blue-500">
                <FaInstagram />
              </li>
            </ul>
          </div>
          <div className="max-w-[325px]">
            <JoinTheWaitListForm />
          </div>
        </div>
        <div className="text-center h-[75px] flex items-center justify-center px-4 text-neutral-500 border-t border-neutral-300 dark:border-neutral-700">
          Made with ❤️ by indie hackers in India
        </div>
      </div>
    </footer>
  );
};

export default Footer;
