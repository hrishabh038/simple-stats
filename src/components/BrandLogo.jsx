import React from "react";
import { waitlistPageData } from "../metadata/waitlistPageData";

const BrandLogo = () => {
  return <img className="w-full h-full" src={waitlistPageData.logo} />;
};

export default BrandLogo;
