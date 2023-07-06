import React from "react";
import img1 from "../../../assets/images/hero/1.webp";
import img2 from "../../../assets/images/hero/2.avif";
import img3 from "../../../assets/images/hero/3.avif";
import img4 from "../../../assets/images/hero/4.webp";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <div className="flex gap-3 flex-col lg:flex-row">
        <div>
          <div>
            <div className="absolute left-10 xl:left-36 2xl:left-64 mt-10 z-10">
              <p className="text-2xl font-bold leading-10">Bag Collection</p>
              <p className="text-2xl font-bold leading-10 text-gray-600">
                Sale off 50%
              </p>
            </div>
            <img className="zoom w-full" src={img1} alt="Hero Image 0" />
          </div>
        </div>
        <div className="flex flex-col  gap-3">
          <div className="flex gap-0  lg:gap-3">
            <img className="w-1/2 " src={img2} alt="" />
            <img className="zoom w-1/2" src={img3} alt="" />
          </div>
          <div>
            <div className="absolute mt-5 ml-5 lg:ml-16 z-10">
              <p className="text-2xl font-bold leading-10">Bag Collection</p>
              <p className="text-2xl font-bold leading-10 text-gray-600">
                Sale off 50%
              </p>
            </div>
            <img className="img4 zoom" src={img4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
