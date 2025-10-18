import { ArrowUpCircleIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const stars = [
  { left: "left-[898px]", src: "/star-19.png" },
  { left: "left-[924px]", src: "/star-19.png" },
  { left: "left-[950px]", src: "/star-19.png" },
  { left: "left-[976px]", src: "/star-19.png" },
  { left: "left-[1002px]", src: "/star-19.png" },
];

export const TravelTipsSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-16">
      <div className="relative w-full h-[600px]">
        <div className="absolute top-0 left-[calc(50.00%_-_197px)] w-[385px] [font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffcd00] text-3xl tracking-[0.30px] leading-[25px] whitespace-nowrap">
          REAL TRAVELERS REVIEWS
        </div>

        <div className="absolute top-[557px] left-[calc(50.00%_-_83px)] w-[158px] [font-family:'Palanquin_Dark',Helvetica] font-normal text-white text-[32px] tracking-[0.32px] leading-[25px] whitespace-nowrap">
          JOHN DOE
        </div>

        <div className="absolute top-[296px] left-[calc(50.00%_-_400px)] w-[791px] [font-family:'Marmelad',Helvetica] font-normal text-[#e6e6e6] text-3xl text-center tracking-[0.30px] leading-[25px]">
          &#34;absolutely Wonderful! Just The Right Amount Of Time Spent
          Snorkeling And One Of The Most Beautiful Beaches I Have Ever Seen.
          Customer Service Was Professional. Highly Recommend.&#34;
        </div>

        <h2 className="absolute top-[71px] left-[calc(50.00%_-_336px)] w-[663px] [font-family:'Palanquin_Dark',Helvetica] font-medium text-white text-6xl text-center tracking-[0.60px] leading-[60px]">
          What Our Travelers Say
          <br />
          about The Trip
        </h2>

        <img
          className="absolute top-[89px] left-0 w-[467px] h-[506px] object-cover"
          alt="H img"
          src="/h2-img15.png"
        />

        <img
          className="absolute top-[84px] left-[1507px] w-[413px] h-[516px] object-cover"
          alt="H img"
          src="/h2-img16.png"
        />

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-[324px] left-[1444px] w-12 h-12 p-0 bg-transparent hover:bg-transparent"
        >
          <ArrowUpCircleIcon className="w-12 h-12 text-white rotate-90" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-[324px] left-[455px] w-12 h-12 p-0 bg-transparent hover:bg-transparent"
        >
          <ArrowUpCircleIcon className="w-12 h-12 text-white -rotate-90" />
        </Button>

        {stars.map((star, index) => (
          <img
            key={`star-${index}`}
            className={`absolute top-[500px] ${star.left} w-[21px] h-[21px] object-cover`}
            alt="Star"
            src={star.src}
          />
        ))}
      </div>
    </section>
  );
};
