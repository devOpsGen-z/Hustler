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
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Absolutely wonderful! Kerala exceeded all my expectations. The backwaters, the beaches, and the hospitality were incredible. Customer service was professional. Highly recommend!",
      rating: 5,
    },
    {
      name: "John Doe",
      text: "An unforgettable experience! The team arranged everything perfectly. From the hill stations to the beaches, every moment was magical. Will definitely visit again!",
      rating: 5,
    },
    {
      name: "Emma Wilson",
      text: "Best vacation ever! The guides were knowledgeable and friendly. Kerala's beauty is beyond words. The entire trip was seamless and memorable.",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="relative w-full py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <div className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffcd00] text-2xl md:text-3xl tracking-[0.30px] leading-[25px]">
            REAL TRAVELERS REVIEWS
          </div>
        </div>

        <h2 className="[font-family:'Palanquin_Dark',Helvetica] font-medium text-white text-3xl md:text-5xl lg:text-6xl text-center tracking-[0.60px] leading-tight md:leading-[60px] mb-12 md:mb-16">
          What Our Travelers Say
          <br />
          About The Trip
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white/5 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-[#ffd422]/20 hover:border-[#ffd422] transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-2 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <img
                    key={starIndex}
                    className="w-5 h-5 object-cover"
                    alt="Star"
                    src="/star-19.png"
                  />
                ))}
              </div>

              <p className="[font-family:'Marmelad',Helvetica] font-normal text-[#e6e6e6] text-base md:text-lg text-left tracking-[0.30px] leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#ffd422] flex items-center justify-center">
                  <span className="[font-family:'Palanquin_Dark',Helvetica] font-medium text-[#002a28] text-xl">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-white text-lg tracking-[0.32px] leading-[25px]">
                    {testimonial.name}
                  </div>
                  <div className="[font-family:'Marmelad',Helvetica] font-normal text-white/60 text-sm">
                    Verified Traveler
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
