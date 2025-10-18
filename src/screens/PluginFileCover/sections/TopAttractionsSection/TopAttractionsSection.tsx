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
    <section className="relative w-full">
      <div className="relative w-full h-[564px]">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background"
          src="/rectangle-54.png"
        />
        <div className="absolute inset-0 bg-[#00000033]" />

        <div className="relative z-10 flex flex-col items-center pt-[67px]">
          <div className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffcd00] text-3xl tracking-[0.30px] leading-[25px] whitespace-nowrap">
            Book Now And Save
          </div>

          <h2 className="mt-[58px] [font-family:'Palanquin_Dark',Helvetica] font-medium text-white text-[65px] text-center tracking-[0.65px] leading-[60px]">
            LAST MINUTE
            <br />
            TRAVEL DEALS
          </h2>
        </div>
      </div>

      <div className="relative w-full flex justify-center gap-[129px] px-[213px] -mt-[140px]">
        {travelPackages.map((pkg) => (
          <Card
            key={pkg.id}
            className="relative w-[412px] h-[554px] rounded-[5px] shadow-[8px_10px_4px_#00000040] overflow-hidden border-0"
          >
            <CardContent className="relative w-full h-full p-0">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt={pkg.title}
                src={pkg.image}
              />
              <div className="absolute inset-0 bg-[#02020280]" />

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-start justify-between p-[23px]">
                  <Badge className="h-[25px] bg-[#ffcd00] hover:bg-[#ffcd00] rounded-[5px] px-[18.5px] border-0">
                    <span className="[font-family:'Palanquin_Dark',Helvetica] font-medium text-[#383838] text-[15px] tracking-[0.15px] leading-10">
                      Popular
                    </span>
                  </Badge>

                  <div className="flex items-center gap-1">
                    <span className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#dfdfdf] text-[15px] tracking-[0.15px] leading-10">
                      from
                    </span>
                    <span className="[font-family:'Palanquin_Dark',Helvetica] font-medium text-white text-lg tracking-[0.18px] leading-10">
                      {pkg.price}
                    </span>
                  </div>
                </div>

                <div className="mt-auto px-[28px] pb-[83px]">
                  <div className="[font-family:'Marmelad',Helvetica] font-normal text-white text-[15px] tracking-[0.15px] leading-10 mb-[39px]">
                    {pkg.country}
                  </div>

                  <h3 className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-white text-[35px] tracking-[0.35px] leading-10 mb-[75px]">
                    {pkg.title}
                  </h3>

                  <div className="flex items-center gap-[22px] mb-[37px]">
                    <ClockIcon className="w-[21px] h-[21px] text-white" />
                    <span className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-white text-xl tracking-[0.20px] leading-10">
                      {pkg.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-[26px] mb-[63px]">
                    <div className="flex gap-[26px]">
                      {Array.from({ length: pkg.stars }).map((_, index) => (
                        <img
                          key={index}
                          className="w-[21px] h-[21px] object-cover"
                          alt="Star"
                          src="/star-19.png"
                        />
                      ))}
                    </div>
                    <span className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-white text-xl tracking-[0.20px] leading-10">
                      {pkg.rating}
                    </span>
                  </div>

                  <Button
                    variant="outline"
                    className="w-[155px] h-10 rounded-[5px] border-[2.5px] border-[#ffcd00] bg-transparent hover:bg-[#ffcd00]/10"
                  >
                    <span className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-white text-[15px] tracking-[0.15px] leading-10">
                      More Information
                    </span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
