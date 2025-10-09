import React from "react";
import { metadata } from "../metadata/metadata";

const BrandLogo = () => {
  return <img className="w-full h-full" src={metadata.logo} />;
};

export default BrandLogo;
