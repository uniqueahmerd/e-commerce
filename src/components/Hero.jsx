import React from "react";
import { assets } from "../assets/assets";

const Hero = React.memo(() => {
  return (
    <div className="flex flex-col items-center sm:flex-row  border border-gray-500 ">
      {/* left side */}
      <div className="flex items-center sm:w-1/2 w-full justify-center py-10 sm:py-0">
        <div>
          <div className="flex items-center gap-1">
            <p className="h-[1px] w-[40px] bg-black"></p>
            <p className="font-medium text-sm md:text-base ">
              OUR BEST SELLERS
            </p>
          </div>
          <h1 className="text-3xl lg:text-5xl sm:py-3">Latest Arrivals</h1>
          <div className="flex items-center gap-1">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="h-[1px] w-[40px] bg-black"></p>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className=" w-full sm:w-1/2">
        <img src={assets.hero_img} alt="hero" loading="lazy" />
      </div>
    </div>
  );
});

export default Hero;
