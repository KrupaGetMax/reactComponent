// HeroSection.js
import React from "react";

const HeroSectionC = () => {
  return (
    <div className="relative bg-cover bg-center h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ zIndex: -1 }}
      ></div>
      {/* Text Section */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white z-10">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Your Hero Text Goes Here
          </h1>
          <p className="text-lg lg:text-xl">Your subtext goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionC;
