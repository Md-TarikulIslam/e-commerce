import React from "react";
import Slider from "./Carousel/Carousel";
import Hero from "./Hero/Hero";
import TrendyNavbar from "./TrendyItem/TrendyNavbar/TrendyNavbar";
import Items from "./TrendyItem/Items/Items";

const Homepage = () => {
  return (
    <div>
      <Slider></Slider>
      <Hero></Hero>
      <TrendyNavbar></TrendyNavbar>
      <Items></Items>
    </div>
  );
};

export default Homepage;
