import { Button, Carousel, IconButton } from "@material-tailwind/react";
import sliderData from "./fakedata";
import "./Carousel.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Slider() {
  return (
    <Carousel
      transition={{ duration: 1 }}
      className="rounded-xl"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 -translate-y-2/4 left-4"
        >
          <FaArrowLeft strokeWidth={2} className="w-6 h-6 text-red-300" />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 -translate-y-2/4 !right-4"
        >
          <FaArrowRight strokeWidth={2} className="w-6 h-6 text-red-300" />
        </IconButton>
      )}
    >
      {sliderData.map((slider) => {
        return (
          <div>
            <div className="absolute top-5 md:top-1/3 pl-16 md:pl-20">
              <p className="uppercase text-gray-600 text-sm md:text-xl lg:text-3xl tracking-widest">
                {slider.title}
              </p>
              <p className="slider-main-text mb-0 md:mb-4 lg:mb-8">{slider.main_text}</p>
              <button className="shop-btn">Shop More</button>
            </div>
            <img className="slider-img" src={slider.img} alt="" />
          </div>
        );
      })}
    </Carousel>
  );
}
