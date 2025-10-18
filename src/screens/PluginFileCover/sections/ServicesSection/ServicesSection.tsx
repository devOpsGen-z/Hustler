import React from "react";

export const ServicesSection = (): JSX.Element => {
  const images = [
    {
      src: "/rectangle-4.svg",
      alt: "Rectangle",
      className: "w-full max-w-[373px] h-auto aspect-[373/493] object-cover",
    },
    {
      src: "/rectangle-5.svg",
      alt: "Rectangle",
      className: "w-full max-w-[233px] h-auto aspect-[233/308] object-cover",
    },
    {
      src: "/rectangle-6.svg",
      alt: "Rectangle",
      className: "w-full max-w-[373px] h-auto aspect-[373/493] object-cover",
    },
    {
      src: "/rectangle-7.png",
      alt: "Rectangle",
      className:
        "w-full max-w-[233px] h-auto aspect-[233/308] rounded-[10px] border-2 border-solid border-[#ffd422] object-cover",
    },
  ];

  return (
    <section className="relative w-full py-16 px-4">
      <div className="max-w-[1618px] mx-auto">
        <div className="text-center mb-4">
          <div className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffd422] text-3xl tracking-[0.30px] leading-[25px]">
            We Are The Best
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="[font-family:'Palanquin_Dark',Helvetica] font-semibold text-[#f4f4f4] text-[65px] tracking-[0.65px] leading-[50px]">
            ABOUT US
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-8 items-start">
          <div className="flex flex-col gap-8">
            <img
              className={images[0].className}
              alt={images[0].alt}
              src={images[0].src}
            />
            <img
              className={images[1].className}
              alt={images[1].alt}
              src={images[1].src}
            />
          </div>

          <div className="flex items-center justify-center">
            <p className="max-w-[752px] [font-family:'Marmelad',Helvetica] font-normal text-[#c0c0c0] text-[25px] text-center tracking-[0] leading-10">
              Tarsier Safaris Company Ltd Is A Premier Tourism Operator
              Specializing In Curated, Immersive Travel Experiences Across
              Uganda. From Tracking The Majestic Mountain Gorillas Of Bwindi, To
              Gliding Across Serene Lakes On Boat Cruises, To Standing In Awe
              Beneath Thundering Waterfalls, We Deliver Journeys That Go Beyond
              Sightseeing — Offering Moments That Inspire, Educate, And Connect.
            </p>
          </div>

          <div className="flex flex-col gap-8 items-end">
            <img
              className={images[2].className}
              alt={images[2].alt}
              src={images[2].src}
            />
            <img
              className={images[3].className}
              alt={images[3].alt}
              src={images[3].src}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
