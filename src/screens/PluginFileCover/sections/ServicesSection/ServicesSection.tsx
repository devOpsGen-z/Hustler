import React from "react";

export const ServicesSection = (): JSX.Element => {
  const images = [
    {
      src: "/rectangle-4.svg",
      alt: "Kerala landscape 1",
    },
    {
      src: "/rectangle-5.svg",
      alt: "Kerala landscape 2",
    },
    {
      src: "/rectangle-6.svg",
      alt: "Kerala landscape 3",
    },
    {
      src: "/rectangle-7.png",
      alt: "Kerala landscape 4",
    },
  ];

  return (
    <section id="about" className="relative w-full py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4 md:mb-6">
          <div className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffd422] text-2xl md:text-3xl tracking-[0.30px] leading-[25px]">
            Who We Are
          </div>
        </div>

        <div className="text-center mb-8 md:mb-12">
          <h2 className="[font-family:'Palanquin_Dark',Helvetica] font-semibold text-[#f4f4f4] text-3xl md:text-5xl lg:text-[65px] tracking-[0.65px] leading-tight md:leading-[50px]">
            EXPLORE THE LAND OF BEAUTY & PEACE
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <p className="[font-family:'Marmelad',Helvetica] font-normal text-[#c0c0c0] text-base md:text-xl lg:text-[25px] tracking-[0] leading-relaxed md:leading-10 mb-8">
              Kerala, God's Own Country, is a premier destination offering curated, immersive travel experiences. From exploring lush green hills and serene backwaters to discovering ancient temples and pristine beaches, we deliver journeys that go beyond sightseeing — offering moments that inspire, educate, and connect.
            </p>
            <p className="[font-family:'Marmelad',Helvetica] font-normal text-[#c0c0c0] text-base md:text-xl lg:text-[25px] tracking-[0] leading-relaxed md:leading-10">
              Experience the rich culture, breathtaking nature, and warm hospitality that makes Kerala a must-visit destination for travelers seeking peace and adventure.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {images.map((image, index) => (
              <img
                key={index}
                className="w-full h-auto aspect-[4/5] object-cover rounded-lg shadow-lg"
                alt={image.alt}
                src={image.src}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
