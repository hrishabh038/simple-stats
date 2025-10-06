import React from "react";

// group relative add this to the parent element className
const Glow = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
  );
};

export default Glow;
