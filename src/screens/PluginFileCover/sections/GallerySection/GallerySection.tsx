import React from "react";

const teamMembers = [
  {
    name: "RAJESH KUMAR",
    role: "SENIOR TOUR GUIDE",
    image: "/rectangle-72.svg",
  },
  {
    name: "PRIYA MENON",
    role: "TRAVEL PLANNER",
    image: "/rectangle-71.svg",
  },
  {
    name: "ANIL VARMA",
    role: "TRAVEL CONSULTANT",
    image: "/rectangle-69.svg",
  },
  {
    name: "MAYA KRISHNAN",
    role: "PHOTOGRAPHER",
    image: "/rectangle-70.svg",
  },
];

export const GallerySection = (): JSX.Element => {
  return (
    <section className="w-full py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffcd00] text-2xl md:text-3xl tracking-[0.30px] leading-[25px] text-center mb-4 md:mb-6">
          OUR TEAM
        </h2>

        <h1 className="[font-family:'Palanquin_Dark',Helvetica] font-medium text-white text-3xl md:text-5xl lg:text-[65px] text-center tracking-[0.65px] leading-tight md:leading-[60px] mb-6 md:mb-8">
          THE BEST TEAM ON YOUR JOURNEY
        </h1>

        <p className="[font-family:'Marmelad',Helvetica] font-normal text-white text-sm md:text-base text-center tracking-[0.15px] leading-relaxed md:leading-[25px] max-w-[513px] mx-auto mb-12 md:mb-16">
          Our pride and joy is creating unforgettable adventures that you will remember for a lifetime. Meet the experts who make it all possible.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="relative mb-6">
                <div className="border-2 border-solid border-[#ffcd00] w-full max-w-[283px] aspect-[279/397] absolute top-2 left-2 transition-all duration-300 group-hover:top-0 group-hover:left-0" />
                <img
                  className="w-full max-w-[279px] aspect-[279/397] object-cover relative shadow-lg transition-transform duration-300 group-hover:scale-105"
                  alt={member.name}
                  src={member.image}
                />
              </div>

              <h3 className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffcd00] text-lg md:text-xl tracking-[0.20px] leading-[25px] text-center mb-2">
                {member.name}
              </h3>

              <p className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-white text-xs md:text-[13px] tracking-[0.13px] leading-tight text-center">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
