import React, { useState } from "react";
import { BrandLogo, ThemeToogle } from "../components/components";
import { waitlistPageData } from "../metadata/waitlistPageData";
import { twMerge } from "tailwind-merge";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [sidenav, setSidenav] = useState(false);
  return (
    <>
      <nav className=" z-40 fixed top-0 left-0 right-0 h-[75px] px-4 flex items-center justify-center border-b border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900">
        <div className="w-[1000px] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-[full] h-[28px]">
              <BrandLogo />
            </div>
            <ThemeToogle />
          </div>
          {/* <MainMenu /> */}
          <ul className="hidden sm:flex items-center gap-3">
            {waitlistPageData.navbar.map((item, index) => (
              <li
                className={twMerge(
                  " cursor-pointer rounded px-2 py-1 hover:text-blue-600 font-medium",
                  item.active && "bg-blue-600 text-neutral-200 hover:text-neutral-200"
                )}
                key={index}
              >
                {item.title}
              </li>
            ))}
          </ul>
          {/* Sidenav toogle */}
          <div
            className=" cursor-pointer w-[30px] h-[30px] rounded hover:bg-neutral-700 flex sm:hidden items-center justify-center dark:text-neutral-200"
            onClick={() => setSidenav(true)}
          >
            <RiMenu3Fill className="text-2xl" />
          </div>
        </div>
      </nav>
      {sidenav && <Sidenav handleClick={() => setSidenav(false)} />}
    </>
  );
};

const Sidenav = ({ handleClick }) => {
  return (
    <div className="z-50 fixed top-0 bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm z-50 flex">
      <div className=" flex flex-col gap-8 min-w-[300px] h-full bg-white text-neutral-200 dark:bg-neutral-900 slide-in-left">
        <div className="w-full h-[75px] gap-2  cursor-pointer flex items-center justify-between shadow-md px-4">
          <div className="flex items-center gap-2">
            <div className="w-[full] h-[28px]">
              <BrandLogo />
            </div>
            <ThemeToogle />
          </div>
          <div
            onClick={handleClick}
            className="rounded flex items-center justify-center w-[30px] h-[30px] bg-red-700 hover:bg-red-500"
          >
            <IoMdClose className="text-xl" />
          </div>
        </div>
        {/* Main Menu */}
        <ul className="flex flex-col gap-2 px-4">
          {waitlistPageData.navbar.map((item, index) => (
            <li
              className={twMerge(
                " cursor-pointer rounded px-2 py-1 hover:text-blue-600 font-medium dark:text-neutral-200",
                item.active && "bg-blue-600 text-neutral-200 hover:text-neutral-200"
              )}
              key={index}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-full " onClick={handleClick}></div>
    </div>
  );
};

export default Navbar;
