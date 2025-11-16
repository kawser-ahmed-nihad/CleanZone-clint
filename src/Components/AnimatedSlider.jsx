import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fwalk-pile-garbage&psig=AOvVaw0-SdBQPGFeqmW5MaRdnjnI&ust=1763400267467000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDztI2Y95ADFQAAAAAdAAAAABAE",
    title: "Rising Urban Garbage Crisis",
    description: "Uncontrolled waste dumping is causing severe pollution, foul smells, and health risks in urban areas. Overflowing dustbins, plastic waste, clogged drains, and uncollected garbage are turning city spaces into high-risk zones for diseases and environmental damage.",
  },
  {
    img: "https://i.postimg.cc/DyRFzSdV/Screenshot-2025-05-21-215937.png",
    title: "Plant a Better Future",
    description: "Take a step to save the Earth by planting trees.",
  },
  {
    img: "https://i.postimg.cc/XJx4Nxxx/Screenshot-2025-05-21-220613.png",
    title: "Nature in Your Home",
    description: "Make your home calm, green, and refreshing.",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  arrows: false,
};

const AnimatedSlider = () => {
  return (
    <div className="mt-16">
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[300px] md:h-[400px] w-full">

            <img
              src={slide.img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />


            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start md:items-center text-white px-6 md:px-16">
              <h3 className="text-2xl md:text-4xl font-bold mb-2">{slide.title}</h3>
              <p className="text-sm md:text-base max-w-md mb-4 text-gray-200">{slide.description}</p>
              <button className="bg-green-600 hover:bg-green-700 transition px-6 py-2 text-sm rounded shadow-md">
                Explore Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AnimatedSlider;
