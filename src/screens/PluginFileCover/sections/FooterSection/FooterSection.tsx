import React from "react";

const destinations = [
  {
    name: "Delhi",
    image: "/rectangle-40.svg",
    className: "top-0",
  },
  {
    name: "Manali",
    image: "/rectangle-38.svg",
    className: "top-0",
  },
  {
    name: "Goa",
    image: "/rectangle-39.svg",
    className: "top-[77px]",
  },
  {
    name: "Amritsar",
    image: "/rectangle-41.svg",
    className: "top-[77px]",
  },
  {
    name: "Shimla",
    image: "/rectangle-42.svg",
    className: "top-0",
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center py-16">
      <h3 className="h-6 [font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffd422] text-3xl tracking-[0.30px] leading-[25px] whitespace-nowrap">
        Choose Your Experience
      </h3>

      <h2 className="h-[46px] mt-[46px] [font-family:'Palanquin_Dark',Helvetica] font-medium text-neutral-100 text-[65px] text-center tracking-[0.65px] leading-[60px] whitespace-nowrap">
        TOP ATTRACTIONS DESTINATIONS
      </h2>

      <div className="h-[490px] w-full max-w-[1631px] relative mt-[156px]">
        {destinations.map((destination, index) => {
          const positions = [
            "left-0",
            "left-[calc(50.00%_-_489px)]",
            "left-[calc(50.00%_-_160px)]",
            "left-[calc(50.00%_+_170px)]",
            "left-[calc(50.00%_+_499px)]",
          ];

          const overlayPositions = [
            { top: "top-[298px]", left: "left-0" },
            { top: "top-[381px]", left: "left-[330px]" },
            { top: "top-[298px]", left: "left-[659px]" },
            { top: "top-[381px]", left: "left-[990px]" },
            { top: "top-[298px]", left: "left-[1319px]" },
          ];

          const textPositions = [
            {
              top: "top-[317px]",
              left: "left-[calc(50.00%_-_715px)]",
              width: "w-[101px]",
            },
            {
              top: "top-[317px]",
              left: "left-[calc(50.00%_-_68px)]",
              width: "w-[126px]",
            },
            {
              top: "top-[400px]",
              left: "left-[calc(50.00%_-_372px)]",
              width: "w-[73px]",
            },
            {
              top: "top-[400px]",
              left: "left-[calc(50.00%_+_243px)]",
              width: "w-[165px]",
            },
            {
              top: "top-[317px]",
              left: "left-[calc(50.00%_+_587px)]",
              width: "w-[133px]",
            },
          ];

          return (
            <React.Fragment key={destination.name}>
              <img
                className={`absolute ${destination.className} ${positions[index]} w-[310px] h-[417px] ${index === 3 ? "object-cover" : ""}`}
                alt={destination.name}
                src={destination.image}
              />
              <div
                className={`absolute ${overlayPositions[index].top} ${overlayPositions[index].left} w-[302px] h-[63px] bg-[#000000b2]`}
              />
              <div
                className={`absolute ${textPositions[index].top} ${textPositions[index].left} ${textPositions[index].width} [font-family:'Marmelad',Helvetica] font-normal text-neutral-100 text-[40px] text-center tracking-[0.40px] leading-[60px] whitespace-nowrap`}
              >
                {destination.name}
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <p className="h-[18px] mt-[156px] [font-family:'Marmelad',Helvetica] font-normal text-[25px] text-center tracking-[0.25px] leading-[60px] whitespace-nowrap">
        <span className="text-white tracking-[0.06px]">
          Speak To Our Destination Experts At Call
        </span>
        <span className="[font-family:'Palanquin_Dark',Helvetica] text-white tracking-[0.06px]">
          {" "}
        </span>
        <span className="[font-family:'Palanquin_Dark',Helvetica] font-medium text-[#ffcd00] tracking-[0.06px]">
          +(45) 899 566 389
        </span>
        <span className="[font-family:'Palanquin_Dark',Helvetica] font-medium text-white tracking-[0.06px]">
          {" "}
        </span>
        <span className="text-white tracking-[0.06px]">or</span>
        <span className="[font-family:'Palanquin_Dark',Helvetica] font-medium text-white tracking-[0.06px]">
          {" "}
        </span>
        <span className="[font-family:'Palanquin_Dark',Helvetica] font-medium text-[#ffcd00] tracking-[0.06px] cursor-pointer hover:underline">
          Request a Quote
        </span>
      </p>
    </section>
  );
};
