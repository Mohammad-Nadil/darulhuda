import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={` max-w-[1232px] px-2 md:px-3 mx-auto relative ${className}`}>
      {children}
    </div>
  );
};

export default Container;
