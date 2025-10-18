import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const destinations = [
  {
    title: "Delhi",
    description: "India's vibrant capital",
    image: "/rectangle-4.svg",
  },
  {
    title: "Kerala",
    description: "God's Own Country",
    image: "/rectangle-5.svg",
  },
  {
    title: "Amritsar",
    description: "Golden Temple city",
    image: "/rectangle-6.svg",
  },
  {
    title: "Shimla",
    description: "Queen of Hills",
    image: "/rectangle-7.png",
  },
];

export const AboutUsSection = (): JSX.Element => {
  return (
    <section id="destination" className="w-full py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h3 className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffd422] text-2xl md:text-3xl tracking-[0.30px] leading-[25px] mb-4 md:mb-6">
            Choose Your Experience
          </h3>
          <h2 className="[font-family:'Palanquin_Dark',Helvetica] font-medium text-neutral-100 text-3xl md:text-5xl lg:text-[65px] tracking-[0.65px] leading-tight md:leading-[60px]">
            TOP ATTRACTION DESTINATIONS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-lg border-0 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#ffd422]/20"
            >
              <CardContent className="p-0 relative h-[350px] md:h-[400px]">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  alt={destination.title}
                  src={destination.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h4 className="[font-family:'Palanquin_Dark',Helvetica] font-medium text-white text-2xl md:text-3xl text-center tracking-[0.30px] leading-tight mb-2">
                    {destination.title}
                  </h4>
                  <p className="[font-family:'Marmelad',Helvetica] font-normal text-white/90 text-sm md:text-base text-center tracking-[0.15px] leading-relaxed">
                    {destination.description}
                  </p>
                </div>

                <div className="absolute inset-0 border-4 border-[#ffd422] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
