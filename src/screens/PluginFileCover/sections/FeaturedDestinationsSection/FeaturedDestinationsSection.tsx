import React from "react";
import { Button } from "../../../../components/ui/button";

export const FeaturedDestinationsSection = (): JSX.Element => {
  const tours = [
    {
      title: "Hill Stations",
      description: "Misty mountains and tea gardens",
      image: "/rectangle-4.svg",
    },
    {
      title: "Backwaters",
      description: "Serene houseboat experiences",
      image: "/rectangle-5.svg",
    },
    {
      title: "Forts & Palaces",
      description: "Historical treasures",
      image: "/rectangle-6.svg",
    },
    {
      title: "Beaches",
      description: "Golden sands and azure waters",
      image: "/rectangle-7.png",
    },
    {
      title: "Waterfalls",
      description: "Nature's spectacular cascades",
      image: "/rectangle-11.svg",
    },
    {
      title: "Temples",
      description: "Ancient spiritual heritage",
      image: "/rectangle-20.svg",
    },
  ];

  return (
    <section id="tour" className="w-full flex flex-col items-center py-12 md:py-16 px-4">
      <div className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffd422] text-2xl md:text-3xl tracking-[0.30px] leading-[25px] text-center">
        Every Travel Has a Story
      </div>

      <h2 className="[font-family:'Palanquin_Dark',Helvetica] font-medium text-neutral-100 text-3xl md:text-5xl lg:text-[65px] text-center tracking-[0.65px] leading-tight md:leading-[60px] mt-6 md:mt-11 mb-12 md:mb-16">
        EXCLUSIVE TOUR
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8 w-full max-w-7xl mb-12 md:mb-16">
        {tours.map((tour, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            style={{
              transform: 'rotate(45deg)',
              overflow: 'hidden',
            }}
          >
            <div className="relative w-full aspect-square overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                style={{ transform: 'rotate(-45deg) scale(1.5)' }}
                alt={tour.title}
                src={tour.image}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center p-4"
                style={{ transform: 'rotate(-45deg)' }}
              >
                <h3 className="[font-family:'Palanquin_Dark',Helvetica] font-medium text-white text-xs md:text-sm lg:text-base text-center tracking-[0.20px] leading-tight mb-1">
                  {tour.title}
                </h3>
                <p className="[font-family:'Marmelad',Helvetica] font-normal text-white/80 text-[10px] md:text-xs text-center tracking-[0.15px] leading-tight">
                  {tour.description}
                </p>
              </div>
            </div>
            <div
              className="absolute -inset-1 border-2 border-[#ffd422] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ borderRadius: '4px' }}
            />
          </div>
        ))}
      </div>

      <Button className="w-[240px] md:w-[287px] h-[60px] md:h-[70px] bg-[#ffd422] hover:bg-[#ffd422]/90 rounded-[10px] [font-family:'Palanquin_Dark',Helvetica] font-normal text-[#3f3f44] text-2xl md:text-[28px] tracking-[0] leading-[25px]">
        Find Holiday
      </Button>
    </section>
  );
};
