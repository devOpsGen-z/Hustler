import React from "react";
import { Button } from "../../../../components/ui/button";

export const FeaturedDestinationsSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center py-16">
      <div className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffd422] text-3xl tracking-[0.30px] leading-[25px] whitespace-nowrap">
        Every Month New Tour
      </div>

      <h2 className="[font-family:'Palanquin_Dark',Helvetica] font-medium text-neutral-100 text-[65px] text-center tracking-[0.65px] leading-[60px] whitespace-nowrap mt-11">
        EXCLUSIVE TOUR
      </h2>

      <img
        className="h-[593.1px] w-full max-w-[1621px] object-contain mt-[29px]"
        alt="Group"
        src="/group-6.png"
      />

      <Button className="w-[287px] h-[70px] bg-[#ffd422] hover:bg-[#ffd422]/90 rounded-[10px] mt-[120.9px] [font-family:'Palanquin_Dark',Helvetica] font-normal text-[#3f3f44] text-[28px] tracking-[0] leading-[25px]">
        View Gallery
      </Button>
    </section>
  );
};
