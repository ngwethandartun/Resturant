import React from "react";

const Hero = () => {
  return (
    <div className="mx-auto py-2 mt-10 ">
      <div className=" relative">
        <div className="absolute flex flex-col w-full h-full justify-center">
          <h1 className="px-4 text-7xl italic text-gray-50">
            Foods Made <br />
            <span className="px-7 py-2 text italic text-6xl text-orange-500"> You Happy</span>
          </h1>
        </div>
        <img className="image w-full h-" src="images/hero.jpg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
