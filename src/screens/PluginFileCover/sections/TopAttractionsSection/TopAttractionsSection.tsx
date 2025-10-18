import { ClockIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const travelPackages = [
  {
    id: 1,
    image: "/rectangle-56.svg",
    country: "Thailand",
    title: "Best Of Pattaya & Bangkok Getaway",
    duration: "3n pattaya   2n bangkok",
    rating: "4.5/5",
    price: "$177",
    stars: 5,
  },
  {
    id: 2,
    image: "/rectangle-57.svg",
    country: "Malaysia",
    title: "Most Wanted Kuala Lumpur Package",
    duration: "4n singapore    2n kualalumpur",
    rating: "4.7/5",
    price: "$177",
    stars: 5,
  },
  {
    id: 3,
    image: "/rectangle-58.svg",
    country: "Dubai",
    title: "Hero Package - Dubai Grand Getaway",
    duration: "4n dubai   1n abu Dhabi",
    rating: "4.5/5",
    price: "$177",
    stars: 5,
  },
];

export const TopAttractionsSection = (): JSX.Element => {
  return (
    <section className="relative w-full mb-12 md:mb-0">
      <div className="relative w-full h-[400px] md:h-[564px]">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background"
          src="/rectangle-54.png"
        />
        <div className="absolute inset-0 bg-[#00000033]" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <div className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffcd00] text-2xl md:text-3xl tracking-[0.30px] leading-[25px] text-center mb-4 md:mb-8">
            Book Now And Save
          </div>

          <h2 className="[font-family:'Palanquin_Dark',Helvetica] font-medium text-white text-3xl md:text-5xl lg:text-[65px] text-center tracking-[0.65px] leading-tight md:leading-[60px]">
            LAST MINUTE
            <br />
            TRAVEL DEALS
          </h2>
        </div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 -mt-32 md:-mt-[140px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {travelPackages.map((pkg) => (
            <Card
              key={pkg.id}
              className="relative w-full h-[500px] md:h-[554px] rounded-[5px] shadow-2xl overflow-hidden border-0 group hover:scale-105 transition-transform duration-300"
            >
              <CardContent className="relative w-full h-full p-0">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  alt={pkg.title}
                  src={pkg.image}
                />
                <div className="absolute inset-0 bg-[#02020280] group-hover:bg-[#020202a0] transition-colors duration-300" />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between p-4 md:p-[23px]">
                    <Badge className="h-[25px] bg-[#ffcd00] hover:bg-[#ffcd00] rounded-[5px] px-3 md:px-[18.5px] border-0">
                      <span className="[font-family:'Palanquin_Dark',Helvetica] font-medium text-[#383838] text-xs md:text-[15px] tracking-[0.15px]">
                        Popular
                      </span>
                    </Badge>

                    <div className="flex items-center gap-1">
                      <span className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#dfdfdf] text-xs md:text-[15px] tracking-[0.15px]">
                        from
                      </span>
                      <span className="[font-family:'Palanquin_Dark',Helvetica] font-medium text-white text-base md:text-lg tracking-[0.18px]">
                        {pkg.price}
                      </span>
                    </div>
                  </div>

                  <div className="mt-auto px-4 md:px-[28px] pb-8 md:pb-[83px]">
                    <div className="[font-family:'Marmelad',Helvetica] font-normal text-white text-sm md:text-[15px] tracking-[0.15px] mb-4 md:mb-[39px]">
                      {pkg.country}
                    </div>

                    <h3 className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-white text-xl md:text-2xl lg:text-[35px] tracking-[0.35px] leading-tight mb-6 md:mb-[75px]">
                      {pkg.title}
                    </h3>

                    <div className="flex items-center gap-3 md:gap-[22px] mb-4 md:mb-[37px]">
                      <ClockIcon className="w-4 h-4 md:w-[21px] md:h-[21px] text-white" />
                      <span className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-white text-sm md:text-xl tracking-[0.20px]">
                        {pkg.duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 md:gap-[26px] mb-6 md:mb-[63px]">
                      <div className="flex gap-2 md:gap-[26px]">
                        {Array.from({ length: pkg.stars }).map((_, index) => (
                          <img
                            key={index}
                            className="w-4 h-4 md:w-[21px] md:h-[21px] object-cover"
                            alt="Star"
                            src="/star-19.png"
                          />
                        ))}
                      </div>
                      <span className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-white text-sm md:text-xl tracking-[0.20px]">
                        {pkg.rating}
                      </span>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full md:w-[155px] h-10 rounded-[5px] border-[2.5px] border-[#ffcd00] bg-transparent hover:bg-[#ffcd00]/10"
                    >
                      <span className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-white text-sm md:text-[15px] tracking-[0.15px]">
                        Book Now
                      </span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
