import React from "react";
import { Logo } from "../assets/assets";

const BrandLogo = () => {
  return (
    <div className="flex items-center gap-3">
      <img className="w-[65px] h-full" src={Logo} />
      <div className="marck-script-regular text-3xl -rotate-6">analytics</div>
    </div>
  );
};

export default BrandLogo;
